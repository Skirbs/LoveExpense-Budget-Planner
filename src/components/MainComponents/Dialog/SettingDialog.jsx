import {createPortal} from "react-dom";
import {forwardRef, useContext} from "react";
import {DataContext} from "../../../store/dataContext";
import Dialog from "./Dialog";
import Card from "../../ReusableComponents/Card";
import Select from "../../ReusableComponents/Select";

export default forwardRef(function SettingDialog(props, ref) {
  const dataCtx = useContext(DataContext);
  return createPortal(
    <Dialog ref={ref} header="Settings">
      <div className="flex flex-col items-center gap-2 mt-2 w-[80vw] sm:w-[400px]">
        <Card className="bg-green-800 w-full flex items-center justify-between px-2 py-1 rounded-xl">
          <label htmlFor="setting-currency">
            Currency Symbol{" "}
            <span className="text-green-950 text-sm font-bold">(No Conversion)</span>
          </label>
          <Select
            id="setting-currency"
            className="bg-green-900 w-[2rem] h-[2rem]"
            defaultValue={dataCtx.currentCurrency}
            onChange={(e) => {
              dataCtx.setCurrencyHandler(e.target.value);
            }}>
            <option value="$">$</option>
            <option value="£">£</option>
            <option value="€">€</option>
            <option value="¥">¥</option>
            <option value="₽">₽</option>
            <option value="₣">₣</option>
            <option value="₹">₹</option>
            <option value="₱">₱</option>
          </Select>
        </Card>

        <Card className="bg-green-800 w-full flex items-center justify-between px-2 py-1 rounded-xl">
          <label htmlFor="setting-max-record">Records per page</label>
          <Select
            id="setting-max-record"
            className="bg-green-900 w-[2rem] h-[2rem]"
            defaultValue={dataCtx.recordsPerPage}
            onChange={(e) => {
              dataCtx.recordsPerPageHandler(e.target.value);
            }}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </Select>
        </Card>

        {/*Dark mode setting (Someday?)
         <Card className="bg-green-800 w-full flex items-center justify-between gap-3 px-2 py-1 rounded-xl">
          <label htmlFor="dark-mode-setting">Dark Mode</label>
          <input
            id="dark-mode-setting"
            className="bg-green-900 appearance-none w-[2rem] h-[2rem] rounded-md drop-shadow-sm border-2 transition-all border-green-900 bg-transparent cursor-pointer checked:bg-green-900 checked:rounded-lg"
            type="checkbox"
            name=""
            defaultChecked
          />
        </Card>
         */}
      </div>
    </Dialog>,
    document.querySelector("#dialog")
  );
});
