import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  setLocalLostPet,
} from "../../store/actions/actionPets";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarker} from "@fortawesome/free-solid-svg-icons";

const PetProfileLost = ({ pet, setLostPet}) => {
  const { id } = useParams();

    useEffect(() => {
        setLostPet(+id)
        }, []);


  // if (isLost) {
  //     useEffect(() => {
  //         setLostPet(+id)
  //     }, []);
  // } else {
  //     useEffect(() => {
  //         setFoundPet(+id)
  //     }, []);
  // }

  return (
      <div className="pet-profile-wrapper">
          <div>
              <h1>{pet.nickname} | </h1>
              <p className="card-text"><FontAwesomeIcon style={{color: "#06B2BB9A"}} icon={faMapMarker}/> {pet.location}</p>
          </div>
        <hr/>
          <div className="card mb-3" style={{maxWidth: "540px"}}>
              <div className="row g-0">
                  <div className="col-md-4">
        <img src={pet.image} className="card-img-top" alt="pet"/>
                      </div>
                  <div className="col-md-8">
                      <div className="card-body">
                          <h3 className="card-title">{pet.type}, {pet.breed}</h3>
                          <p className="card-text"><small className="text-muted">Dec 12, 2019</small></p>
                          <hr/>
                          <p>
                              Color: {pet.color}<br/>
                              Sex: {pet.sex}<br/>
                              Height: {pet.height}<br/>
                              <br/>
                              Distinctive features: {pet.features}<br/>
                              <br/>
                              Description: {pet.description}<br/>
                              <br/>
                              {/*Owner: {pet.contacts.owner}*/}
                              {/*Phone: {pet.contacts.phone}*/}
                              {/*E-Mail: {pet.contacts.email}*/}
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
};

const mapStateToProps = (state) => {
  return {
      pet: state.pets.petById,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLostPet: (id) => dispatch(setLocalLostPet(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PetProfileLost);
