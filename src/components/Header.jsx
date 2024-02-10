import React from "react";
import logo from "../images/logo.svg";
import Request from "./Request";
import "../header.css";
import hamburger from "../images/icon-hamburger.svg";
import Dropdown from "./Dropdown";
import { useState } from "react";

const Header = () => {
  const [dropdown, setdropdown] = useState(false);
  return (
    <>
      <header className="header">
        <img src={logo} alt="" srcset="" className="logo" />
        <div className="list">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="hamburger" onClick={() => setdropdown((prev) => !prev)}>
          <img src={hamburger} alt="" />
        </div>
        <div className="header-request">
          <Request />
        </div>
      </header>
      {dropdown && <Dropdown />}
    </>
  );
};

export default Header;
