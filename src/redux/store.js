import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import root from "./reducers";

const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const configureStore = (preloadedState = {}) =>
  createStore(root, preloadedState, applyMiddleware(...middlewares));

export default configureStore;
