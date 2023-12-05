import {useRef, forwardRef, useContext} from "react";
import {createPortal} from "react-dom";
import {DataContext} from "../../../store/dataContext";
import Dialog from "./Dialog";
import Card from "../../ReusableComponents/Card";
import Input from "../../ReusableComponents/Input";
import Button from "../../ReusableComponents/Button";

export default forwardRef(function DeleteDialog({deleteHandler}, ref) {
  const dataCtx = useContext(DataContext);
  const nameRef = useRef();

  /* deleteHandler = (key, index) => {
    console.log("Test");
  }; */

  return createPortal(
    <Dialog ref={ref} header={`Delete ${true ? "Account" : "Record"}?`}>
      <div>
        <h3>delete{/*  {name}? */}</h3>
        <Button>No</Button>
        <Button onClick={deleteHandler}>Yes</Button>
      </div>
    </Dialog>,
    document.querySelector("#dialog")
  );
});
