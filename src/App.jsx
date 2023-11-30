import "./App.css";
import Navigation from "./components/MainComponents/Navigation/Navigation";
import Main from "./components/MainComponents/Main/Main";
import DataContextComponent from "./store/dataContext";
import {useEffect, useReducer, useState} from "react";

function App() {
  /* ForceUpdate fixes bugs for refs */
  const [forceUpdate, setForceUpdate] = useState(true);
  useEffect(() => {
    setForceUpdate(false);
  }, []);

  return (
    <>
      <DataContextComponent>
        <Navigation />
        <Main />
      </DataContextComponent>
    </>
  );
}

export default App;
