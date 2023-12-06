import {useContext} from "react";
import {DataContext} from "../../../../store/dataContext";
import Button from "../../../ReusableComponents/Button";
import Card from "../../../ReusableComponents/Card";

export default function Account({accData, index, deleteDialogHandler}) {
  const dataCtx = useContext(DataContext);

  function changeUserHandler() {
    dataCtx.changeActiveUser(index);
  }

  return (
    <li className="relative">
      <button
        className="absolute z-10 right-1 top-1"
        onClick={() => {
          deleteDialogHandler(index);
        }}>
        <span
          className="material-symbols-outlined text-[1.2rem]  hover:opacity-80 hover:scale-90 active:scale-75"
          style={{fontVariationSettings: "'FILL' 0,'wght' 200,'GRAD' 0,'opsz' 24"}}>
          delete
        </span>
      </button>
      <Button
        onClick={changeUserHandler}
        className={`min-w-[128px] flex flex-col justify-center${
          !(dataCtx.activeUser === index) ? " opacity-70" : ""
        }`}>
        <p>{accData.userName}</p>
        <p>
          {dataCtx.currentCurrency}
          {accData.balance.toFixed(2)}
        </p>
      </Button>
    </li>
  );
}
