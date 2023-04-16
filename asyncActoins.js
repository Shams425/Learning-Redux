const redux = require("redux");
const thunk = require("redux-thunk").default;
const axios = require("axios");

const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

//whole application state
const initialState = {
  loading: true,
  data: [],
  error: "",
};

//define the actions and actions creator
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILED = "FETCH_USER_FAILED";

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const fetchUserFailed = (msg) => {
  return {
    type: FETCH_USER_FAILED,
    payload: msg,
  };
};

//define the reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_USER_FAILED:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

/*
thunk allows us to make an action creator that returns a function
instead of returning just an action (object that has properties define the action)
*/

//thunk function
const fetchUsers = () => {
  return (dispatch) => {
    //first call the request function
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        //return the id of the user
        const users = response.data.map((user) => user.id);
        // now call the success function and pass the users as parameter
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        // call the failed function and pass the error as parameter
        dispatch(fetchUserFailed(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());
