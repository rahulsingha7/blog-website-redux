import { combineReducers } from "redux";
import blogReducer from "./blogs/blogReducer";
const rootReducer = combineReducers({
  blogReducer: blogReducer,
});

export default rootReducer;
