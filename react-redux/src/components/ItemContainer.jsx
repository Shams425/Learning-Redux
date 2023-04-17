import React from "react";
import { buyCake, buyIceCream } from "./redux";
import { connect } from "react-redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>item - {props.item}</h2>
      <button onClick={props.itemFunction}>
        buy {props.cake ? "cake" : "ice-cream"}
      </button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    itemFunction: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
