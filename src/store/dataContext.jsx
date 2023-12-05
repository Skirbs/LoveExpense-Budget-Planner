import {useState, createContext, useReducer} from "react";

export const DataContext = createContext({
  usersData: [],
  addUser: () => {},
  activeUser: 0,
  changeActiveUser: () => {},
  addBalanceRecord: () => {},
  deleteUser: () => {},
});

function usersDataReducer(state, action) {
  let currentState = [...state];
  function save() {
    localStorage.setItem("usersData", JSON.stringify(currentState));
  }

  switch (action.type) {
    case "ADD_USER":
      currentState.push({
        userName: action.payload.userName,
        balance: 0,
        history: [],
        key: Math.random().toString(36).slice(2, -1),
      });
      save();
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

      save();
      return currentState;
      break;
    case "DELETE_USER":
      currentState.splice(action.payload.index, 1);
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
  }

  function deleteUser(index) {
    usersDataDispatch({
      type: "DELETE_USER",
      payload: {index},
    });
  }

  const dataContextVal = {
    usersData,
    addUser,
    activeUser,
    changeActiveUser,
    addBalanceRecord,
    deleteUser,
  };

  return <DataContext.Provider value={dataContextVal}>{children}</DataContext.Provider>;
}
