import React, { useReducer, useState } from "react";
import { reducer } from "../Reducer/Reducer";
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [addamount, setAddAmount] = useState("");
  const [reduceAmount, setReduceAmount] = useState("");
  const handdleAddAmount = () => {
    console.log(addamount);
    dispatch({ type: "Increment", payload: addamount });
    setAddAmount("");
  };
  const handdleReduceAmount = () => {
    dispatch({ type: "decrement", payload: reduceAmount });
    setReduceAmount("");
  };

  return (
    <div>
      <h1>Amount :{state.count}</h1>
      <input
        type="text"
        placeholder="Enter Amount for Adding"
        onChange={(e) => setAddAmount(e.target.value)}
        value={addamount}
      />
      <br />
      <br />
      <button onClick={handdleAddAmount}>Increment</button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Amount for Adding"
        onChange={(e) => setReduceAmount(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handdleReduceAmount}>decrement</button>
    </div>
  );
};

export default Counter;
