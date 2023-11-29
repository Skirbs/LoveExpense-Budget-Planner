import {useState, createContext} from "react";

export const DataContext = createContext({users: [], darkMode: true});

export default function DataContextComponent({children}) {
  const [usersData, setUsersData] = useState([]);
  return (
    <DataContext.Provider value={{users: usersData, darkMode: true}}>
      {children}
    </DataContext.Provider>
  );
}
