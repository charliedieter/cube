import React from "react";
import { connect } from "react-redux";
import { shuffle } from "../../redux/actions";
import { makeWhiteCross }

export const WhiteCrossButton = ({ shuffle }) => {

  const makeWhiteCross = () => {
    const { wC, cube } = this.props;
    wC(cube);
    setTimeout(checkForWhiteCross, 3000);
  };

  checkForWhiteCross = () => {
    // const { cubeObj } = this.props;
    // if (
    //   cubeObj["utc"].color !== "white" &&
    //   cubeObj["ucl"].color !== "white" &&
    //   cubeObj["ucc"].color !== "white" &&
    //   cubeObj["ucr"].color !== "white" &&
    //   cubeObj["ubc"].color !== "white"
    // ) {
    //   this.makeWhiteCross();
    // } else {
    //   console.log("done");
    // }
  };


  return (
    <div className="button" onClick={() => makeWhiteCross(cube)}>
      make white cross
    </div>
  );
};

const msp = ({ ui, entities }) => ({
  cube: entities.cube,
  whiteCrossActive: ui.whiteCrossActive
});

const mdp = dispatch => ({});

export default connect(msp, mdp)(WhiteCrossButton);
