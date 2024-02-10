import React from "react";
import "../../src/Body.css";
import leafy from "../images/leafy.svg";
import smallLeaf from "../images/bg-mobile.svg";
import phones from "../images/image-mockups.png";
import "../index.css";
import Request from "./Request";

const Body = () => {
  return (
    <div className="body">
      <div className="heading-paragraph">
        <div className="words">
          <div className="body-heading">
            <h3>
              Next generation
              <br />
              digital banking
            </h3>
          </div>
          <div className="body-paragraph">
            <p>
              Take your financial life online. your Easybank account
              <br />
              will be a one-stop-shop for spending,saving
              <br />
              budgeting,investing,and much more.
            </p>
          </div>
          <div className="body-request">
          {<Request />}
          </div>
         
        </div>
      </div>
      <img src={smallLeaf} alt="smallleafy" className="smallLeaf" />
      <img src={leafy} alt="leafy" className="leafy" />
      <img src={phones} alt="phones" className="phones" />
    </div>

  
  );
};

export default Body;
