import React, { Component } from "react";
import combos from "./data/fontCombos.json"

class Home extends Component {
  render() {
    return (
      <div class="masonry">
        {
          combos.map(function (combo) {
            return hierarchy(combo);
          })
        }
      </div>
    );
  }
}

function hierarchy(props) {
  return (
    <div class="masonrywrapper">
      <div class="masonryitem">
        <h3>{props.h1}</h3>
        <h4>{props.h2}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Home;
