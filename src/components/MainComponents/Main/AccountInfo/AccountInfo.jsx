import {useContext} from "react";
import {DataContext} from "../../../../store/dataContext";

import Card from "../../../ReusableComponents/Card";
import BalanceManager from "./BalanceManager";
import MonthlyReport from "./MonthlyReport";

export default function AccountInfo() {
  const dataCtx = useContext(DataContext);
  const accountData = dataCtx.usersData[dataCtx.activeUser];

  function AccountInfoMain() {
    return (
      <>
        <div className="w-full bg-green-900 flex flex-col justify-center items-center py-1">
          <h2 className="font-medium text-3xl">{accountData.userName}</h2>
          <p className="text-lg">
            {dataCtx.currentCurrency}
            {accountData.balance.toFixed(2)}
          </p>
        </div>
        <MonthlyReport />
        <BalanceManager />
      </>
    );
  }

  return (
    <Card className="bg-green-925 w-10/12 overflow-hidden rounded-lg flex flex-col items-center gap-2 py-3">
      {accountData ? (
        <AccountInfoMain />
      ) : (
        <h2 className="font-medium text-2xl">No Account Selected</h2>
      )}
    </Card>
  );
}
