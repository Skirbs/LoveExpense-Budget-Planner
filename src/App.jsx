import "./App.css";
import Navigation from "./components/MainComponents/Navigation/Navigation";
import Main from "./components/MainComponents/Main/Main";
import DataContextComponent from "./store/dataContext";

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
