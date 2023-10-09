import { useState } from "react";
import "./App.css";
function Login({ userSignup, userLogin }) {
  const blank_user = { name: "", email: "", password: "" };
  const [login, setLogin] = useState(true);
  const [user, setUser] = useState(blank_user);
  const handleLogin = (e) => {
    e.preventDefault();
    userLogin(user);
    console.log(user);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    userSignup(user);
    console.log(user);
  };
  return (
    <>
      <div className="login-form-area">
        <div className="container">
          <div className="row justify-content-center">
            {login ? (
              <div className="col-md-5">
                <form onSubmit={(e) => handleLogin(e)}>
                  <div className="login-form">
                    <div className="login-heading">
                      <span>Login</span>
                      <p>Enter Login details to get access</p>
                    </div>
                    <div className="input-box">
                      <div className="input-fields">
                        <label>Email Address</label>
                        <input
                          type="text"
                          placeholder="Email"
                          value={user.email}
                          onChange={(e) => {
                            setUser({ ...user, email: e.target.value });
                          }}
                          required
                        />
                      </div>
                      <div className="input-fields">
                        <label>Password</label>
                        <input
                          type="password"
                          placeholder="Password"
                          value={user.password}
                          onChange={(e) => {
                            setUser({ ...user, password: e.target.value });
                          }}
                          required
                        />
                      </div>
                      <div className="input-fields">
                        <a href="#">Forgot Password?</a>
                      </div>
                    </div>
                    <div className="login-footer">
                      <p>
                        Don't have an account?{" "}
                        <a href="#" onClick={() => setLogin(false)}>
                          Sign Up
                        </a>{" "}
                        here
                      </p>
                      <button className="btn login-btn" type="submit">
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              <div className="col-md-5">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="login-form">
                    <div className="login-heading">
                      <span>Sign Up</span>
                      <p>Enter your details to sign up</p>
                    </div>
                    <div className="input-box">
                      <div className="input-fields">
                        <label>Name</label>
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={user.name}
                          onChange={(e) => {
                            setUser({ ...user, name: e.target.value });
                          }}
                          required
                        />
                      </div>
                      <div className="input-fields">
                        <label>Email</label>
                        <input
                          type="email"
                          placeholder="Email"
                          value={user.email}
                          onChange={(e) => {
                            setUser({ ...user, email: e.target.value });
                          }}
                          required
                        />
                      </div>
                      <div className="input-fields">
                        <label>Password</label>
                        <input
                          type="password"
                          placeholder="Password"
                          value={user.password}
                          onChange={(e) => {
                            setUser({ ...user, password: e.target.value });
                          }}
                          required
                        />
                      </div>
                      <div className="input-fields">
                        <a href="#">Forgot Password?</a>
                      </div>
                    </div>
                    <div className="login-footer">
                      <p>
                        Already have an account?{" "}
                        <a href="#" onClick={() => setLogin(true)}>
                          Login
                        </a>{" "}
                        here
                      </p>
                      <button className="btn login-btn" type="submit">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
