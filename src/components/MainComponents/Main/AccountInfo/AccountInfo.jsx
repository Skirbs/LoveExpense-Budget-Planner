import {useContext} from "react";
import {DataContext} from "../../../../store/dataContext";

import Card from "../../../ReusableComponents/Card";
import BalanceManager from "./BalanceManager";
import MonthlyReport from "./MonthlyReport";

export default function AccountInfo() {
  const dataCtx = useContext(DataContext);
  const accountData = dataCtx.usersData[dataCtx.activeUser];

  return (
    <Card className="bg-green-925 w-10/12 overflow-hidden rounded-lg flex flex-col items-center gap-2 pb-3">
      <div className="w-full bg-green-900 flex flex-col justify-center items-center py-1">
        <h2 className="font-medium text-3xl">{accountData.userName}'s Balance</h2>
        <p className="text-lg">${accountData.balance.toFixed(2)}</p>
      </div>
      <MonthlyReport />
      <BalanceManager />
    </Card>
  );
}
