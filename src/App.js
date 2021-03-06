import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import Profile from "./pages/Profile";
import EditProfileForm from "./pages/EditProfileForm";
import Vehicles from "./pages/Vehicles";
import Search from "./pages/Search";
import Notifications from "./pages/Notifications";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Switch className="container">
          <Route exact path="/" component={Home} />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/private" component={Private} />
          <PrivateRoute exact path="/my-profile" component={Profile} />
          <PrivateRoute exact path="/edit-profile" component={EditProfileForm} />
          <PrivateRoute exact path="/my-vehicles" component={Vehicles} />
          <PrivateRoute exact path="/search" component={Search} />
          <PrivateRoute exact path="/notifications" component={Notifications} />
        </Switch>
      </div>
    );
  }
}

export default App;
