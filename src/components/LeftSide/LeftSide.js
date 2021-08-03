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
import {useSelector} from "react-redux";

const LeftSide = () => {

  const isAuth = useSelector((state) => {
    return state.users.isAuth;
  });


  return (
    <div className="sidebar-left col-3">
      <nav className="nav flex-column my-5">

        { !isAuth ?
            null :
        <div className="nav-element">
          <NavLink
            exact={true}
            className="nav-link text-white fw-bold"
            to="/homepage/newsfeed"
          >
            <FontAwesomeIcon icon={faHome} /> &nbsp; Home
          </NavLink>
        </div> }


        <div className="nav-element">
          <NavLink
            className="nav-link text-white fw-bold"
            to="/lostandfound/lost"
          >
            <FontAwesomeIcon icon={faSearch} /> &nbsp; Lost
          </NavLink>
        </div>
        <div className="nav-element mb-5">
          <NavLink
            className="nav-link text-white fw-bold"
            to="/lostandfound/found"
          >
            <FontAwesomeIcon icon={faPaw} /> &nbsp; Found
          </NavLink>
        </div>

        { !isAuth ?
            null :
            <div>
              <h4 className="text-white fw-bold mt-5">SERVICES</h4>
              <hr style={{color: "white"}}/>
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
            </div>
       }
      </nav>
    </div>
  );
};

export default LeftSide;
