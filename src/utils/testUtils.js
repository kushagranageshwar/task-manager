import { render } from "@testing-library/react";
import store from "../components/organisms/redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const renderWithProvider = ({
  path = "/",
  Component = <></>,
  props = {},
}) => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={path} element={<Component {...props} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export * from "@testing-library/react";
