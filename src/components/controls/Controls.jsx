import React from "react";
import { connect } from "react-redux";
import ShuffleButton from "./ShuffleButton";
import "../../styles/controls.css";

const Controls = ({ shuffling }) => {
  const display = shuffling ? "none" : "block";
  return (
    <div style={{ display }}>
      <ShuffleButton />
    </div>
  );
};

const msp = state => ({
  shuffling: state.shuffling
});

export default connect(msp)(Controls);
