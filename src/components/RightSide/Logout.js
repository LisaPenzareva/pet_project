import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logOut } from "../../store/actions/actionUsers";

const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const logOutHandle = async (event) => {
    event.preventDefault();
    await dispatch(logOut());
    history.push("/");
  };

  return (
    <div className="text-white">
      <a
        className="text-white text-decoration-none"
        href="#"
        onClick={logOutHandle}
      >
        <FontAwesomeIcon icon={faSignOutAlt} /> &nbsp;Logout
      </a>
    </div>
  );
};

export default Logout;
