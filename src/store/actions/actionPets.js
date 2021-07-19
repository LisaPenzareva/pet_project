import {SET_LOST_PET_BY_ID, SET_FOUND_PET_BY_ID, FETCH_FOUND_PETS, FETCH_LOST_PETS} from '../typesList'

export const getFoundPets = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://propets.telran-edu.de:8080/api/v1/lostfounds/found", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const json = await response.json();
      dispatch(fetchFoundPets({foundList: json }));
    } catch (err) {
      console.log(err.message);
    }
  };
};

const fetchFoundPets = (obj) => {
  return {
    type: FETCH_FOUND_PETS,
    payload: obj,
  };
};

export const getLostPets = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://propets.telran-edu.de:8080/api/v1/lostfounds/lost", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const json = await response.json();
      dispatch(fetchLostPets({lostList: json }));
    } catch (err) {
      console.log(err.message);
    }
  };
};

const fetchLostPets = (obj) => {
  return {
    type: FETCH_LOST_PETS,
    payload: obj,
  };
};

export const setLocalFoundPet = (petId) => {
  return async(dispatch) => {
    try {
      const response = await fetch(`http://propets.telran-edu.de:8080/api/v1/lostfounds/found/${petId}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const json = await response.json();
      await dispatch(setLocalFoundPetInState(json));
    } catch (err) {
      console.log(err.message);
    }
  };
};

const setLocalFoundPetInState = (pet) => {
  return {
    type: SET_FOUND_PET_BY_ID,
    payload: pet,
  };
};

export const setLocalLostPet = (petId) => {
  return async(dispatch) => {
    try {
      const response = await fetch(`http://propets.telran-edu.de:8080/api/v1/lostfounds/lost/${petId}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const json = await response.json();
      await dispatch(setLocalLostPetInState(json));
    } catch (err) {
      console.log(err.message);
    }
  };
};

const setLocalLostPetInState = (pet) => {
  return {
    type: SET_LOST_PET_BY_ID,
    payload: pet,
  };
};

//
// export const setLocalLostPet = (id) => {
//   return async (dispatch) => {
//     try {
//       await dispatch(setLocalLostPetInState(id));
//     } catch (err) {
//       console.log(err.message);
//     }
//   };
// };
//
// const setLocalLostPetInState = (petId) => {
//   return {
//     type: SET_LOST_PET_BY_ID,
//     payload: petId,
//   };
// };
//
// export const setLocalFoundPet = (id) => {
//     return async (dispatch) => {
//       try {
//         await dispatch(setLocalFoundPetInState(id));
//       } catch (err) {
//         console.log(err.message);
//       }
//     };
//   };
//   const setLocalFoundPetInState = (petId) => {
//     return {
//       type: SET_FOUND_PET_BY_ID,
//       payload: petId,
//     };
//   };
//