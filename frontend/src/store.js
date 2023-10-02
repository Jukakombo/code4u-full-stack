import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import contacts from "./reducers/index";
import authReducer from "./reducers/user";

const reducer = combineReducers({
  contacts: contacts,
  authReducer: authReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
