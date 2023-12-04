import React from "react";
import "./App.css";

function App() {
  const title = "Hello React";

  return (
    <div className="App">
      <label>Search</label>
      <input placeholder="Search" />
      <img alt="profile" />
      {title}
    </div>
  );
}

export default App;
