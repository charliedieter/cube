import React, { Component } from "react";
import POSITIONS from "./util/positions";

class Tile extends Component {
  state = {
    tile: this.props.tile
  };

  render() {
    const { tile } = this.state;
    const { backgroundColor } = this.props;
    const transform = POSITIONS[tile];

    return (
      <div
        className={`tile ${tile}`}
        style={{
          backgroundColor,
          transform
        }}
        onClick={this.twist}
      />
    );
  }
}

export default Tile;
