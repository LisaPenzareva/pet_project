
import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarker} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const PetCard = ({ pet }) => {
  let history = useHistory();

  const clickHandle = (event) => {
    event.preventDefault();
    history.push(
        pet.lostFound === "lost"
        ? `/lostandfound/lost/${pet.id} `
        : `/lostandfound/found/${pet.id}`
    );
  };


  return (
    <div className="card border-0" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="petcard-title card-title">{pet.nick}</h5>
        <p className="petcard-text card-text">
          <FontAwesomeIcon style={{ color: "#06B2BB9A" }} icon={faMapMarker} />{" "}
          {pet.location}
        </p>
        <img src={pet.photo} className="card-img-bottom" alt="dog" />
        <div className="petcard-link">
          <a
            href="#"
            onClick={clickHandle}
            style={{ color: "#68D0D6" }}
            className="petcard-view card-link"
          >
            view details <span style={{ color: "black" }}>>></span>{" "}
          </a>

        </div>

        {/* <Link to={ pet.isLost ? `/lostandfound/lost/${pet.id}` : `/lostandfound/found/${pet.id}`} style={{color: "#68D0D6"}} className="card-link">view details <span style={{color: "black"}}>>></span> </Link> */}
        {/* <Link to={`/lostandfound/lost/${pet.id}`} style={{color: "#68D0D6"}} className="card-link">view details <span style={{color: "black"}}>>></span> </Link> */}
      </div>
    </div>
  );
};
export default PetCard;
