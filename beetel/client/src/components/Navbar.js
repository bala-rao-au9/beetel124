import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as IMG from "./img";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <Link to="/">
          <img src={IMG.logo} alt="logo" />
        </Link>

        <form className="d-flex right-nav">
          <Link to="/">
            <img src={IMG.search} alt="search" />
          </Link>

          {props.auth.isAuth ? (
            <div className="dropdown">
              */}
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/user/${props.auth.user._id}`}
                  >
                    My Profile
                  </Link>
                </li>
                
                <li>
                  <Link className="dropdown-item" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/support/chat">
                    Get Support
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item logout" href="/auth/logout">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">Log In</Link>
          )}
        </form>
      </div>
    </nav>
  );
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Navbar);
