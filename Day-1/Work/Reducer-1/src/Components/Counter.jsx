import React, { useReducer } from "react";
import {
  reducer,
  incrementAmount1000,
  incrementAmount2000,
  decrement
} from "../Reducer/Reducer";
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h1>Amount :{state.count}</h1>
      <button onClick={() => dispatch(incrementAmount1000)}>
        Increment By 1000
      </button>
      <button onClick={() => dispatch(incrementAmount2000)}>
        Increment By 2000
      </button>
      <button onClick={() => dispatch(decrement)}>
        decrement By 500
      </button>
    </div>
  );
};

export default Counter;
