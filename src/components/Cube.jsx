import React, { Component } from "react";
import { connect } from "react-redux";
import Tile from "./Tile";
import Arrow from "./Arrow";
import { transitionSlice } from "../util/animation_util";
import MOVEMENTS from "../util/movements";

class Cube extends Component {
  state = {
    xAngle: -30,
    yAngle: -45
  };

  static defaultProps = {
    spinQueue: ["LM-left"]
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
    const { cube, spinQueue } = this.props;
    const arrows = Object.keys(MOVEMENTS).map(d => {
      return <Arrow direction={d} key={`arrow-${d}`} twist={this.twist} />;
    });
    const tiles = cube.map(tile => (
      <Tile
        key={`${tile["position"]}`}
        tile={tile["position"]}
        backgroundColor={tile["color"]}
      />
    ));
    return (
      <div id="cube-container" onKeyDown={this.rotate} tabIndex="0">
        <div
          id="cube"
          style={{
            transform: `rotateX(${xAngle}deg) rotateY(${yAngle}deg)`
          }}
        >
          {spinQueue.length ? transitionSlice(cube, tiles, spinQueue) : tiles}
        </div>
      </div>
    );
  }
}

const msp = state => ({
  cube: state.cube
});

export default connect(msp)(Cube);

// {spinQueue.length ? transitionSlice(allTiles, spinQueue) : allTiles}
