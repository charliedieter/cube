import React, { Component } from "react";
import { connect } from "react-redux";
import Tile from "./Tile";
import Arrows from "./Arrows";
import { transitionSlice } from "../util/animation_util";
import { shuffle } from "../redux/actions";

class Cube extends Component {
  state = {
    xAngle: -30,
    yAngle: -45
  };

  componentDidMount() {
    this.props.shuffle();
  }

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

  addToQueue = movement => {
    this.setState(p => {
      const spinQueue = [...p.spinQueue, movement];
      return { spinQueue };
    });
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
      <div id="cube-container" onKeyDown={this.rotate} tabIndex="0">
        <Arrows addToQueue={this.addToQueue} />
        <div
          id="cube"
          style={{
            transform: `rotateX(${xAngle}deg) rotateY(${yAngle}deg)`
          }}
        >
          {queue.length ? transitionSlice(cube, tiles, queue) : tiles}
        </div>
      </div>
    );
  }
}

const msp = state => ({
  cube: state.cube,
  queue: state.queue
});

const mdp = dispatch => ({
  shuffle: () => dispatch(shuffle())
});

export default connect(msp, mdp)(Cube);
