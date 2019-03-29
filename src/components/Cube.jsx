import React, { Component } from "react";
import { connect } from "react-redux";
import Tile from "./Tile";
import Arrows from "./controls/Arrows";
import renderMove from "./Slice";

import { whiteCross } from "../redux/actions";

class Cube extends Component {
  state = {
    xAngle: -30,
    yAngle: -35
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
    const { cube, queue, shuffling } = this.props;

    const tiles = cube.map(tile => (
      <Tile
        key={`${tile["position"]}`}
        tile={tile["position"]}
        backgroundColor={tile["color"]}
      />
    ));

    return (
      <div id="cube-container" onKeyDown={""} tabIndex="0">
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

const msp = ({ entities, ui }) => ({
  cube: Object.values(entities.cube),
  cubeObj: entities.cube,
  queue: entities.queue,
  shuffling: ui.shuffling,
  whiteCrossAnimationActive: ui.whiteCrossAnimationActive
});

const mdp = d => ({
  wC: cube => d(whiteCross(cube))
});

export default connect(msp, mdp)(Cube);
