import {
  FILTER_BY_AUTHOR,
  FILTER_BY_CATEGORY,
  FILTER_BY_QUERY,
} from "./actionTypes";
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
      const categoryExist = state.filters.categories.includes(
        action.payload.category
      );
      if (!categoryExist) {
        return {
          ...state,
          filters: {
            ...state.filters,
            categories: [...state.filters.categories, action.payload.category],
            authors: [...state.filters.authors],
          },
          blogs: [...state.blogs],
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            categories: state.filters.categories.filter(
              (category) => category !== action.payload.category
            ),
            authors: [...state.filters.authors],
          },
          blogs: [...state.blogs],
        };
      }
    case FILTER_BY_AUTHOR:
      const authorExist = state.filters.authors.includes(action.payload.author);
      if (!authorExist) {
        return {
          ...state,
          filters: {
            ...state.filters,
            categories: [...state.filters.categories],
            authors: [...state.filters.authors, action.payload.author],
          },
          blogs: [...state.blogs],
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            categories: [...state.filters.categories],
            authors: state.filters.authors.filter(
              (author) => author !== action.payload.author
            ),
          },
          blogs: [...state.blogs],
        };
      }
    default:
      return state;
  }
};

export default blogReducer;
