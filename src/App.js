import React from 'react';
import "./App.css";
import Counter from './components/Zustand/Counter';

function App() {
  const title = "Hello React";

  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
