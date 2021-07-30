import {
  SET_LOST_PET_BY_ID,
  SET_FOUND_PET_BY_ID,
  FETCH_FOUND_PETS,
  FETCH_LOST_PETS,
  ADD_NEW_USER,
  ADD_NEW_PET
} from "../typesList";

export const PetsReducer = (state = {}, action) => {
  let idx;
  switch (action.type) {
    case ADD_NEW_PET:
      return { ...state, list: [...state.list, action.payload] }

    case FETCH_FOUND_PETS:
      return { ...state, ...action.payload };

    case FETCH_LOST_PETS:
      return { ...state, ...action.payload };

    case SET_LOST_PET_BY_ID:
      // idx = state.lostList.findIndex((p) => p.id === action.payload);
      // if (idx === -1) return { ...state, petById: {} };
      return { ...state, petById: action.payload };

    case SET_FOUND_PET_BY_ID:
      // idx = state.foundList.findIndex((p) => p.id === action.payload);
      // if (idx === -1) return { ...state, petById: {} };
      return { ...state, petById: action.payload };


    default:
      return state;
  }
};
