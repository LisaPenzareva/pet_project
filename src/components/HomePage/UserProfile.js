import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
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
            <div className="d-flex mb-3 ">
              <img
                className="user-image"
                src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
                alt="avatar"
              />
              <h5 className="user-name p-4">
                {user.fullName}
                {/* <FontAwesomeIcon icon={faPencil} />  */}
              </h5>
            </div>
            <div></div>
            <div className="labeledInput">
              <label className="user-label">Email:</label>
              <input placeholder={user.email} type="text" className="user-input" />
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
            
            <div className="mt-3  button-block  justify-content-end">
              <button className="cancel-button py-2 mr-3">Cancel</button>
              <button type="submit" className="user-button py-2 ml-3 offset-1">
                Save changes
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
