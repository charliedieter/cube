import React, { Component } from "react";
import Cube from "./Cube";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 id="title">CUBE</h1>
        <Cube />
      </div>
    );
  }
}

export default App;
