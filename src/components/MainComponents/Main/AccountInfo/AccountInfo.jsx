import Card from "../../../ReusableComponents/Card";
import BalanceManager from "./BalanceManager";
import MonthlyReport from "./MonthlyReport";

export default function AccountInfo() {
  return (
    <Card className="bg-green-925 w-10/12 overflow-hidden rounded-lg flex flex-col items-center gap-2 pb-3">
      <div className="w-full bg-green-900 flex flex-col justify-center items-center py-1">
        <h2 className="font-medium text-3xl">Account Name's Balance</h2>
        <p className="text-lg">$100.00</p>
      </div>
      <MonthlyReport />
      <BalanceManager />
    </Card>
  );
}
