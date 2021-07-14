import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarker} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const PetCard = ({pet}) => {

    return (
        <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{pet.nickname}</h5>
                    <p className="card-text"><FontAwesomeIcon style={{color: "#06B2BB9A"}} icon={faMapMarker}/> {pet.location}</p>
                    <img src={pet.image} className="card-img-bottom" alt="dog"/>
                    <Link to={ pet.isLost ? `/lostandfound/lost/${pet.id}` : `/lostandfound/found/${pet.id}`} style={{color: "#68D0D6"}} className="card-link">view details <span style={{color: "black"}}>>></span> </Link>
                    {/* <Link to={`/lostandfound/lost/${pet.id}`} style={{color: "#68D0D6"}} className="card-link">view details <span style={{color: "black"}}>>></span> </Link> */}
                </div>
        </div>
    )
}
export default PetCard