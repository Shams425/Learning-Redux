import React from "react";
import { connect } from "react-redux";
import { buyBread } from "./redux/breads/breadsActions";

function BreadContainer(props) {
  return (
    <div>
      <h2>number of breads {props.numOfBreads} </h2>
      <button onClick={props.buyBread}>buy Bread</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfBreads: state.bread.numOfBreads,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyBread: () => dispatch(buyBread()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BreadContainer);
