import React from "react";

export default function Navbar(props) {
  return (
    <nav className="nav">
      <div className="left-div">
        <img
          src="https://raw.githubusercontent.com/Harkarman/Clover/master/assets/images/clover.png"
          alt="logo"
        />
      </div>
      <div className="search-container">
        <img
          src="https://image.flaticon.com/icons/svg/483/483356.svg"
          alt="search-icon"
        />
        <input type="text" placeholder="Search" />
        <div className="search-results">
          <ul>
            <li className="search-results-row">
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
            <li className="search-results-row">
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        <div className="user">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
            id="user-dp"
          />
          <span>John Doe</span>
        </div>
        <div className="nav-links">
          <ul>
            <li>Login</li>
            <li>Logout</li>
            <li>Register</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
