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
      <section className="container-fluid">
        <div className="lost-found-pets col-7">
          {isLostMode ? <Lost /> : <Found />}
        </div>
      </section>
    </div>
  );
};

export default LostAndFoundPage;
