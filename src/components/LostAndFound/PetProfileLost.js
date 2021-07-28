import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { setLocalLostPet } from "../../store/actions/actionPets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPaw,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Lost from "./Lost";
import Found from "./Found";

const PetProfileLost = ({ pet, setLostPet }) => {
  const { id } = useParams();

  useEffect(() => {
    setLostPet(+id);
  }, []);

  return (
    <div>
      <section className="container-fluid">
        <div className="pet-profile-wrapper col-7 p-5">
          <div>
            <h3>
              {" "}
              <span className="blue">Lost pet:</span> {pet.nick} |{" "}
            </h3>
            <p className="card-text">
              <FontAwesomeIcon
                style={{ color: "#06B2BB9A" }}
                icon={faMapMarker}
              />{" "}
              {pet.location}
            </p>
          </div>
          <br />
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={
                    (pet.photo =
                      "aaa.jpg" || "bbb.jpg" || " "
                        ? "https://offvkontakte.ru/wp-content/uploads/avatarka-pustaya-vk_20.jpg"
                        : pet.photo)
                  }
                  className="card-img-top p-2"
                  alt="pet"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">
                    <span className="blue">{pet.type}</span> - {pet.breed}
                  </h3>
                  <p className="card-text">
                    <small className="text-muted">{pet.createdAt}</small>
                  </p>
                  <hr />
                  <p>
                    <span className="blue">Color:</span> {pet.color}{" "}
                  </p>
                  <p>
                    <span className="blue">Sex:</span> {pet.sex}{" "}
                  </p>
                  <p>
                    <span className="blue">Height:</span> {pet.height}{" "}
                  </p>
                  <p>
                    <span className="blue">Distinctive features: </span>{" "}
                    {pet.disFeatures}{" "}
                  </p>
                  <p>
                    <span className="blue">Description:</span> {pet.description}{" "}
                  </p>
                  <br />
                  <p>
                    <span className="blue"> Phone: </span> {pet.phone}{" "}
                  </p>
                  <p>
                    <span className="blue"> E-Mail: </span> {pet.email}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
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
