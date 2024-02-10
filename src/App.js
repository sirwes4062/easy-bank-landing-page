import React from "react";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Offers from "./components/Offers";
import Latest from "./components/Latest";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Offers />
      <Latest />
      <Footer />
    </>
  );
};

export default App;
