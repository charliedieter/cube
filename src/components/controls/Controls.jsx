import React from "react";
import { connect } from "react-redux";
import ShuffleButton from "./ShuffleButton";
import WhiteCrossButton from "./WhiteCrossButton";
import "../../styles/Controls.css";

const Controls = ({ shuffling }) => {
  const display = shuffling ? "none" : "block";
  return (
    <div style={{ display }}>
      <ShuffleButton />
      <WhiteCrossButton />
    </div>
  );
};

const msp = state => ({
  shuffling: state.shuffling
});

export default connect(msp)(Controls);
