import React from "react";
import { connect } from "react-redux";
import { shuffle } from "../../redux/actions";

export const ShuffleButton = ({ shuffle }) => {
  return (
    <div className="button" onClick={shuffle}>
      shuffle
    </div>
  );
};

const mdp = dispatch => ({
  shuffle: () => dispatch(shuffle())
});
export default connect(null, mdp)(ShuffleButton);
