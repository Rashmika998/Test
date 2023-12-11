import "./App.css";
import { createPortal } from "react-dom";
function App() {
  const title = "Hello React";

  return (
    <div style={{ border: '2px solid black' }}>
    <p>This child is placed in the parent div.</p>
    {createPortal(
      <p>This child is placed in the document body.</p>,
      document.body
    )}
  </div>
  );
}


export default App;
