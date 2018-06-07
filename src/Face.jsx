import React, { Component } from "react";
import Tile from "./Tile";

class Face extends Component {
  state = {
    tiles: []
  };

  componentDidMount() {
    this.createTiles();
  }



  render() {
    const { face } = this.props;
    const tiles = this.state.tiles.map((tile, idx) => (
      
    ));

    return <div className={`face ${face}`}>{tiles}</div>;
  }
}

export default Face;
