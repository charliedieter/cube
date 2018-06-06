import React, { Component } from "react";
import Face from "./Face";
export const RotationContext = React.createContext({ xAngle: 45, yAngle: 45 });

class Cube extends Component {
  state = {
    xAngle: -30,
    yAngle: 30
  };

  // TODO: change perspective so that 'up' always means 'up'
  // even when cube is upside down
  rotate = e => {
    switch (e.keyCode) {
      case 37:
        this.setState(prev => {
          return { xAngle: (prev.xAngle -= 90) };
        });
        break;
      case 38:
        this.setState(prev => {
          return { xAngle: (prev.xAngle += 90) };
        });
        break;
      case 39:
        this.setState(prev => {
          return { yAngle: (prev.yAngle += 90) };
        });
        break;
      case 40:
        this.setState(prev => {
          return { yAngle: (prev.yAngle -= 90) };
        });
        break;
      default:
        return;
    }
  };

  render() {
    const faces = ["up", "front", "down", "left", "right", "back"].map(f => (
      <Face key={`face-${f}`} face={f} />
    ));

    const { xAngle, yAngle } = this.state;

    return (
      <div id="cube-container" onKeyDown={this.rotate} tabIndex="0">
        <div
          id="cube"
          style={{
            transform: `rotateX(${xAngle}deg) rotateY(${yAngle}deg)`
          }}
        >
          <RotationContext.Provider value={{ xAngle, yAngle }}>
            {faces}
          </RotationContext.Provider>
        </div>
      </div>
    );
  }
}

export default Cube;
