import React, { Component } from "react";
import authService from "./auth-service"; // IMPORT functions for axios requests to API
import userService from "./user-service"; // IMPORT functions for axios requests to API
const { Consumer, Provider } = React.createContext();

// HOC to create a Consumer
const withAuth = WrappedComponent => {
  return class extends Component {
    render() {
      return (
        <Consumer>
          {({ login, signup, logout, user, isLoggedIn, deleteUserAndLogout }) => {
            return (
              <WrappedComponent
                user={user}
                isLoggedIn={isLoggedIn}
                login={login}
                deleteUserAndLogout={deleteUserAndLogout}
                signup={signup}
                logout={logout}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

// Provider
class AuthProvider extends React.Component {
  state = {
    isLoggedIn: false,
    user: null,
    isLoading: true
  };

  componentDidMount() {
    authService
      .me()
      .then(user =>
        this.setState({ isLoggedIn: true, user: user, isLoading: false })
      )
      .catch(err =>
        this.setState({ isLoggedIn: false, user: null, isLoading: false })
      );
  }

  signup = (firstName, lastName, email, phoneNumber, password) => {
    authService
      .signup({ firstName, lastName, email, phoneNumber, password })
      .then(user => this.setState({ isLoggedIn: true, user }))
      .catch(err => console.log(err));
  };

  login = (email, password) => {
    authService
      .login({ email, password })
      .then(user => this.setState({ isLoggedIn: true, user }))
      .catch(err => console.log(err));
  };

  logout = () => {
    authService
      .logout()
      .then(() => {
        this.setState({ isLoggedIn: false, user: null });
        this.props.history.push('/login');
      })
      .catch(err => console.log(err));
  };

  deleteUserAndLogout = () => {
    userService
      .deleteUser(this.state.user._id)
      .then(() => {
        this.setState({ isLoggedIn: false, user: null });
        this.props.history.push('/login');
      })
      .catch(err => console.log(err));
  };

  render() {
    const { isLoading, isLoggedIn, user } = this.state;
    const { login, logout, signup, deleteUserAndLogout } = this;

    return (
      <Provider value={{ isLoading, isLoggedIn, user, login, logout, signup, deleteUserAndLogout }}>
        {this.props.children}
      </Provider>
    );
  }
}

//      Consumer ,  Provider
export { withAuth, AuthProvider };
