import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import { server } from "../../../../mocks/node";
import axios from "axios";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("ITs for app", () => {
  test("testing create task", async () => {
    const getSpy = jest.spyOn(axios, "get");
    const postSpy = jest.spyOn(axios, "post");

    render(<App />);
    await waitFor(
      () => {
        expect(getSpy).toHaveBeenCalled();
      },
      {
        interval: 100,
      }
    );

    const addButton = screen.getByRole("button", { name: /\+ add task/i });

    fireEvent.click(addButton);

    await waitFor(
      () => {
        expect(screen.getByText(/add a new task/i)).toBeInTheDocument();
      },
      {
        interval: 100,
      }
    );

    const createBtn = screen.getByRole("button", { name: /add/i });
    expect(createBtn).toBeInTheDocument();

    fireEvent.click(createBtn);

    await new Promise((res, req) =>
      setTimeout(() => {
        res(true);
      }, 2000)
    );
    
    let rows = [];
    await waitFor(() => {
      expect(postSpy).toHaveBeenCalled();
    });
    rows = screen.queryAllByRole("row");
    expect(rows[3]).toBeInTheDocument();
  });

  test("testing edit task", async ()=>{
    const putSpy = jest.spyOn(axios, "put");

    render(<App/>);

    await waitFor(()=>{
      expect(screen.getByText(/task1 desc/i)).toBeInTheDocument();
    });

    const taskDesc = screen.getByText(/task1 desc/i);
    fireEvent.click(taskDesc);

    await waitFor(()=>expect(screen.getByRole('button', {  name: /edit/i})).toBeInTheDocument());
    const editBtn = screen.getByRole('button', {  name: /edit/i});

    const statusInput = screen.getByRole('combobox');
    fireEvent.change(statusInput, {
      target: {value: "Completed"}
    });

    fireEvent.click(editBtn);

    await waitFor(()=>expect(putSpy).toHaveBeenCalled());
  });
});

//   /*
//   TDD

//   Home page should render all components - buttons, table, navbar
//   Clicking on row leads to edit task page
//   Clicking on add new leads to create task page
//   Delete button removes task from ui

//   Create task components render - input fields, add button, navbar
//   Clicking on add button leads back to home page

//   Edit task components render - input fields with same values, edit button, navbar
//   Clicking on edit button opens home page and reflects same changes in homepage ui.
//   */