import React, { Component } from "react";
import Tile from "./Tile";

class Face extends Component {
  state = {
    tiles: []
  };

  componentDidMount() {
    this.createTiles();
  }

  createTiles() {
    const face = this.props.face[0];
    const cols = ["l", "c", "r"];
    const rows = ["t", "c", "b"];

    const tiles = [];

    for (let i = 0; i < cols.length; i++) {
      for (let j = 0; j < rows.length; j++) {
        tiles.push(face + rows[j] + cols[i]);
      }
    }
    this.setState({ tiles });
  }

  render() {
    const { face } = this.props;
    const tiles = this.state.tiles.map((tile, idx) => (
      <Tile key={`tile-${tile}`} tile={tile} face={face} idx={idx} />
    ));

    return <div className={`face ${face}`}>{tiles}</div>;
  }
}

export default Face;
