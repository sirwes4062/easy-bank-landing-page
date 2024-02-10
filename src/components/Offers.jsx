import React from "react";
import "../offer.css";
import online from "../images/online.svg";
import budgeting from "../images/icon-budgeting.svg";
import onboarding from "../images/icon-onboarding.svg";
import api from "../images/icon-api.svg";

const Offers = () => {
  const myOffers = [
    {
      id: 1,
      image: online,
      heading: " Online Banking",
      paragraph:
        "Online Banking Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      id: 2,
      image: budgeting,
      heading: "Simple Budgeting",
      paragraph:
        "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits. ",
    },
    {
      id: 3,
      image: onboarding,
      heading: " Fast Onboarding ",
      paragraph:
        "We don’t do branches. Open your account in minutes online and start taking control of your finances right away. ",
    },
    {
      id: 4,
      image: api,
      heading: "Open API",
      paragraph:
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];

  return (
    <div className="offer">
      <div className="heading-paragraph">
        <h1> Why choose Easybank? </h1>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          <br />
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="myOfferContainer">
        {myOffers.map((offer) => {
          const { image, heading, paragraph, id } = offer;
          return (
            <div key={id} className="single">
              <img src={image} alt="theimage" className="image" />
              <h2 className="offerHeader">{heading}</h2>
              <p className="offerParagraph">{paragraph}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offers;
