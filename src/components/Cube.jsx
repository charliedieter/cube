import React, { Component } from "react";
import { connect } from "react-redux";
import Tile from "./Tile";
import Arrows from "./controls/Arrows";
import renderMove from "./Slice";

class Cube extends Component {
  state = {
    xAngle: -30,
    yAngle: -45
  };

  rotate = e => {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        this.setState(prev => {
          return { yAngle: (prev.yAngle -= 90) };
        });
        break;
      case 38:
        this.setState(prev => {
          return { xAngle: (prev.xAngle += 180) };
        });
        break;
      case 39:
        this.setState(prev => {
          return { yAngle: (prev.yAngle += 90) };
        });
        break;
      case 40:
        this.setState(prev => {
          return { xAngle: (prev.xAngle -= 180) };
        });
        break;
      default:
        return;
    }
  };

  render() {
    const { xAngle, yAngle } = this.state;
    const { cube, queue } = this.props;

    const tiles = cube.map(tile => (
      <Tile
        key={`${tile["position"]}`}
        tile={tile["position"]}
        backgroundColor={tile["color"]}
      />
    ));
    return (
      <div id="cube-container" onKeyDown={""} tabIndex="0">
        <Arrows />
        <div
          id="cube"
          style={{
            transform: `rotateX(${xAngle}deg) rotateY(${yAngle}deg)`
          }}
        >
          {queue.length ? renderMove(cube, tiles, queue) : tiles}
        </div>
      </div>
    );
  }
}

const msp = state => ({
  cube: state.cube,
  queue: state.queue
});

export default connect(msp, null)(Cube);
