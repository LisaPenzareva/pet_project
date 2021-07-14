import {SET_LOST_PET_BY_ID, SET_FOUND_PET_BY_ID} from '../typesList'

export const setLocalLostPet = (id) => {
  return (dispatch) => {
    dispatch(setLocalLostPetInState(id));
  };
};
const setLocalLostPetInState = (petId) => {
  return {
    type: SET_LOST_PET_BY_ID,
    payload: petId,
  };
};

export const setLocalFoundPet = (id) => {
    return (dispatch) => {
      dispatch(setLocalFoundPetInState(id));
    };
  };
  const setLocalFoundPetInState = (petId) => {
    return {
      type: SET_FOUND_PET_BY_ID,
      payload: petId,
    };
  };
  