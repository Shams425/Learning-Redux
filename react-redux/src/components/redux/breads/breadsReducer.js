import { BUY_BREAD } from "./breadsTypes";

const initialState = {
  numOfBreads: 50,
};

export const breadReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BREAD:
      return {
        ...state,
        numOfBreads: state.numOfBreads - 1,
      };
    default:
      return state;
  }
};
