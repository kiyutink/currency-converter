import { combineReducers } from "redux";
import balances from "./balances/balances";
import rates from "./rates/rates";

export default combineReducers({
  balances,
  rates
});
