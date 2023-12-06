import {createPortal} from "react-dom";
import {useRef, forwardRef, useContext} from "react";
import {DataContext} from "../../../store/dataContext";

import Dialog from "./Dialog";
import Card from "../../ReusableComponents/Card";
import Input from "../../ReusableComponents/Input";
import Button from "../../ReusableComponents/Button";
import Select from "../../ReusableComponents/Select";

export default forwardRef(function RecordDialog(props, ref) {
  const dataCtx = useContext(DataContext);
  const currentTime = new Date();

  const typeRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();
  const amountRef = useRef();

  function submitRecordHandler(e) {
    e.preventDefault();

    const typeValue = typeRef.current.value;
    const descValue = descRef.current.value;
    const dateValue = dateRef.current.value;
    const amountValue = parseFloat(amountRef.current.value);

    dataCtx.addBalanceRecord(typeValue, descValue, dateValue, amountValue);
    ref.current.Close();
  }

  return createPortal(
    <Dialog ref={ref} header="Balance Record">
      <form
        onSubmit={submitRecordHandler}
        className="flex flex-col items-center gap-1 mt-2 w-[80vw] sm:w-[350px]">
        <Card className="bg-green-800 w-full flex items-center justify-between px-2 py-1 rounded-xl">
          <label className="flex-1 xs:flex-none xs:w-[5.5rem] text-center" htmlFor="record-type">
            Type
          </label>
          <Select
            ref={typeRef}
            id="record-type"
            className="bg-green-900 w-36 xs:flex-1 h-[2rem] !rounded-lg font-medium">
            <option value="+">Income</option>
            <option value="-">Expense</option>
          </Select>
        </Card>

        <Card className="bg-green-800 w-full flex items-center justify-between px-2 py-1 rounded-xl">
          <label className="flex-1 xs:flex-none xs:w-[5.5rem] text-center" htmlFor="record-date">
            Date
          </label>
          <Input
            ref={dateRef}
            id="record-date"
            className="bg-green-900 w-36 xs:flex-1"
            type="date"
            defaultValue={`${currentTime.getFullYear()}-${currentTime.getMonth() + 1}-${currentTime
              .getDate()
              .toString()
              .padStart(2, "0")}`}
            required
          />
        </Card>

        <Card className="bg-green-800 w-full flex items-center justify-between px-2 py-1 rounded-xl">
          <label className="flex-1 xs:flex-none xs:w-[5.5rem] text-center" htmlFor="record-desc">
            Description
          </label>
          <Input
            ref={descRef}
            id="record-desc"
            className="bg-green-900 w-36 xs:flex-1"
            type="text"
            maxLength="24"
            required
          />
        </Card>

        <Card className="bg-green-800 w-full xs:w-fit flex items-center justify-between px-2 py-1 rounded-xl">
          <label className="flex-1 xs:flex-none xs:w-fit text-center mr-2" htmlFor="record-amount">
            Amount
          </label>
          <Input
            ref={amountRef}
            id="record-amount"
            className="bg-green-900 w-36 xs:flex-1 appearance-none"
            type="number"
            step="0.01"
            min="0.01"
            max="1000000000000"
            required
          />
        </Card>

        <Button className="!py-1 !px-2" type="submit" opacityChange>
          Record
        </Button>
      </form>
    </Dialog>,
    document.querySelector("#dialog")
  );
});
