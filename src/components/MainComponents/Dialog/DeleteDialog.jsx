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
      <div>
        <h3>delete {isAccount ? "Account" : "Record"}</h3>
        <Button onClick={closeDialog}>No</Button>
        <Button onClick={deleteHandler}>Yes</Button>
      </div>
    </Dialog>,
    document.querySelector("#dialog")
  );
});
