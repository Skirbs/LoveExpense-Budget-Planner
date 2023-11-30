import {createPortal} from "react-dom";
import {useRef} from "react";
import Dialog from "./Dialog";
import Card from "../../ReusableComponents/Card";
import Input from "../../ReusableComponents/Input";
import Button from "../../ReusableComponents/Button";
import Select from "../../ReusableComponents/Select";

export default function NewUserDialog() {
  const dialogRef = useRef();
  return createPortal(
    <Dialog ref={dialogRef} header="Create User">
      <form
        onSubmit={() => {}}
        className="flex flex-col items-center gap-1 mt-2 w-[80vw] sm:w-[350px]">
        <Card className="bg-green-800 w-full flex items-center justify-between px-2 py-1 rounded-xl">
          <label className="w-fit mr-2 text-center" htmlFor="new-user-name">
            Account Name
          </label>
          <Input id="new-user-name" className="bg-green-900 flex-1" type="text" maxLength="24" />
        </Card>

        <Button className="!py-1 !px-2" type="submit" opacityChange>
          Record
        </Button>
      </form>
    </Dialog>,
    document.querySelector("#dialog")
  );
}