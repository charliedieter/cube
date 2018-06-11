import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "../redux/store";
import Cube from "./Cube";
import Controls from "./controls/Controls";
import "../styles/App.css";
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1 id="title">CUBE</h1>
          <Cube />
          <Controls />
        </div>
      </Provider>
    );
  }
}

export default App;
