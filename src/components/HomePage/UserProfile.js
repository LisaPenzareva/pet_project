import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const userProfile = () => {
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
                <NavLink
                  className="nav-link text-white fw-bold"
                  to="/lostandfound/lost"
                >
                  {/* <FontAwesomeIcon icon={faSearch} /> {" "} Lost */}
                </NavLink>
              </div>
              <div className="nav-element">
                <NavLink
                  className="nav-link text-white fw-bold"
                  to="/lostandfound/found"
                >
                  {/* <FontAwesomeIcon icon={faPaw} /> {" "} Found */}
                </NavLink>
              </div>
            </nav>
          </div>

          <div className="user-profile col-7">
            <p className="user-text">
              Your profile. Change, edit and manage your data.
            </p>
            <hr />
            <h3 className="user-title">My profile</h3>
            <div className="d-flex mb-3 ">
              <img class="img-responsive img-circle" src="foto.jpg" alt="user"/>
              <h5 className="user-name p-4">
                Name
                {/* <FontAwesomeIcon icon={faPencil} />  */}
              </h5>
            </div>
            <div></div>
            <div className="labeledInput">
              <label className="user-label">Email:</label>
              <input type="text" className="user-input" />
            </div>
            <div className="labeledInput">
              <label className="user-label">Phone:</label>
              <input type="text" className="user-input" />
            </div>
            <div className="labeledInput">
              <label className="user-label">Avatar:</label>
              <input type="text" className="user-input" />
            </div>
            <div className="labeledInput">
              <label className="user-label">My pet:</label>
              <input type="text" className="user-input" />
            </div>
            <div className="labeledInput">
              <label className="user-label">Nick:</label>
              <input type="text" className="user-input" />
            </div>
            <div className="labeledInput">
              <label className="user-label">Photo:</label>
              <input type="text" className="user-input" />
            </div>
            <img class="img-responsive img-circle img-left" src="foto.jpg" alt="pet"/>
            <div className="mt-3  button-block  justify-content-end">
              <button className="cancel-button py-2 mr-3">Cancel</button>
              <button type="submit" className="user-button py-2 ml-3 offset-1">
                Save changes
              </button>
            </div>
          </div>

          <div className="sidebar-right col-2"> </div>
        </div>
      </section>
    </div>
  );
};

export default userProfile;
