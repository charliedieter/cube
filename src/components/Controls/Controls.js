import React from "react";
import { connect } from "react-redux";

import { shuffle, findWhitey, makeWhiteCross } from "../../redux/actions";

function Controls({ ui: { shuffling }, dispatch }) {
  return (
    <div style={{ transition: 'opacity 200ms ease-in-out' }}>
      {!shuffling && (
        <>
          <div className="control" onClick={() => dispatch(shuffle())}>
            shuffle
          </div>
          <div className="control" onClick={() => dispatch(findWhitey())}>
            find whitey
          </div>
          <div className="control" onClick={() => dispatch(makeWhiteCross())}>
            make white cross
          </div>
        </>
      )}
    </div>
  );
};

export default connect(s => s)(Controls);
