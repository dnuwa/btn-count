import { GET_GOALS_SUCCESS } from "../actions";

const fetchingReducer = (state = [], action) => {
  if (action.type === GET_GOALS_SUCCESS) {
    return [...state, ...action.goals ];
  }
  return state;
};

export default fetchingReducer;
