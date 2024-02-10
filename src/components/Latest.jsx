import React from "react";
import currency from "../images/image-currency.jpg";
import restaurant from "../images/image-restaurant.jpg";
import plane from "../images/image-plane.jpg";
import confetti from "../images/image-confetti.jpg";
import "../latestContainer.css";

const Latest = () => {
  const latestArticle = [
    {
      id: 1,
      image: currency,
      Author: "By Claire Robinson ",
      Heading: "Receive money in any currency with no fees",
      Content:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single",
    },
    {
      id: 2,
      image: restaurant,
      Author: "By Wilson Hutton",
      Heading: " Treat yourself without worrying about money",
      Content:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you … ",
    },
    {
      id: 3,
      image: plane,
      Author: "By Wilson Hutton ",
      Heading: "Take your Easybank card wherever you go",
      Content:
        " We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you … ",
    },
    {
      id: 4,
      image: confetti,
      Author: "By Claire Robinson",
      Heading: "Our invite-only Beta accounts are now live!",
      Content:
        "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... ",
    },
  ];

  return (
    <div className="container">
      <div className="text">
        <h1 className="word">Latest Article</h1>
      </div>
      <div className="Card">
        {latestArticle.map((single) => {
          const { id, image, Author, Heading, Content } = single;
          return (
            <div key={id} className="LatestContainer">
              <img src={image} alt="cardImage" className="space" />
              <div className="word-content">
                <h5 className="space">{Author}</h5>
                <h2 className="space">{Heading}</h2>
                <p className="space lowerword" >{Content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Latest;
