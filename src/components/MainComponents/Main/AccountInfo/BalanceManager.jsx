import {useContext, useRef} from "react";
import {DataContext} from "../../../../store/dataContext";

import Card from "../../../ReusableComponents/Card";
import Button from "../../../ReusableComponents/Button";
import RecordHistory from "./RecordHistory";
import RecordDialog from "../../Dialog/RecordDIalog";

export default function BalanceManager() {
  const dataCtx = useContext(DataContext);
  const accountData = dataCtx.usersData[dataCtx.activeUser];

  const recordDialog = useRef();

  function openRecordHandler() {
    recordDialog.current.Open();
  }

  return (
    <>
      <RecordDialog ref={recordDialog} />
      <Card className="w-11/12 py-2 flex flex-col justify-center items-center bg-green-900 rounded-lg">
        <Button onClick={openRecordHandler} opacityChange>
          + New Record
        </Button>
        <ul className="w-full flex flex-col items-center my-2 gap-1">
          {accountData.history.map((data) => {
            return (
              <RecordHistory
                key={data.key}
                type={data.type}
                date={data.date}
                desc={data.desc}
                amt={data.amt}
              />
            );
          })}

          <li className="w-11/12 px-5 py-1 flex justify-center items-center gap-3">
            <Button className="!p-1 flex items-center" opacityChange>
              <span className="material-symbols-outlined">chevron_left</span>
            </Button>
            <Button className="!p-1 flex items-center" opacityChange>
              <span className="material-symbols-outlined">chevron_Right</span>
            </Button>
          </li>
        </ul>
      </Card>
    </>
  );
}
