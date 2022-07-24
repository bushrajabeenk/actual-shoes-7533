import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { todosReducer } from "./reducer";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ todo: todosReducer });

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
