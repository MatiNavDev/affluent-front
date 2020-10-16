import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render () {
    return (
      <div>
        <NavLink to="/users" className="icon-menu-item">
            <button>Go to Users</button>
        </NavLink>
        <NavLink to="/dates" className="icon-menu-item">
            <button>Go to Dates</button>
        </NavLink>
      </div>
    )
  }
}

export default Home