import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { logoutAC } from "../actions";
import { useDispatch } from "react-redux";
function Nav({ user, checkAuth }) {
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8080/userauth")
      .then(function (res) {
        if (res.data.status) {
          setLoggedIn(true);
          console.log("authenticate success");
        } else {
          setLoggedIn(false);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
  const handleAuth = () => {
    checkAuth();
  };
  const handleLogout = () => {
    dispatch(logoutAC());
    window.location.reload();
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body p-2 sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            npmJobs
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Disabled
                </a>
              </li>
            </ul>
            <div className=" nav-btn-group">
              {loggedIn ? (
                <Link to="/postings" className="btn btn-nav">
                  My Postings
                </Link>
              ) : null}
              {loggedIn ? (
                <button className="btn btn-nav" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <Link to="/login" className="btn btn-nav">
                  Login
                </Link>
              )}
              <Link
                to="searchJob"
                className="btn btn-nav2"
                onClick={handleAuth}
              >
                Post a Job
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
