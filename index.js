//making the store
const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

//Whole application state
//let say we expand our cake store so it's now sallying ice-cream and for each part it has it's own state
// const initialState = {
//   numOfCakes: 10,
// };

//we want every state individually
const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCream = {
  numOfIceCreams: 20,
};

/**
 making the action in Redux : 
 * make a variable and assign it to the action name (both the variable name and it's value are same)
 
 * make a action creator and this will return object that has a type property to specify the action
**/
//action name
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//making an action creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

/**
 making the reducer in Redux : 
 * make a function that accepts a previous state & action as arguments and returns a new state
**/

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state; // in case there was no action return a state as it's
  }
};

const iceCreamReducer = (state = initialIceCream, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state; // in case there was no action return a state as it's
  }
};

//we combine every reducer before creating the store and assign it to rootReducer variable
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

//apply the middleware concept by using the applyMiddleware function, and pass it to the store
//creating the store
const store = createStore(rootReducer, applyMiddleware(logger));
//the store offers getState(), subscribe(listeners), dispatch(actions), unsubscribe methods to mange the state

console.log("initial State", store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
