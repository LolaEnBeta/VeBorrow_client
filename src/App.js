import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import Profile from "./pages/Profile";
import Vehicles from "./pages/Vehicles";
import Search from "./pages/Search";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/private" component={Private} />
          <PrivateRoute exact path="/my-profile" component={Profile} />
          <PrivateRoute exact path="/my-vehicles" component={Vehicles} />
          <PrivateRoute exact path="/search" component={Search} />
        </Switch>
      </div>
    );
  }
}

export default App;
