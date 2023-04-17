import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsersFailed,
  fetchUsersRequest,
  fetchUsersSuccess,
} from "./redux";

function Users() {
  //using the react-redux hooks
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(userState);

  //making the api call in useEffect
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>Users</h2>
      <div>
        {userState.loading ? (
          <h2>Loading</h2>
        ) : !userState.error ? (
          <div>
            {userState &&
              userState.data &&
              userState.data.map((user) => <p>{user.name}</p>)}
          </div>
        ) : (
          <h2>Something went wrong</h2>
        )}
      </div>
    </div>
  );
}

const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest()); //this will set loading to true

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const userDate = response.data;
        dispatch(fetchUsersSuccess(userDate));
      })
      .catch((error) => {
        dispatch(fetchUsersFailed(error.message));
      });
  };
};
export default Users;
