import { createStore, applyMiddleware } from "redux";
import logger from "../middlewares";
import reducer from "../reducers";

const enhancer = applyMiddleware(logger);

const store = createStore(reducer, enhancer);

// dev mode
window.store = store;

export default store;
