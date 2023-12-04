import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCount } from "./counterSlice";

export function Counter(props) {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
