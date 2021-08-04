import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { addNewPet } from "../../store/actions/actionPets";

const LostAndFoundForm = ({ addPet }) => {
  const { lostType } = useParams();

  const [formData, setFormData] = useState({
    nick: "",
    type: "",
    sex: "",
    breed: "",
    color: "",
    height: "",
    disFeatures: "",
    description: "",
    location: "",
    photo: "",
    phone: "",
    email: "",
  });

  let history = useHistory();

  const changeFieldHandle = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      lostFound: lostType,
    });
  };

  const submitHandle = (event) => {
    event.preventDefault();
    addPet(formData);
    if (lostType === "lost") {
      history.push("/lostandfound/lost");
    }
    if (lostType === "found") {
      history.push("/lostandfound/found");
    }
  };

  return (
    <div className="container-fluid col-12 mt-3 px-5 form-container">
      <div className="row mb-4 pt-3">
        <div className="col-12 form-header">
          <strong>
            <span
              className="text-capitalize">
              {lostType}
            </span>{" "}
            your buddy?
          </strong>{" "}
          Keep calm and complete the form.
        </div>
      </div>
      <form className="row" onSubmit={submitHandle}>
        <div className="col-lg-6">
          <div className="form-group row">
            <label htmlFor="nick" className="col-2 col-form-label">
              Nickname: {" "}
            </label>
            <div className="col-10">
              <input
                className="form-control-sm"
                id="nick"
                name="nick"
                placeholder="Uncle Sam"
                onChange={changeFieldHandle}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="type" className="col-2 col-form-label">
              Type:{" "}
            </label>
            <div className="col-10">
              <input
                className="form-control-sm"
                id="type"
                name="type"
                placeholder="Dog"
                onChange={changeFieldHandle}
              />
            </div>
          </div>
          <div className="form-group row justify-content-start">
            <label htmlFor="sex" className="col-2 col-form-label">
              Sex:{" "}
            </label>
            <select
              className="col-4 form-select-sm"
              name="sex"
              id="sex"
              onChange={changeFieldHandle}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group row">
            <label htmlFor="breed" className="col-2 col-form-label">
              Breed: &nbsp;{" "}
            </label>
            <div className="col-10">
              <input
                className="form-control-sm"
                id="breed"
                name="breed"
                placeholder="Golden Retriever"
                onChange={changeFieldHandle}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="color" className="col-2 col-form-label">
              Color: &nbsp;{" "}
            </label>
            <div className="col-10">
              <input
                className="form-control-sm"
                id="color"
                name="color"
                placeholder="Beige"
                onChange={changeFieldHandle}
              />
            </div>
          </div>
          <div className="form-group row ">
            <label htmlFor="height" className="col-2 col-form-label">
              Height: &nbsp;
            </label>
            <select
              className="col-4 form-select-sm"
              name="height"
              id="height"
              onChange={changeFieldHandle}
            >
              <option value="small">45-70 cm</option>
              <option value="big">71-90 cm</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group row justify-content-start">
            <label htmlFor="disFeatures" className="col-3 col-form-label">
              Distinctive features:
              <br />
              <p>up to 60 char</p>
            </label>
            <textarea
              className="form-control-sm"
              rows="3"
              col="3"
              name="disFeatures"
              placeholder="blue collar with stars, no left ear, damaged tail."
              onChange={changeFieldHandle}
            />
          </div>
          <div className="form-group row justify-content-start">
            <label htmlFor="description" className="col-3 col-form-label">
              Description:
              <br />
              <p>up to 150 char</p>
            </label>
            <textarea
              className="form-control-sm"
              rows="5"
              col="5"
              name="description"
              placeholder="brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs."
              onChange={changeFieldHandle}
            />
          </div>
          <div className="form-group row justify-content-start">
            <label htmlFor="location" className="col-3 col-form-label">
              Location:
              <br />
            </label>
            <textarea
              className="form-control-sm"
              rows="3"
              col="5"
              name="location"
              placeholder="Oliver Platz, Berlin"
              onChange={changeFieldHandle}
            />
          </div>
          <div className="form-group row">
            <label htmlFor="photo" className="col-2 col-form-label">
              Image:{" "}
            </label>
            <div className="col-10">
              <input
                className="form-control-sm"
                id="photo"
                name="photo"
                placeholder="Dog"
                onChange={changeFieldHandle}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mb-3 d-none d-md-block form-friends"></div>
        </div>
        <div className="row justify-content-start">
          <label htmlFor="contacts" className="col-3 col-form-label">
            Contacts: &nbsp;{" "}
          </label>
          <div className="col-12 col-md-2">
            <input
              className="form-control-sm"
              id="phone"
              name="phone"
              placeholder="Phone"
              onChange={changeFieldHandle}
            />
          </div>
          <div className="col-12 col-md-3 offset-1">
            <input
              className="form-control-sm"
              id="email"
              name="email"
              placeholder="Email"
              onChange={changeFieldHandle}
            />
          </div>
        </div>
        <div className="row m-md-2 justify-content-end">
          <div className="col-6 justify-content-end">
            <button type="submit" className=" m-md-2 lost-form-submit">
              {" "}
              <FontAwesomeIcon icon={faPaw} /> &nbsp; Publish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPet: (pet) => dispatch(addNewPet(pet)),
  };
};

export default connect(null, mapDispatchToProps)(LostAndFoundForm);
