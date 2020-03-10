import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedIn } = this.props;

    return (
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" >
            {isLoggedIn ?
              (
                <div className="loggedIn">
                  <li>
                    <Link to={"/"} id="home-btn">
                      <img src='images/home.png' width="30"/>
                    </Link>
                  </li>
                  <li>
                    <Link to="/search">
                      <img src="images/search.png" width="30" />
                    </Link>
                  </li>

                  <li>
                    <Link to="/notifications">
                      <img src="images/notifications.png" width="30" />
                    </Link>
                  </li>

                  <li>
                    <Link to="/my-vehicles">
                      <img src="images/vehicles.png" width="30" />
                    </Link>
                  </li>

                  <li>
                    <Link to="/my-profile">
                      <img src="images/profile.png" width="30" />
                    </Link>
                  </li>
                </div>
              ) : (
                <div className="loggedIn notLogged">
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup">Signup</Link>
                  </li>
                </div>
              )
            }
          </ul>
        </div>
      </nav>
    );
  }
}

export default withAuth(Navbar);
