import React, { Component } from "react";
import { connect } from "react-redux";
import Tile from "../Tile";
import renderMove from "../Slice";
import { infiniteShuffle, endShuffle } from "../../redux/actions";

class Cube extends Component {
  state = {
    xAngle: -30,
    yAngle: -30
  };

  componentDidMount() {
    if (this.props.spin) {
      this.props.dispatch(infiniteShuffle());
    } else {
      this.props.dispatch(endShuffle());
    }
  }

  rotate = e => {
    e.preventDefault();
    const { dispatch, queue } = this.props;
    const twist = direction =>
      dispatch({
        type: "ENQUEUE",
        moves: [direction]
      });
    switch (e.keyCode) {
      case 37:
        twist("sideways-left");
        break;
      case 38:
        twist("up-left");
        break;
      case 39:
        twist("sideways-right");
        break;
      case 40:
        twist("down-right");
        break;
      default:
        return;
    }
  };

  render() {
    const { xAngle, yAngle } = this.state;
    const { cube, queue, spin } = this.props;

    const tiles = Object.values(cube).map(({ position, color }) => {
      return (
        <Tile key={`${position}`} tile={position} backgroundColor={color} />
      );
    });

    return (
      <div id="cube-container" onKeyDown={this.rotate} tabIndex="0">
        <div
          id="cube"
          style={{
            transform: `rotateX(${xAngle}deg) rotateY(${yAngle}deg)`
          }}
          className={spin ? "spin" : null}
        >
          {queue.length ? renderMove(cube, tiles, queue) : tiles}
        </div>
      </div>
    );
  }
}

const msp = ({ entities: { cube, queue }, ui: { shuffling } }) => ({
  cube,
  queue,
  shuffling
});

export default connect(msp)(Cube);
