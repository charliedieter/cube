import React, { Component } from "react";
import { RotationContext } from "./Cube";
import COLORS from "./util/colors";
import POSITIONS from "./util/positions";

class Tile extends Component {
  state = {
    backgroundColor: COLORS[this.props.face]
  };

  render() {
    const { tile, face, idx } = this.props;
    const { backgroundColor } = this.state;

    const translate = POSITIONS[idx];
    return (
      <RotationContext.Consumer>
        {rotation => (
          <div className={`tile ${tile} `} style={{ backgroundColor }} />
        )}
      </RotationContext.Consumer>
    );
  }
}

export default Tile;
