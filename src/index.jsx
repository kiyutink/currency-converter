import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./configureStore";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/app";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
