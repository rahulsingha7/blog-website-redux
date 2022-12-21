import {
  CLEAR_FILTER,
  CLEAR_SEARCH_TEXT,
  UPDATE_FILTER,
  UPDATE_SEARCH_TEXT,
} from "./actionTypes";

export const updateFilter = (filterBy) => {
  return {
    type: UPDATE_FILTER,
    payload: filterBy,
  };
};
export const updateSearchText = (searchText) => {
  return {
    type: UPDATE_SEARCH_TEXT,
    payload: searchText,
  };
};
export const clearSearchText = () => {
  return {
    type: CLEAR_SEARCH_TEXT,
  };
};

export const clearFilter = () => {
  return {
    type: CLEAR_FILTER,
  };
};
