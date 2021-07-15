import { combineReducers } from "redux";
import { PostsReducer } from "./PostsReducer";
import { UsersReducer } from "./UsersReducer";
import { PetsReducer } from "./PetsReducer";

const RootReducer = combineReducers({
  users: UsersReducer,
  posts: PostsReducer,
  pets: PetsReducer,
});

export default RootReducer;
