import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Lost from "./Lost";
import Found from "./Found";
// import LostList from "./LostList";
// import FoundList from "./FoundList";

const LostAndFoundPage = (props) => {
  const isLost = props.isLost;
  return (
    <Fragment>
      <header>
        <div className="blue-logo">
          <NavLink to="/"> </NavLink>
        </div>
      </header>
      <section>
        <div className="sidebar-left">
          <ul className="nav">
            <li>
              <NavLink to="/lostandfound/lost">Lost</NavLink>
            </li>
            <li>
              <NavLink to="/lostandfound/found">Found</NavLink>
            </li>
          </ul>
        </div>
        <div className="lost-found-pets">{isLost ? <Lost /> : <Found />}</div>
        <div className="sidebar-right"></div>
      </section>
    </Fragment>
  );
};

export default LostAndFoundPage;
