import {useContext, useRef, useState} from "react";
import {DataContext} from "../../../../store/dataContext";

import Card from "../../../ReusableComponents/Card";
import Account from "./Account";
import AddAccount from "./AddAccount";
import DeleteDialog from "../../Dialog/DeleteDialog";

export default function AccountManager() {
  const dataCtx = useContext(DataContext);

  const dialogRef = useRef();
  const deleteSelectedAcc = useRef(-1);

  function deleteDialogHandler(accountIndex) {
    deleteSelectedAcc.current = accountIndex;
    dialogRef.current.Open();
  }

  function deleteHandler() {
    dataCtx.deleteUser(deleteSelectedAcc.current);
    dialogRef.current.Close();
  }

  return (
    <>
      <DeleteDialog ref={dialogRef} deleteHandler={deleteHandler} isAccount />
      <Card className="bg-green-925 w-11/12 py-3 px-2 rounded-b-lg flex flex-col items-center sm:items-start">
        <h2 className="font-medium text-lg">Accounts</h2>
        <ul className="flex flex-wrap items-center justify-center sm:justify-normal py-1 gap-2.5">
          {dataCtx.usersData.map((data, index) => {
            return (
              <Account
                key={data.key}
                accData={data}
                index={index}
                deleteDialogHandler={deleteDialogHandler}
              />
            );
          })}
          <AddAccount />
        </ul>
      </Card>
    </>
  );
}
