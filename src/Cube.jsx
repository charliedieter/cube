import React, { Component } from "react";
import Tile from "./Tile";
import Arrow from "./Arrow";
import * as cube from "./util/cube_util";
import MOVEMENTS from "./util/movements";

class Cube extends Component {
  state = {
    xAngle: -30,
    yAngle: -45,
    tiles: []
  };

  componentDidMount() {
    const tiles = cube.createTiles();
    this.setState({ tiles });
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

  twist = direction => {
    console.log(direction);
    this.setState(p => {
      const tiles = p.tiles.map(tile => {
        const dir = MOVEMENTS[direction];
        if (dir[tile["position"]]) {
          tile["position"] = dir[tile["position"]];
        }
        return tile;
      });
      return { tiles };
    });
  };

  render() {
    const { tiles, xAngle, yAngle } = this.state;

    const arrows = Object.keys(MOVEMENTS).map(d => {
      return <Arrow direction={d} key={`arrow-${d}`} twist={this.twist} />;
    });

    let squares = tiles.map(tile => (
      <Tile
        key={`tile-${tile["position"]}`}
        tile={tile["position"]}
        backgroundColor={tile["color"]}
      />
    ));

    return (
      <div id="cube-container" onKeyDown={this.rotate} tabIndex="0">
        {arrows}
        <div
          id="cube"
          style={{
            transform: `rotateX(${xAngle}deg) rotateY(${yAngle}deg)`
          }}
        >
          {squares}
        </div>
      </div>
    );
  }
}

export default Cube;
