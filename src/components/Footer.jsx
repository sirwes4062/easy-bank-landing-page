import React from "react";
import "../footer.css";
import "../index.css";
import Request from "./Request";
import logo from "../images/logo.svg";
import { ImFacebook } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import { BsPinterest } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="logo-social">
        <img src={logo} alt="" className="footer-logo" />

        <div className="footer-icons">
          <div className="social-icons">
            <ImFacebook />
          </div>
          <div className="social-icons">
            <IoLogoYoutube />
          </div>
          <div className="social-icons">
            <BsPinterest />
          </div>
          <div className="social-icons">
            <IoLogoTwitter />
          </div>
          <div className="social-icons">
            <AiFillInstagram />
          </div>
        </div>
      </div>
      <div className="footer-words">
        <div className="first-column">
          <h4>About Us</h4>
          <h4>Contact</h4>
          <h4>Blog </h4>
        </div>
        <div className="second-column">
          <h4>Careers</h4>
          <h4>Supports</h4>
          <h4>Privacy Policy</h4>
        </div>
      </div>
      <div className="request-copyright">
        <Request className="request" />
        <h4> © Easybank. All Rights Reserved</h4>
      </div>
    </footer>
  );
};

export default Footer;
