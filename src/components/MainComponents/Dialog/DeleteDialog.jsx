import {useRef, forwardRef, useContext} from "react";
import {createPortal} from "react-dom";
import {DataContext} from "../../../store/dataContext";
import Dialog from "./Dialog";
import Card from "../../ReusableComponents/Card";
import Input from "../../ReusableComponents/Input";
import Button from "../../ReusableComponents/Button";

export default forwardRef(function DeleteDialog({isAccount, deleteHandler}, ref) {
  const dataCtx = useContext(DataContext);
  const nameRef = useRef();

  function closeDialog() {
    ref.current.Close();
  }

  return createPortal(
    <Dialog ref={ref} header={`Delete ${isAccount ? "Account" : "Record"}?`}>
      <div className="flex flex-col">
        <h3 className="text-[1.1rem] w-fit sm:w-96 text-center p-1.5 mt-1 mb-2 rounded-md bg-green-800">
          Are you sure you want to delete the {isAccount ? "account" : "record"}? This cannot be
          undone.
        </h3>
        <div className="flex justify-center w-full gap-5">
          <Button className="min-w-[48px]" onClick={closeDialog} opacityChange>
            No
          </Button>
          <Button className="min-w-[48px]" onClick={deleteHandler} opacityChange>
            Yes
          </Button>
        </div>
      </div>
    </Dialog>,
    document.querySelector("#dialog")
  );
});
