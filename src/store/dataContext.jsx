import {useState, createContext, useReducer} from "react";

export const DataContext = createContext({usersData: [], darkMode: true, activeUser: 0});

function usersDataReducer(state, action) {
  let currentState = [...state];
  switch (action.type) {
    case "ADD_USER":
      currentState.push({
        userName: action.payload.userName,
        balance: 0,
        history: [],
        key: Math.random().toString(36).slice(2, -1),
      });
      localStorage.setItem("usersData", JSON.stringify(currentState));
      return currentState;
      break;

    case "ADD_RECORD":
      const {userIndex, type, desc, date, amt} = action.payload;
      currentState[userIndex].history.unshift({
        type,
        desc,
        date,
        amt,
        key: Math.random().toString(36).slice(2, -1),
      });

      type === "+"
        ? (currentState[userIndex].balance += amt)
        : (currentState[userIndex].balance -= amt);

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
  const [activeUser, setActiveUser] = useState(0);

  if (usersData.length <= activeUser && activeUser > 0) {
    setActiveUser((prev) => {
      return prev - 1;
    });
  }

  function addUser(userName) {
    usersDataDispatch({
      type: "ADD_USER",
      payload: {
        userName,
      },
    });
  }

  function changeActiveUser(userIndex) {
    setActiveUser(userIndex);
  }

  function addBalanceRecord(type, desc, date, amt) {
    usersDataDispatch({
      type: "ADD_RECORD",
      payload: {
        userIndex: activeUser,
        type,
        desc,
        date,
        amt,
      },
    });
    /* usersDataDispatch({
      type: "h",
      payload: {
        userName: "aaaaaaaaaaaaaa",
      },
    }); */
  }

  const dataContextVal = {usersData, addUser, activeUser, changeActiveUser, addBalanceRecord};

  return <DataContext.Provider value={dataContextVal}>{children}</DataContext.Provider>;
}
