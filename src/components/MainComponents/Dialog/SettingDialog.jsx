import {createPortal} from "react-dom";
import {useRef} from "react";
import Dialog from "./Dialog";
import Card from "../../ReusableComponents/Card";
import Select from "../../ReusableComponents/Select";

export default function SettingDialog() {
  const dialogRef = useRef();
  /* document.addEventListener("keydown", (e) => {
    if (e.key === "s") {
      dialogRef.current.Open();
    }
  }); */
  return createPortal(
    <Dialog ref={dialogRef} header="Settings">
      <div className="flex flex-col items-center gap-2 mt-2 w-[80vw] sm:w-[400px]">
        <Card className="bg-green-800 w-full flex items-center justify-between px-2 py-1 rounded-xl">
          <label htmlFor="setting-currency">
            Currency <span className="text-green-950 text-sm font-bold">(No Conversion)</span>
          </label>
          <Select id="setting-currency" className="bg-green-900 w-[2rem] h-[2rem]">
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
      </div>
    </Dialog>,
    document.querySelector("#dialog")
  );
}
