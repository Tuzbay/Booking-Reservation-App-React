import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">booooooking</span>
        <div className="navItems">
          <button className="navCurrency">TRY</button>
          <button className="navLanguage">
            <img
              src="https://cf.bstatic.com/static/img/flags/new/48-squared/tr/f7ad0cb74f4ea5e7193cb6029c7f977e9786cfa2.png"
              alt=""
            />
          </button>
          <button className="navInfo">
            <AiOutlineInfoCircle />
          </button>
          <button className="navButtonEmpty">List your property</button>
          <button className="navButton">Register</button>
          <button className="navButton">Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
