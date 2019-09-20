import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home.js";
import Sandbox from "./Sandbox.js";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <p class="head">· HIERARCHY ·</p>
          <br />
          <div class="topnav">
            <NavLink exact to="/">Home</NavLink>
            More Features Coming Soon
            {/* <NavLink to="/sandbox">Create</NavLink> */}
          </div>
          <div className="content">
            <Route exact path="/" component={Home} />
            {/* <Route path="/sandbox" component={Sandbox}/> */}
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
