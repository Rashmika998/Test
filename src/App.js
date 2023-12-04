import React from 'react';
import "./App.css";
import withUpperCase from './components/HOC/withUpperCase';
import DisplayText from './components/HOC/DisplayText';

function App() {
  const title = "Hello React";
  const DisplayTextWithUpperCase = withUpperCase(DisplayText);

  return (
    <div className="App">
      <DisplayTextWithUpperCase text="Hello, HOC!" />
    </div>
  );
}

export default App;
