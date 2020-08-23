import { ADD_ONE, MINUS_ONE } from "../actions";

const resultReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_ONE:
      return state + 1;

    case MINUS_ONE:
      return state - 1;

    default:
      return state;
  }
};

export default resultReducer;
