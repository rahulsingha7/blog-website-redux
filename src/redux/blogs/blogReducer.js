import { FILTER_BY_CATEGORY, FILTER_BY_QUERY } from "./actionTypes";
import initialState from "./initialState";

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_QUERY:
      return {
        ...state,
        filters: {
          ...state.filters,
          quaries: action.payload.quaries,
          categories: [...state.filters.categories],
          authors: [...state.filters.authors],
        },
        blogs: [...state.blogs],
      };
     case FILTER_BY_CATEGORY:
        
    default:
      return state;
  }
};

export default blogReducer;
