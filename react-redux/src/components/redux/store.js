import { combineReducers, createStore } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import { iceCreamReducer } from "./ice-cream/iceCreamReducer";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;
