import { combineReducers } from "redux";
import friend from "./friend";
import me from "./me";

const reducers = combineReducers({
  friend, me
});

export default reducers;
