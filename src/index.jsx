import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./configureStore";
import { Route, BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>{null}</BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
