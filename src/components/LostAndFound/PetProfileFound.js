import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { setLocalFoundPet } from "../../store/actions/actionPets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

const PetProfileFound = ({ pet, setFoundPet }) => {
  const { id } = useParams();

  useEffect(() => {
    setFoundPet(+id);
  }, []);

  return (
    <section className="container-fluid">
      <div className="pet-profile-wrapper  p-5">
        <div>
          <h3>
            {" "}
            <span className="blue">Found pet:</span> {pet.nick} |{" "}
          </h3>
          <p className="card-text">
            <FontAwesomeIcon
              style={{ color: "#06B2BB9A" }}
              icon={faMapMarker}
            />{" "}
            {pet.location}
          </p>
        </div>{" "}
        <br />
        <div className="card mb-3 border-0" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={
                  // (pet.photo =
                  //   "aaa.jpg" || "bbb.jpg"
                  //     ? "https://offvkontakte.ru/wp-content/uploads/avatarka-pustaya-vk_20.jpg"
                  //     :
                        pet.photo
                  // )
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
                  <small className="text-muted">{pet.createdAt.split("T")[0]}</small>
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
  );
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
