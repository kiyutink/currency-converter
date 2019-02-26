import { combineReducers } from "redux";
import balances from "./balances";
import rates from "./rates";

export default combineReducers({
  balances,
  rates
});
