import { combineReducers } from "redux";
import { PostsReducer } from "./PostsReducer";
import { UsersReducer } from "./UsersReducer";

const RootReducer = combineReducers({
  users: UsersReducer,
  posts: PostsReducer,
});

export default RootReducer;
