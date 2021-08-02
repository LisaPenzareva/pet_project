import {ADD_NEW_USER, CHANGE_AUTH, SET_USER_BY_ID} from "../typesList";


export const UsersReducer = (state = {}, action) => {
  switch (action.type) {

    case ADD_NEW_USER:
      return { ...state, list: [...state.list, action.payload] }

    case CHANGE_AUTH:
      return { ...state, isAuth: action.payload };

    case SET_USER_BY_ID:
      return {
        ...state, userById: action.payload,
      };

    default:
      return state;
  }
};
