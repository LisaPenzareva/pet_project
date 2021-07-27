import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {NavLink, useParams} from "react-router-dom";
import {
  setLocalFoundPet,
} from "../../store/actions/actionPets";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarker, faPaw, faSearch} from "@fortawesome/free-solid-svg-icons";

const PetProfileFound = ({ pet, setFoundPet }) => {
  const { id } = useParams();

    useEffect(() => {
        setFoundPet(+id)
        }, []);

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
                              <NavLink className="nav-link text-white fw-bold" to="/lostandfound/lost">
                                  <FontAwesomeIcon icon={faSearch} /> {" "} Lost
                              </NavLink>
                          </div>
                          <div className="nav-element">
                              <NavLink className="nav-link text-white fw-bold" to="/lostandfound/found">
                                  <FontAwesomeIcon icon={faPaw} /> {" "} Found
                              </NavLink>
                          </div>
                      </nav>
                  </div>

                  <div className="pet-profile-wrapper col-7 p-5">
                      <div>
                          <h3> <span className="blue">Found pet:</span> {pet.nick} | </h3>
                          <p className="card-text"><FontAwesomeIcon style={{color: "#06B2BB9A"}} icon={faMapMarker}/> {pet.location}</p>
                      </div>
                      <hr/>
                      <div className="card mb-3" style={{maxWidth: "540px"}}>
                          <div className="row g-0">
                              <div className="col-md-4">
                                  <img src={ pet.photo = "aaa.jpg"||"bbb.jpg"||" " ? "https://offvkontakte.ru/wp-content/uploads/avatarka-pustaya-vk_20.jpg" : pet.photo} className="card-img-top" alt="pet"/>
                              </div>
                              <div className="col-md-8">
                                  <div className="card-body">
                                      <h3 className="card-title"><span className="blue">{pet.type}</span> - {pet.breed}</h3>
                                      <p className="card-text"><small className="text-muted">{pet.createdAt}</small></p>
                                      <hr/>
                                      <p><span className="blue">Color:</span> {pet.color} </p>
                                      <p><span className="blue">Sex:</span>  {pet.sex} </p>
                                      <p><span className="blue">Height:</span> {pet.height} </p>
                                      <p><span className="blue">Distinctive features: </span> {pet.disFeatures} </p>
                                      <p><span className="blue">Description:</span> {pet.description} </p><br/>
                                      <p><span className="blue"> Phone: </span> {pet.phone} </p>
                                      <p><span className="blue">  E-Mail:  </span>  {pet.email} </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>



                  <div className="sidebar-right col-2"> </div>
              </div>
          </section>
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
        setFoundPet: (id) => dispatch(setLocalFoundPet(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PetProfileFound);
