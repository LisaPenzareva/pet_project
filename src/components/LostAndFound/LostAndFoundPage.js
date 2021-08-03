import React from "react";
// import { NavLink } from "react-router-dom";
import Lost from "./Lost";
import Found from "./Found";


const LostAndFoundPage = (props) => {
  const isLostMode = props.isLostMode;

  return (
    <div>
      <section className="container-fluid">
        <div className="lost-found-pets">
          {isLostMode ? <Lost /> : <Found />}
        </div>
      </section>
    </div>
  );
};

export default LostAndFoundPage;
