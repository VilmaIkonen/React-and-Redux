import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../actions/actions'

const increase = () => ({type: actionTypes.INCREASE});
const decrease = () => ({type: actionTypes.DECREASE});
const addFive = () => ({type: actionTypes.ADDFIVE});
const removeFive = () => ({type: actionTypes.REMOVEFIVE});
const reset = () => ({type: actionTypes.RESET});

const Counter = () => {

  const counter = useSelector(state => state.counter); // in class comp: mapStateToProps

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counts: {counter}</h1>
      <button onClick={() => dispatch(increase())}>Increase one</button>
      <button onClick={() => dispatch(decrease())}>Decrease one</button>
      <button onClick={() => dispatch(addFive())}>Add five</button>
      <button onClick={() => dispatch(removeFive())}>Remove five</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
