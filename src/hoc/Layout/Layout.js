import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <header className="App-header">
          Affluent app
        <NavLink to="/">
            <button>Go Back</button>
        </NavLink>
        </header>
        <main>{children}</main>
      </Fragment>
    );
  }
}

export default Layout