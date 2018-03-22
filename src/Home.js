import React, { Component } from "react";
import combos from "./data/fontCombos.json"
import fillers from "./data/fillers.json"

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

function fontLabel(combo) {
  var str = "";
  str += combo.h1 + "/";
  str += combo.h2["font-family"] + "/";
  str += combo.text;
  return <p class="label">{str}</p>;
}

function hierarchy(props) {
  const rand = Math.floor(Math.random() * fillers.length);
  const filler = fillers[rand];

  return (
    <div class="masonrywrapper">
      <div class="masonryitem">
        <h3 style={{"font-family": props.h1}}>{filler["Title"]}</h3>
        <p class="subtitle" style={props.h2}>{filler["Subtitle"]}</p>
        <p style={{"font-family": props.text}}>{filler["Dummy"]}</p>
        <p>{fontLabel(props)}</p>
      </div>
    </div>
  );
}

export default Home;
