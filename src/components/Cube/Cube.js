import React, { Component } from "react";
import { connect } from "react-redux";
import Tile from "../Tile";
import renderMove from "../Slice";
import { infiniteShuffle, endShuffle } from '../../redux/actions'


class Cube extends Component {
  state = {
    xAngle: -30,
    yAngle: -35
  };

  componentDidMount() {
    if (this.props.spin) {
      this.props.dispatch(infiniteShuffle())
    } else {
      this.props.dispatch(endShuffle())
    }
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

  render() {
    const { xAngle, yAngle } = this.state;
    const { cube, queue, spin } = this.props;

    const tiles = Object.values(cube).map(({ position, color }) => {
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
          className={spin ? 'spin' : null}
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
