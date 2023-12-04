import React, { useReducer } from "react";
import Context from "./Context";
import reducer from "./reducer";

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
