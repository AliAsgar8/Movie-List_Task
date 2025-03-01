import { createStore, applyMiddleware, compose } from "redux";
import myReducer from "./Reducer";
import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
  myReducer,
  composeEnhancers(applyMiddleware(thunk)) 
);
