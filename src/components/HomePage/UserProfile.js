import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faSave } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const userProfile = ({ user }) => {
  return (
    <div>
      <section className="container-fluid">
        <div className="row align-items-stretch ">
          <div className="user-profile col-12">
            <p className="user-text">
              Your profile. Change, edit and manage your data.
            </p>
            <hr />
            <h3 className="user-title">My profile</h3>
            <div className="d-flex  px-1">
              <img
                className="user-image-1"
                src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
                alt="avatar"
              />
              <h5
                style={{ fontWeight: "bold" }}
                className="user-name w-50 d-flex align-items-center px-3 "
              >
                {user.fullName} &nbsp;
                <span style={{ color: "#BABABA", fontSize: '15px' }}>
                  <FontAwesomeIcon icon={faPencilAlt} />
                </span>
              </h5>
            </div>
            <div></div>
            <div className="userInput">
              <label className="user-label">Email:</label>
              <input
                placeholder={user.email}
                type="text"
                className="user-input"
              />
            </div>
            <div className="userInput">
              <label className="user-label">Phone:</label>
              <input
                placeholder="000-000-00-00"
                type="text"
                className="user-input"
              />
            </div>
            <div className="userInput">
              <label className="user-label">Avatar:</label>
              <input
                placeholder="myportret.jpg"
                type="text"
                className="user-input"
              />
            </div>
            <div className="userInput">
              <label className="user-label">My pet:</label>
              <input placeholder="Dog" type="text" className="user-input" />
            </div>
            <div className="userInput">
              <label className="user-label">Nick:</label>
              <input
                placeholder="Uncle Sam"
                type="text"
                className="user-input"
              />
            </div>
            <div className="userInput">
              <label className="user-label">Photo:</label>
              <input
                placeholder="mydog.jpg"
                type="text"
                className="user-input"
              />
            </div>

            <div className="mt-3  button-block  justify-content-end">
              <button className="cancelButton py-2 mr-3">Cancel</button>
              <button type="submit" className="user-button py-2  ml-3 offset-1">
                <FontAwesomeIcon icon={faSave} />
                &nbsp; Save changes
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.users.userById,
  };
};

export default connect(mapStateToProps, null)(userProfile);
