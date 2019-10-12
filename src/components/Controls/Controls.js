import React from "react";
import { connect } from "react-redux";

import { shuffle } from "../../redux/actions";

function Controls({ ui: { shuffling }, dispatch }) {
  return (
    <div style={{ opacity: shuffling ? 0 : 1, transition: 'opacity 100ms ease-in-out' }}>
      <div className="control" onClick={() => dispatch(shuffle())}>
        shuffle
      </div>
    </div>
  );
};

export default connect(s => s)(Controls);
