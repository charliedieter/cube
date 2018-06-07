import React, { Component } from "react";
import Tile from "./Tile";
import arrow from "./arrow.svg";
import * as cube from "./util/cube_util";

var CUBIE_MOVEMENTS = {
  utl: "btl",
  ucl: "bcl",
  ubl: "bbl",
  ftl: "utl",
  fcl: "ucl",
  fbl: "ubl",
  dtl: "ftl",
  dcl: "fcl",
  dbl: "fbl",
  btl: "dtl",
  bcl: "dcl",
  bbl: "dbl",
  ltl: "lbl",
  lcl: "lbc",
  lbl: "lbr",
  ltc: "lcl",
  lbc: "lcr",
  ltr: "ltl",
  lcr: "ltc",
  lbr: "ltr",
  lcc: "lcc"
};

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

  twist = e => {
    e.preventDefault();
    this.setState(p => {
      const tiles = p.tiles.map(tile => {
        if (CUBIE_MOVEMENTS[tile["position"]]) {
          tile["position"] = CUBIE_MOVEMENTS[tile["position"]];
        }
        return tile;
      });
      return { tiles };
    });
  };

  render() {
    const { tiles, xAngle, yAngle } = this.state;

    return (
      <div id="cube-container" onKeyDown={this.rotate} tabIndex="0">
        <img src={arrow} className="arrow" onClick={this.twist} />
        <div
          id="cube"
          style={{
            transform: `rotateX(${xAngle}deg) rotateY(${yAngle}deg)`
          }}
        >
          {tiles.map(tile => (
            <Tile
              key={`tile-${tile["position"]}`}
              tile={tile["position"]}
              backgroundColor={tile["color"]}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Cube;
