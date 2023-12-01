import {useContext} from "react";
import {DataContext} from "../../../../store/dataContext";
import Button from "../../../ReusableComponents/Button";
import Card from "../../../ReusableComponents/Card";

export default function Account({accData, index}) {
  const dataCtx = useContext(DataContext);

  function changeUserHandler() {
    dataCtx.changeActiveUser(index);
  }
  return (
    <li>
      <Button
        onClick={changeUserHandler}
        className={`min-w-[128px] flex flex-col justify-center${
          !(dataCtx.activeUser === index) ? " opacity-70" : ""
        }`}>
        <p>{accData.userName}</p>
        <p>${accData.balance.toFixed(2)}</p>
      </Button>
    </li>
  );
}
