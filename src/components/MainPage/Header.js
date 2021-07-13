import React from "react";
import {Link, Switch} from "react-router-dom";

const Header = () => {
  return (

          <div className="wrapper d-flex justify-content-center no-gutters">
              <header className="container row d-flex flex-lg-wrap justify-content-between mainPageHeader">
                  <div className="logo col-xl-6 col-6  d-flex flex-md-wrap align-content-center justify-content-start"></div>
                  <div className="signIn col-xl-6 col-6  d-flex align-content-center justify-content-end">
                      <Link className="signInBtn btn" to = "/signin">Sign in</Link>
                  </div>
              </header>

          </div>


  );
};

export default Header;
