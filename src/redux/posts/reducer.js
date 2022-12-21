import {
  CLEAR_FILTER,
  CLEAR_SEARCH_TEXT,
  UPDATE_FILTER,
  UPDATE_SEARCH_TEXT,
} from "./actionTypes";
import initialState from "./initialState";
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      const { name, value } = action.payload;
      let newPosts = [...state.all_post];
      let filterBy = {};
      filterBy[name] = value;
      if (name === "author") {
        newPosts = newPosts.filter((post) => post.author.id === value.id);
        filterBy[name] = value.name;
      } else if (name === "search") {
        newPosts = newPosts.filter((post) =>
          post.title.toLowerCase().includes(value.toLowerCase())
        );
      } else {
        newPosts = newPosts.filter((post) => post[name] === value);
      }
      return {
        ...state,
        filterBy,
        filtered_post: newPosts,
      };
    case UPDATE_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    case CLEAR_SEARCH_TEXT:
      return {
        ...state,
        searchText: "",
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filterBy: {},
        searchText: "",
        filtered_post: state.all_post,
      };
    default:
      return state;
  }
};
export default reducer;
