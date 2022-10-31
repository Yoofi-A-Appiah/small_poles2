/**
 * THE GLOBAL STORE FRO REDUX
 */
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers";
import { signupReducer } from "./reducers";
import { transfersReducer } from "./reducers";
import { leagueReducer } from "./reducers";
const rootReducer = combineReducers({
  userReducer,
  signupReducer,
  transfersReducer,
  leagueReducer,
});

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));
