import React, { useContext } from "react";
import MyContext from "./Context";

const Component = () => {
  const { state, dispatch } = useContext(MyContext);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default Component;
