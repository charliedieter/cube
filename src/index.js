import React from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";
import configureStore from "./redux/store";
import Cube from "./components/Cube";
import Controls from "./components/Controls";

import "./index.css";
const store = configureStore();

render(
  <Provider store={store}>
    <main>
      <Cube />
      <Controls />
    </main>
  </Provider>,
  document.getElementById("root")
);
