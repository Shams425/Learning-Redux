//making the store
const redux = require("redux");
const createStore = redux.createStore;

//Whole application state
const initialState = {
  numOfCakes: 10,
};

/**
 making the action in Redux : 
 * make a variable and assign it to the action name (both the variable name and it's value are same)
 
 * make a action creator and this will return object that has a type property to specify the action
**/
//action name
const BUY_CAKE = "BUY_CAKE";

//making an action creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}

/**
 making the reducer in Redux : 
 * make a function that accepts a previous state & action as arguments and returns a new state
**/

const reducer = (state = initialState, action) => {
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

//the store
const store = createStore(reducer);
//the store handles getState(), subscribe(listeners), dispatch(actions), unsubscribe methods to mange the state

console.log("initial State", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();
