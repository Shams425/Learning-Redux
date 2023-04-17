import { combineReducers } from "redux";
import { breadReducer } from "./breads/breadsReducer";
import cakeReducer from "./cakes/cakeReducer";
import { iceCreamReducer } from "./ice-cream/iceCreamReducer";
import { userReducer } from "./users/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  bread: breadReducer,
  user: userReducer,
});

export default rootReducer;
