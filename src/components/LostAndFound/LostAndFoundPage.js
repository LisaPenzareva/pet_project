import React from "react";
import { NavLink } from "react-router-dom";
import Lost from "./Lost";
import Found from "./Found";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faSearch } from "@fortawesome/free-solid-svg-icons";

const LostAndFoundPage = (props) => {
  const isLostMode = props.isLostMode;

  return (
    <div>
      <header className="homepage-header px-4 py-2">
        <div className="blue-logo blue-logo-header">
          <NavLink to="/"> </NavLink>
        </div>
      </header>

      <section className="container-fluid">

        <div className="row align-items-stretch ">
          <div className="sidebar-left col-3">
            <nav className="nav flex-column my-5">
              <div className="nav-element">
                <NavLink className="nav-link text-white fw-bold" to="/lostandfound/lost">
                  <FontAwesomeIcon icon={faSearch} /> &nbsp; Lost
                </NavLink>
              </div>
              <div className="nav-element">
                <NavLink className="nav-link text-white fw-bold" to="/lostandfound/found">
                  <FontAwesomeIcon icon={faPaw} /> &nbsp; Found
                </NavLink>
              </div>
            </nav>
          </div>


          <div className="lost-found-pets col-7">
            {isLostMode ? <Lost /> : <Found />}
          </div>

          <div className="sidebar-right col-2"> </div>
        </div>
      </section>
    </div>
  );
};

export default LostAndFoundPage;
