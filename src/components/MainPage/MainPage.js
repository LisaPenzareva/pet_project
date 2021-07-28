import React from "react";
import Welcome from "./Welcome";
import Services from "./Services";
import About from "./About";
import Footer from "./Footer";

const MainPage = () => {
  return (
    <div>
      <Welcome />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default MainPage;
