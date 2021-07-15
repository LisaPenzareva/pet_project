import {SET_LOST_PET_BY_ID, SET_FOUND_PET_BY_ID} from '../typesList'

export const setLocalLostPet = (id) => {
  return async (dispatch) => {
    try {
      await dispatch(setLocalLostPetInState(id));
    } catch (err) {
      console.log(err.message);
    }
  };
};

const setLocalLostPetInState = (petId) => {
  return {
    type: SET_LOST_PET_BY_ID,
    payload: petId,
  };
};

export const setLocalFoundPet = (id) => {
    return async (dispatch) => {
      try {
        await dispatch(setLocalFoundPetInState(id));
      } catch (err) {
        console.log(err.message);
      }
    };
  };
  const setLocalFoundPetInState = (petId) => {
    return {
      type: SET_FOUND_PET_BY_ID,
      payload: petId,
    };
  };
  