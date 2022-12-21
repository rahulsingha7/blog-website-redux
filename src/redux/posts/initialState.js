import { posts } from "../../data";

const initialState = {
  all_post: posts,
  filtered_post: posts,
  searchText: "",
  filterBy: [],
};

export default initialState;
