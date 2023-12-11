import {Suspense} from "react";
import "./App.css";
import {DataComponent, Loading} from "./components/Suspense/DataComponent";

function App() {
  const title = "Hello React";

  return (
    <>
      <Suspense fallback={<Loading/>}>
        <DataComponent/>
      </Suspense>
    </>
  );
}


export default App;
