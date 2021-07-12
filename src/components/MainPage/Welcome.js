import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  const [lostText, setLostText] = useState("I lost my pet!");
  const [foundText, setFoundText] = useState("I found a pet!");
  return (
    <section className="welcome container">
      <div className="welcome-wrapper">
        <div className="col-xl-6 col-xs-12 mb-5 welcome-text">
          <h2 className="pawfessional">
            Welcome to your <span>pawfessional</span> community
          </h2>
        </div>
        <div className="buttons">
          <div
            onMouseEnter={() => setLostText("Click to find!")}
            onMouseOut={() => setLostText("I lost my pet!")}
            className="lostButton"
          >
            <div
              className="col-8 offset-3"
              onMouseEnter={() => setLostText("Click to find!")}
              onMouseOut={() => setLostText("I lost my pet!")}
            >
              <NavLink
                exact={true}
                to="/lostandfound/found"
                style={{ textDecoration: "none", color: "black" }}
              >
                {lostText}
              </NavLink>
            </div>
          </div>
          <div
            onMouseEnter={() => setFoundText("What to do?")}
            onMouseOut={() => setFoundText("I found a pet!")}
            className="foundButton"
          >
            <div
              onMouseEnter={() => setFoundText("What to do?")}
              onMouseOut={() => setFoundText("I found a pet!")}
              className="col-8 offset-4"
            >
              <NavLink
                exact={true}
                to="/lostandfound/lost"
                style={{ textDecoration: "none", color: "white" }}
              >
                {foundText}
              </NavLink>
            </div>
          </div>
        </div>
        {/*  <div className="red-lost" >*/}
        {/*    <Link to="/lost">I lost my pet!</Link>*/}
        {/*    <div>lapa</div>*/}
        {/*  </div>*/}
        {/*  <div className="blue-found">*/}
        {/*    <Link to="/found">I found a pet!</Link>*/}
        {/*  </div>*/}
      </div>
      {/*<div>dog img</div>*/}
      <div className="join">
        I’m okay, just want to{" "}
        <NavLink to="/signin">
          <span style={{ textDecoration: "none", color: "#06B2BB" }}>JOIN</span>
        </NavLink>{" "}
        the pawsome community!
      </div>
    </section>
  );
};

export default Welcome;
