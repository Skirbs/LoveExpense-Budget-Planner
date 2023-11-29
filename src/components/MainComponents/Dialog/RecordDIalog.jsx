import {createPortal} from "react-dom";
import {useRef} from "react";
import Dialog from "./Dialog";
import Card from "../../ReusableComponents/Card";
import Input from "../../ReusableComponents/Input";
import Button from "../../ReusableComponents/Button";
import Select from "../../ReusableComponents/Select";

export default function RecordDialog() {
  const dialogRef = useRef();
  /* document.addEventListener("keydown", (e) => {
    if (e.key === "r") {
      dialogRef.current.Open();
    }
  }); */
  return createPortal(
    <Dialog ref={dialogRef} header="Balance Record">
      <form
        onSubmit={() => {}}
        className="flex flex-col items-center gap-1 mt-2 w-[80vw] sm:w-[350px]">
        <Card className="bg-green-800 w-full flex items-center justify-between px-2 py-1 rounded-xl">
          <label className="w-[5.5rem] text-center" htmlFor="record-type">
            Type
          </label>
          <Select
            id="setting-currency"
            className="bg-green-900 flex-1 h-[2rem] !rounded-lg font-medium">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </Select>
        </Card>

        <Card className="bg-green-800 w-full flex items-center justify-between px-2 py-1 rounded-xl">
          <label className="w-[5.5rem] text-center" htmlFor="record-desc">
            Description
          </label>
          <Input id="record-desc" className="bg-green-900 flex-1" type="text" maxLength="24" />
        </Card>

        <Card className="bg-green-800 w-fit flex items-center justify-between px-2 py-1 rounded-xl">
          <label className="w-fit text-center mr-2" htmlFor="record-amount">
            Amount
          </label>
          <Input
            id="record-amount"
            className="bg-green-900 w-24 appearance-none"
            type="number"
            step="0.01"
          />
        </Card>

        <Button className="!py-1 !px-2" type="submit" opacityChange>
          Record
        </Button>
      </form>
    </Dialog>,
    document.querySelector("#dialog")
  );
}
