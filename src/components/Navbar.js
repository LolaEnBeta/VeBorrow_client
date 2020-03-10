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
                      <i class="fas fa-home"></i>
                      {/* <img src='images/home.png' width="30"/> */}
                    </Link>
                  </li>
                  <li>
                    <Link to="/search">
                    <i class="fas fa-search"></i>
                      {/* <img src="images/search.png" width="30" /> */}
                    </Link>
                  </li>

                  <li>
                    <Link to="/notifications">
                    <i class="fas fa-envelope-open-text"></i>
                      {/* <img src="images/notifications.png" width="30" /> */}
                    </Link>
                  </li>

                  <li>
                    <Link to="/my-vehicles">
                    <i class="fas fa-bicycle"></i>
                      {/* <img src="images/vehicles.png" width="30" /> */}
                    </Link>
                  </li>

                  <li>
                    <Link to="/my-profile">
                    <i class="far fa-user"></i>
                      {/* <img src="images/profile.png" width="30" /> */}
                    </Link>
                  </li>
                </div>
              ) : (
                <div className="loggedIn notLogged">
                  <li>
                    <Link classname="logintext" to="/login">Login <i class="fas fa-sign-in-alt"></i></Link>
                  </li>
                  <li>
                    <Link to="/signup">Signup <i class="fas fa-user-plus"></i></Link>
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
