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
                      <i className="fas fa-home"></i>
                      {/* <img src='images/home.png' width="30"/> */}
                    </Link>
                  </li>
                  <li>
                    <Link to="/search">
                    <i className="fas fa-search"></i>
                      {/* <img src="images/search.png" width="30" /> */}
                    </Link>
                  </li>

                  <li>
                    <Link to="/notifications">
                    <i className="fas fa-envelope-open-text"></i>
                      {/* <img src="images/notifications.png" width="30" /> */}
                    </Link>
                  </li>

                  <li>
                    <Link to="/my-vehicles">
                    <i className="fas fa-bicycle"></i>
                      {/* <img src="images/vehicles.png" width="30" /> */}
                    </Link>
                  </li>

                  <li>
                    <Link to="/my-profile">
                    <i className="far fa-user"></i>
                      {/* <img src="images/profile.png" width="30" /> */}
                    </Link>
                  </li>
                </div>
              ) : (
                <div className="loggedIn notLogged">
                  <li>
                    <Link to="/login">Login <i className="fas fa-sign-in-alt"></i></Link>
                  </li>
                  <li>
                    <Link to="/signup">Signup <i className="fas fa-user-plus"></i></Link>
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
