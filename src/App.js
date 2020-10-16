import React, { Component, Suspense } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import LoadingComponent from "./components/UI/LoadingComponent/LoadingComponent";
import Layout from "./hoc/Layout/Layout";

import './App.css';

const Users = React.lazy(() =>
  import("./containers/Users/Users.js")
);
const Dates = React.lazy(() =>
  import("./containers/Dates/Dates.js")
);
const Home = React.lazy(() =>
  import("./containers/Home/Home.js")
);

class App extends Component {
  constructor () {
    super()
    this.state = {
      errors: null
    }
  }

  render() {
    const routes = (
      <Switch>
        <Route
          path="/users"
          render={() => (
            <Suspense fallback={<LoadingComponent />}>
              <Users></Users>
            </Suspense>
          )}
        ></Route>
        <Route
          path="/dates"
          render={() => (
            <Suspense fallback={<LoadingComponent />}>
              <Dates></Dates>
            </Suspense>
          )}
        ></Route>
        <Route
          path="/"
          render={() => (
            <Suspense fallback={<LoadingComponent />}>
              <Home></Home>
            </Suspense>
          )}
        ></Route>
        <Redirect to="/" />
      </Switch>
    );

    return (
      <React.Fragment>
        <Layout className={"App"}>{routes}</Layout>
      </React.Fragment>
    );
  }
}

export default App;
