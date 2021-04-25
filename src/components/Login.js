import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <form action="" className="login-form">
        <span className="login-signup-header">Log in</span>
        <div className="field">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="field">
          <button>Login</button>
        </div>
      </form>
    );
  }
}
