import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import * as USER from "../api/apiActions";
import * as icon from "../img";

class Login extends Component {
  state = {
    user: {},
    text: "Login to manage your account",
  };


  login = async () => {
    const { token, user, message } = await USER.login(this.state.user);
    if (user) {
      this.props.dispatch({
        type: "AUTH_LOGIN",
        payload: { token, user },
      });
      await this.viewCart(user._id);
    } else {
      this.setState({
        text: message,
      });
    }
  };

  onChange = (e) => {
    this.setState({
      ...this.state,
      text: "Login to manage your account",
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    if (this.props.auth.isAuth) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-page">
        <div
          className="row"
          style={{ backgroundImage: `url(${icon.loginBack})` }}
        >
          <div className="col-6 login-col hide-div"></div>
          <div className="col-6 login-col">
            <form className="login-form">
              <img className="logo" src={icon.logo} alt="logo" />
              <h1>Hello,</h1>
              <h1>Welcome Back</h1>
              {/* <span className="badge bg-dark mt-4">{}</span> */}
              <div className="form-group">
                <label>{this.state.text}</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Username"
                  name="email"
                  onChange={this.onChange}
                />

                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Password"
                  name="password"
                  onChange={this.onChange}
                />
              </div>

              <div className="login-button">
                <button onClick={this.login} type="button">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Login);
