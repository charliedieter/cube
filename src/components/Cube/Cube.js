import React, { Component } from "react";
import { connect } from "react-redux";
import Tile from "../Tile";
import renderMove from "../Slice";


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
    const { cube, queue } = this.props;

    const tiles = cube.map(({ position, color }) => {
      return (
        <Tile
          key={`${position}`}
          tile={position}
          backgroundColor={color}
        />
      )
    });

    return (
      <div id="cube-container">
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
});


export default connect(msp)(Cube);
