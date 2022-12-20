import {
  FILTER_BY_AUTHOR,
  FILTER_BY_CATEGORY,
  FILTER_BY_QUERY,
} from "./actionTypes";

export const filter_by_query = (value) => {
  return {
    type: FILTER_BY_QUERY,
    payload: value,
  };
};
export const filter_by_category = (value) => {
  return {
    type: FILTER_BY_CATEGORY,
    payload: value,
  };
};
export const filter_by_author = (value) => {
  return {
    type: FILTER_BY_AUTHOR,
    payload: value,
  };
};
