import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  setLocalLostPet,
  setLocalFoundPet,
} from "../../store/actions/actionPets";

const PetProfile = ({ isLost }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // isLost ? 
    dispatch(setLocalLostPet(+id))
    //  : dispatch(setLocalFoundPet(+id));
  }, []);

  return <h1>Pet Profile</h1>;
};

const mapStateToProps = (state) => {
  return {
    isLost: state.pets.isLost,
  };
};

export default connect(mapStateToProps, null)(PetProfile);
