import TaskView from "../TaskView";
import store from "../../../organisms/redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTask from "../../CreateTask/CreateTask";
import {
  renderWithProvider,
  render,
  screen,
  waitFor,
} from "../../../../utils/testUtils";
import userEvent from "@testing-library/user-event";
import { server } from "../../../../mocks/node";
import axios from "axios";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("tests for homepage", () => {
  beforeEach(() => {
    window.history.pushState({}, "", "/");
  });

  test("checking if all components render in ui", () => {
    renderWithProvider({ Component: TaskView });

    expect(
      screen.getByRole("button", { name: /\+ add task/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /task/i })
    ).toBeInTheDocument();
  });

  test("checking if clicking on add new button leads to create task page", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskView />} />
            <Route path="/create-task" element={<CreateTask />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );

    const addButton = screen.getByRole("button", { name: /\+ add task/i });
    await userEvent.click(addButton);
    expect(screen.getByText(/add a new task/i)).toBeInTheDocument();
  });

  test("checking if no tasks appear without calling api", async () => {
    renderWithProvider({ Component: TaskView });
    await expect(screen.getByText(/"no tasks to show"/i)).toBeInTheDocument();
  });

  test("checking if mockdata renders in ui", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskView />} />
            <Route path="/create-task" element={<CreateTask />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    await waitFor(
      () => {
        const row = screen.queryAllByRole("row");
        expect(row[0]).toBeInTheDocument();
      },
      {
        interval: 100,
      }
    );
  });

    test("checking if delete button calls mock api", async () => {
      const deleteSpy = jest.spyOn(axios, "delete");
      renderWithProvider({ Component: TaskView });
      let deleteBtn = []
      await waitFor(()=>{
        deleteBtn = screen.queryAllByRole("button", { name: /x/i });
        userEvent.click(deleteBtn[0]);
        expect(deleteSpy).toHaveBeenCalledTimes(1);
      }, {
        interval: 100,
      });
    });
});
