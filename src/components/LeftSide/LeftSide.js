import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faSearch,
  faHome,
  faHotel,
  faWalking,
  faDog,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";

const LeftSide = () => {
  return (
    <div className="sidebar-left col-3">
      <nav className="nav flex-column my-5">
        <div className="nav-element">
          <NavLink
            exact={true}
            className="nav-link text-white fw-bold"
            to="/homepage/newsfeed"
          >
            <FontAwesomeIcon icon={faHome} /> &nbsp; Home
          </NavLink>
        </div>
        <div className="nav-element">
          <NavLink
            className="nav-link text-white fw-bold"
            to="/lostandfound/lost"
          >
            <FontAwesomeIcon icon={faSearch} /> &nbsp; Lost
          </NavLink>
        </div>
        <div className="nav-element">
          <NavLink
            className="nav-link text-white fw-bold"
            to="/lostandfound/found"
          >
            <FontAwesomeIcon icon={faPaw} /> &nbsp; Found
          </NavLink>
        </div>
        <h3 className="text-white my-5">SERVICES</h3>
        <hr />
        <div className="nav-element">
          <NavLink
            className="nav-link text-white fw-bold"
            to="/homepage/hotels"
          >
            <FontAwesomeIcon icon={faHotel} /> &nbsp; Hotels
          </NavLink>
        </div>
        <div className="nav-element">
          <NavLink
            className="nav-link text-white fw-bold"
            to="/homepage/walking"
          >
            <FontAwesomeIcon icon={faWalking} /> &nbsp; Walking
          </NavLink>
        </div>
        <div className="nav-element">
          <NavLink
            className="nav-link text-white fw-bold"
            to="/homepage/fostering"
          >
            <FontAwesomeIcon icon={faDog} /> &nbsp; Fostering
          </NavLink>
        </div>
        <div className="nav-element">
          <NavLink
            className="nav-link text-white fw-bold"
            to="/homepage/vethelp"
          >
            <FontAwesomeIcon icon={faStethoscope} /> &nbsp; VetHelp
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSide;
