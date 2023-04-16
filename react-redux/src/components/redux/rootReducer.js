import { combineReducers } from "redux";
import { breadReducer } from "./breads/breadsReducer";
import cakeReducer from "./cakes/cakeReducer";
import { iceCreamReducer } from "./ice-cream/iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  bread: breadReducer,
});

export default rootReducer;
