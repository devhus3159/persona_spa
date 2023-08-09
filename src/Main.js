import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter 
  } from "react-router-dom";
  import Home from "./Home";
  import Stuff from "./Stuff";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Persona 5 Royale</h1>
          <ul className="header">
            <li><NavLink to="/">Overview</NavLink></li>
            <li><NavLink to="/stuff">Cast</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/stuff" element={<Stuff/>}/>
          </Routes>             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;