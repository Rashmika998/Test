import React from "react";
import "./App.css";
import Parent from "./components/Hooks/Parent";
import Provider from "./components/Hooks/Provider";
import Component from "./components/Hooks/Component";

function App() {
  const title = "Hello React";

  return (
    <div className="App">
      <Parent/>
      {/* <Provider>
        <Component/>
      </Provider> */}
    </div>
  );
}

export default App;
