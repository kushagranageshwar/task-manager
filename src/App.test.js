import { fireEvent, render, screen } from "@testing-library/react";
import App from "./pages/App";

describe("tests for homepage", () => {
  beforeEach(() => {
    window.history.pushState({}, "", "/");
  });

  test("checking if all components render in ui", () => {
    render(<App />);
    const navbar = screen.getByRole("navigation");
    const addButton = screen.getByRole("button", { name: /\+ add task/i });
    const tableHeader = screen.getByRole("columnheader", { name: /task/i });
    const homeLink = screen.getByText(/task manager/i);

    expect(navbar).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(tableHeader).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
  });

  test("checking if add new task link works", () => {
    render(<App />);
    const addButton = screen.getByRole("button", { name: /\+ add task/i });
    fireEvent.click(addButton);
    expect(screen.getByText(/add a new task/i)).toBeInTheDocument();
  });

  test("checking if rows are present in ui for pre-fetched data", () => {
    render(<App/>);

    const firstRow = screen.getByRole('cell', {  name: /task1 desc/i});
    expect(firstRow).toBeInTheDocument();
  })

  /*
  TDD 

  Home page should render all components - buttons, table, navbar
  Clicking on row leads to edit task page
  Clicking on add new leads to create task page
  Delete button removes task from ui

  Create task components render - input fields, add button, navbar
  Clicking on add button leads back to home page

  Edit task components render - input fields with same values, edit button, navbar
  Clicking on edit button opens home page and reflects same changes in homepage ui.
  */




  // test("checking if filling form in ui gets submitted", async () => {
  //   render(<App />);
    // const mockHandleSubmit = jest.fn();

    // const addButton = screen.getByRole("button", { name: /\+ add task/i });
    // fireEvent.click(addButton);

    // const createBtn = screen.getByRole("button", { name: /add/i });
    // const taskNameInput = screen.getByPlaceholderText(/Task Title/i);
    // const descriptionInput = screen.getByPlaceholderText(/Task Description/i);
    // const statusInput = screen.getByPlaceholderText(/Pending/i);
    // const dateInput = screen.getByPlaceholderText(/Date/i);
  //   expect(descriptionInput).toBeInTheDocument();

  //   fireEvent.change(taskNameInput, {
  //     target: { value: "new task" },
  //   });
  //   fireEvent.change(descriptionInput, {
  //     target: { value: "task desc" },
  //   });
  //   fireEvent.click(createBtn);
  //   await expect(mockFn).toHaveBeenCalled();
  // });
});
