import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedIn } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/"} id="home-btn">
          <h4>Home</h4>
        </Link>
        {isLoggedIn ? (
          <>
            <p>username: {user.firstName}</p>
            <button onClick={logout}>Logout</button>
            <Link to="/my-profile">Profile</Link>
            <Link to="/my-vehicles">Vehicles</Link>
            <Link to="/search">Search</Link>
            <Link to="/notifications">Notifications</Link>
            <Link to="/create-vehicle">Create vehicle</Link>
          </>
        ) : (
          <>
            <Link to="/login">
              {" "}
              <button className="navbar-button">Login</button>{" "}
            </Link>
            <br />
            <Link to="/signup">
              {" "}
              <button className="navbar-button">Sign Up</button>{" "}
            </Link>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
