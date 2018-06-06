import React, { Component } from "react";
import { RotationContext } from "./Cube";
import COLORS from "./util/colors";

class Tile extends Component {
  render() {
    const { tile, face } = this.props;
    console.log(tile);
    const backgroundColor = COLORS[face];

    return (
      <RotationContext.Consumer>
        {rotation => (
          <div className={`tile ${tile}`} style={{ backgroundColor }} />
        )}
      </RotationContext.Consumer>
    );
  }
}

export default Tile;
