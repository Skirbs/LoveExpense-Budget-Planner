import Card from "../../../ReusableComponents/Card";
import Button from "../../../ReusableComponents/Button";
import RecordHistory from "./RecordHistory";
import SettingDialog from "../../Dialog/SettingDialog";

export default function BalanceManager() {
  return (
    <>
      <SettingDialog />
      <Card className="w-11/12 py-2 flex flex-col justify-center items-center bg-green-900 rounded-lg">
        <Button opacityChange>+ New Record</Button>
        <ul className="w-full flex flex-col items-center my-2 gap-1">
          <RecordHistory />
          <RecordHistory />
          <RecordHistory />
          <RecordHistory />
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
