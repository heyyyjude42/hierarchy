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
          <p class="title">· HIERARCHY ·</p>
          <br/>
          <div class="topnav">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/sandbox">Create</NavLink>
          </div>
          <div className="content">
            <Route path="/home" component={Home}/>
            <Route path="/sandbox" component={Sandbox}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
