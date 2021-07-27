import React from "react";
import { NavLink } from "react-router-dom";
import Lost from "../LostAndFound/Lost";
import Found from "../LostAndFound/Found";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faSearch, faHome, faHotel, faWalking, faDog, faStethoscope } from "@fortawesome/free-solid-svg-icons";


const Home = () => {

  const renderMiddlePart = () => {
    if (homeMode) { return (< NewsFeed/>) }
    if (walkingMode) { return (< WalkingPosts/>)}
    if (fosteringMode) { return (< FosteringPosts/>)}
    if (vetHelpMode) { return (< VetHelpPosts/>)}
  }

  return (<div>
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
              <NavLink className="nav-link text-white fw-bold" to="/homepage">
                <FontAwesomeIcon icon={faHome} /> &nbsp; Home
              </NavLink>
            </div>
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
            <h3>SERVICES</h3>
            <hr/>
            <div className="nav-element">
              <NavLink className="nav-link text-white fw-bold" to="/homepage/hotels">
                <FontAwesomeIcon icon={faHotel} /> &nbsp; Hotels
              </NavLink>
            </div>
            <div className="nav-element">
              <NavLink className="nav-link text-white fw-bold" to="/homepage/walking">
                <FontAwesomeIcon icon={faWalking} /> &nbsp; Walking
              </NavLink>
            </div>
            <div className="nav-element">
              <NavLink className="nav-link text-white fw-bold" to="/homepage/fostering">
                <FontAwesomeIcon icon={faDog} /> &nbsp; Fostering
              </NavLink>
            </div>
            <div className="nav-element">
              <NavLink className="nav-link text-white fw-bold" to="/homepage/vethelp">
                <FontAwesomeIcon icon={faStethoscope} /> &nbsp; VetHelp
              </NavLink>
            </div>

          </nav>
        </div>


        <div className="lost-found-pets col-7">
          { renderMiddlePart() }
          {/*{isLostMode ? <Lost /> : <Found />}*/}
        </div>

        <div className="sidebar-right col-2"> </div>
      </div>
    </section>
  </div>
  );
};

export default Home;


