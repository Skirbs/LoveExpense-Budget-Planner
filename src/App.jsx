import "./App.css";
import Navigation from "./components/MainComponents/Navigation/Navigation";
import Main from "./components/MainComponents/Main/Main";
import DataContextComponent from "./store/dataContext";
import {useEffect, useReducer, useState} from "react";

function App() {
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
