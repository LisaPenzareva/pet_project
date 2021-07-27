import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Welcome from "./Welcome";
import Services from "./Services";
import About from "./About";
import Footer from "./Footer";
import Home from "../HomePage/Home";

const MainPage = () => {
  const isAuth = useSelector((state) => {
    return state.users.isAuth;
  });

  const renderAuth = () => {
    if (!isAuth) {
      return (
        <Fragment>
          <Header />
          <Welcome />
          <About />
          <Services />
          <Footer />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Home />
        </Fragment>
      );
    }
  };

  return <div>{renderAuth()}</div>;
};

export default MainPage;
