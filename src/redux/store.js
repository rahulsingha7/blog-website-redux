import { createStore } from "redux";
import reducer from "./posts/reducer";

const store = createStore(reducer);

export default store;
