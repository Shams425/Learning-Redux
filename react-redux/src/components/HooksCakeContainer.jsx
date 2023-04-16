import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "./redux";
import { buyIceCream } from "./redux/ice-cream/iceCreamActions";

export default function HooksCakeContainer() {
  //using the react-redux hooks

  //useSelector Hook
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);

  //useDispatch Hook
  const dispatch = useDispatch();
  return (
    <div className="hookContaienr">
      <h2>Number of Cakes {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </div>
  );
}
