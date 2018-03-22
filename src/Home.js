import React, { Component } from "react";
import combos from "./data/fontCombos.json"
import fillers from "./data/fillers.json"
import LazyLoad from "react-lazyload";
import Modal from 'react-responsive-modal';
import longFillers from "./data/longFillers.json";

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      open: false,
      currCombo: combos[0]
    };
  }

  onOpenModal(combo) {
    this.setState({ open: true, currCombo: combo});
  }

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <FontsPanel func={combo => this.onOpenModal(combo)}/>
        <Modal open={this.state.open} onClose={this.onCloseModal} showCloseIcon={false} animationDuration={100}>
          <div>{getLongText(this.state.currCombo)}</div>
          <div>{getLongText(this.state.currCombo)}</div>
        </Modal>
      </div>
    );
  }
}

class Hierarchy extends React.Component {
  constructor(props) {
    super();
    const rand = Math.floor(Math.random() * fillers.length);
    const filler = fillers[rand];
    this.state = {
      title: filler["Title"],
      subtitle: filler["Subtitle"],
      dummy: filler["Dummy"]
    };
  }

  render() {
    return (
      <div class="masonrywrapper" onClick={this.props.onClick}>
        <LazyLoad>
          <div class="masonryitem">
            <p class="title" style={this.props.combo.h1}>{this.state.title}</p>
            <p class="subtitle" style={this.props.combo.h2}>{this.state.subtitle}</p>
            <p class="text" style={this.props.combo.text}>{this.state.dummy}</p>
            <p>{fontLabel(this.props.combo)}</p>
          </div>
        </LazyLoad>
      </div>
    );
  }
}

function getLongText(combo) {
  const rand = Math.floor(Math.random() * longFillers.length);
  const filler = longFillers[rand];
  var dummy1 = filler.Dummy1;
  var dummy2 = filler.Dummy2;

  return (
    <div style={{"text-align" : "left", "padding-left" : 10, "padding-right" : 10}}>
      <p class="title" style={combo.h1}>{filler.Title}</p>
      <p class="subtitle" style={combo.h2}>{filler.Subtitle1}</p>
      <p class="text modaltext" style={combo.text}>{dummy1.split("\n").map(i => {return <p>{i}</p>})}</p>
      <p class="subtitle" style={combo.h2}>{filler.Subtitle2}</p>
      <p class="text modaltext" style={combo.text}>{dummy2.split("\n").map(i => {return <p>{i}</p>})}</p>
    </div>
  );
}

function fontLabel(combo) {
  var str = "";
  str += combo.h1["font-family"] + " / ";
  str += combo.h2["font-family"] + " / ";
  str += combo.text["font-family"];
  return <p class="label">{str}</p>;
}

class FontsPanel extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const func = this.props.func;
    return (
      <div class="masonry">
        {
          combos.map(function (combo) {
            return <Hierarchy combo={combo} onClick={() => func(combo)}/>;
          })
        }
      </div>
    )
  }
}

export default Home;
