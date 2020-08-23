import { combineReducers } from "redux";
import resultReducer from "./resultReducer";
import fetchingReducer from "./fetchingReducer";
import loadingReducer from "./loadingReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  value: resultReducer,
  goals: fetchingReducer,
  loading: loadingReducer,
  error: errorReducer,
  // images: imagesReducer,
  // error: errorReducer,
  // nextPage: pageReducer,
});

export default rootReducer;
