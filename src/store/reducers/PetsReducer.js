import { SET_LOST_PET_BY_ID, SET_FOUND_PET_BY_ID } from "../typesList";

export const PetsReducer = (state = {}, action) => {
  let idx;
  switch (action.type) {

    case SET_LOST_PET_BY_ID:
      idx = state.lostList.findIndex((p) => p.id === action.payload);
      if (idx === -1) return { ...state, petById: {} };
      return { ...state, petById: state.lostList[idx] };

    case SET_FOUND_PET_BY_ID:
      idx = state.foundList.findIndex((p) => p.id === action.payload);
      if (idx === -1) return { ...state, petById: {} };
      return { ...state, petById: state.foundList[idx] };

    default:
      return state;
  }
};
