import React from "react";
import "./App.css";
import { Counter } from "./components/Redux/Counter";
import { Provider } from "react-redux";
import { store } from "./components/Redux/store";

function App() {
  const title = "Hello React";

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
