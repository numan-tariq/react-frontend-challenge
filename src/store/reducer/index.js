import { combineReducers } from "redux";
import testReducer from "./collection-reducer";

export default combineReducers({
  appData: testReducer,
});
