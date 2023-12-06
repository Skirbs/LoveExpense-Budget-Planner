import {useContext, useEffect, useRef, useState} from "react";
import {DataContext} from "../../../../store/dataContext";

import Card from "../../../ReusableComponents/Card";
import Button from "../../../ReusableComponents/Button";
import RecordHistory from "./RecordHistory";
import RecordDialog from "../../Dialog/RecordDIalog";

import DeleteDialog from "../../Dialog/DeleteDialog";

export default function BalanceManager() {
  const dataCtx = useContext(DataContext);
  const accountData = dataCtx.usersData[dataCtx.activeUser];
  const accountHistory = accountData.history;
  const [currentPagination, setCurrentPagination] = useState(0);

  const maxRecordPerPage = dataCtx.recordsPerPage;

  const recordDialog = useRef();

  const deleteDialog = useRef();
  const deleteSelectedRecord = useRef();
  const deleteSelectedRecordAmt = useRef();

  function openRecordHandler() {
    recordDialog.current.Open();
  }

  function deleteDialogHandler(recordIndex, recordAmount) {
    deleteSelectedRecordAmt.current = recordAmount;
    deleteSelectedRecord.current = recordIndex;
    deleteDialog.current.Open();
  }

  function deleteHandler() {
    dataCtx.deleteRecord(
      dataCtx.activeUser,
      deleteSelectedRecord.current,
      deleteSelectedRecordAmt.current
    );
    deleteDialog.current.Close();
  }

  function setPagination(nextPage) {
    setCurrentPagination((prev) => {
      return prev + (nextPage ? 1 : -1);
    });
  }

  useEffect(() => {
    setCurrentPagination(0);
  }, [accountData]);

  return (
    <>
      <DeleteDialog ref={deleteDialog} deleteHandler={deleteHandler} isAccount={false} />
      <RecordDialog ref={recordDialog} />
      <Card className="w-11/12 py-2 flex flex-col justify-center items-center bg-green-900 rounded-lg">
        <Button onClick={openRecordHandler} opacityChange>
          + New Record
        </Button>
        {accountHistory.length <= 0 ? (
          <h2 className="font-medium text-xl mt-1">Currently No Records</h2>
        ) : (
          <ul className="w-full flex flex-col items-center my-2 gap-1">
            {accountHistory
              .slice(
                maxRecordPerPage * currentPagination,
                maxRecordPerPage * (currentPagination + 1)
              )
              .map((data, index) => {
                return (
                  <RecordHistory
                    key={data.key}
                    type={data.type}
                    date={data.date}
                    desc={data.desc}
                    amt={data.amt}
                    index={index}
                    deleteDialogHandler={deleteDialogHandler}
                  />
                );
              })}

            <li className="w-11/12 px-5 py-1 flex justify-center items-center gap-3">
              {currentPagination <= 0 || (
                <Button
                  className="!p-1 flex items-center"
                  opacityChange
                  onClick={() => {
                    setPagination(false);
                  }}>
                  <span className="material-symbols-outlined">chevron_left</span>
                </Button>
              )}
              {maxRecordPerPage * (currentPagination + 1) > accountHistory.length - 1 || (
                <Button
                  className="!p-1 flex items-center"
                  opacityChange
                  onClick={() => {
                    setPagination(true);
                  }}>
                  <span className="material-symbols-outlined">chevron_Right</span>
                </Button>
              )}
            </li>
          </ul>
        )}
      </Card>
    </>
  );
}
