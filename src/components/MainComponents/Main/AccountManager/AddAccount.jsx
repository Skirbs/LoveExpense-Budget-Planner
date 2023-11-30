import {useRef} from "react";
import Button from "../../../ReusableComponents/Button";
import NewUserDialog from "../../Dialog/NewUserDialog";
export default function AddAccount() {
  const dialogRef = useRef();
  function openDialogHandler() {
    dialogRef.current.Open();
  }
  return (
    <>
      <NewUserDialog ref={dialogRef} />
      <li>
        <Button
          className="min-w-[128px] w-fit p-1 flex items-center"
          onClick={openDialogHandler}
          outline
          opacityChange>
          <p>+ Account Name</p>
        </Button>
      </li>
    </>
  );
}
