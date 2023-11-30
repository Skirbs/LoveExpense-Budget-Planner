import {useState, createContext, useReducer} from "react";

export const DataContext = createContext({users: [], darkMode: true});

function usersDataReducer(state, action) {
  let currentState = [...state];
  switch (action.type) {
    case "ADD_USER":
      currentState.unshift({
        userName: action.payload.userName,
        balance: 0,
        history: [],
        key: Math.random().toString(36).slice(2, -1),
      });
      localStorage.setItem("usersData", JSON.stringify(currentState));
      return currentState;
      break;
  }
  return state;
}

export default function DataContextComponent({children}) {
  /* [{name: str, 
    totalBalance: int, 
    history:[{
      type
      description
      date
      amount
    }]}]
  */

  const [usersData, usersDataDispatch] = useReducer(
    usersDataReducer,
    JSON.parse(localStorage.getItem("usersData")) || []
  );

  function addUser(userName) {
    usersDataDispatch({
      type: "ADD_USER",
      payload: {
        userName,
      },
    });
  }

  const dataContextVal = {usersData, addUser, darkMode: true};

  return <DataContext.Provider value={dataContextVal}>{children}</DataContext.Provider>;
}
