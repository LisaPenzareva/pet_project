import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";
import Header from "../Header/Header";
import Pages from "./Pages";
import MainHeader from "../MainPage/Header";

const Main = () => {
  const isAuth = useSelector((state) => {
    return state.users.isAuth;
  });

  const location = useLocation();
  const renderHeader = () => {
    if (location.pathname === "/" && !isAuth) {
      return <MainHeader />;
    }
    if (location.pathname === "/signin") {
      return null;
    }
    return <Header />;
  };
  const renderLSide = () => {
    if (
      (location.pathname === "/" || location.pathname === "/signin") &&
      !isAuth
    ) {
      return null;
    }
    return <LeftSide />;
  };
  const renderRSide = () => {
    if (
      (location.pathname === "/" || location.pathname === "/signin") &&
      !isAuth
    ) {
      return null;
    }
    return <RightSide />;
  };

  return (
    <div>

      {renderHeader()}

      <section className="container-fluid">
        <div className="row align-items-stretch ">
          {renderLSide()}
          <div
            className={
              (location.pathname === "/" || location.pathname === "/signin") &&
              !isAuth
                ? null
                : "col-7"
            }
          >
            <Pages />
          </div>

          {renderRSide()}
        </div>
      </section>
    </div>
  );
};

export default Main;
