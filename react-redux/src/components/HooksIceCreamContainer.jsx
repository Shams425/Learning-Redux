import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "./redux";

export default function HooksIceCreamContainer() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>number of ice-creams {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>buy ice-cream</button>
    </div>
  );
}
