import React from "react";
import { connect } from "react-redux";

import { shuffle } from "../../redux/actions";

function Controls({ ui: { shuffling }, dispatch }) {
  return (
    <div style={{ transition: 'opacity 200ms ease-in-out' }}>
      {!shuffling && (
        <>
          <div className="control" onClick={() => dispatch(shuffle())}>
            shuffle
          </div>
          <div className="control" onClick={() => dispatch(shuffle())}>
            next
          </div>
        </>
      )}
    </div>
  );
};

export default connect(s => s)(Controls);
