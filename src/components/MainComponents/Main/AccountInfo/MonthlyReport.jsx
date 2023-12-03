import {useContext, useEffect, useRef, useState} from "react";
import {DataContext} from "../../../../store/dataContext";
import Card from "../../../ReusableComponents/Card";
import Select from "../../../ReusableComponents/Select";
import MonthlyBars from "./MonthlyBars";

const allMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let currentYear;
export default function MonthlyReport() {
  const dataCtx = useContext(DataContext);
  const yearRef = useRef();

  const availableYears = [];
  const userHistory = [...dataCtx.usersData[dataCtx.activeUser].history];
  userHistory.forEach((history) => {
    const year = history.date.slice(0, 4);
    if (!availableYears.includes(year)) {
      availableYears.unshift(year);
    }
  });
  availableYears.sort().reverse();

  let maxAmount = 0; /* highest income/expense total */

  const [monthlyValue, setMonthlyValue] = useState([]); /* value of each month */
  function changeYearHandler() {
    currentYear = yearRef.current.value;
    const filteredRecords = userHistory.filter((history) => {
      return currentYear === history.date.slice(0, 4);
    }); /* Records iltered by year */

    let filteredMonthsByType =
      []; /* Filter "filteredMonth" by type, if income then it will only show income records and vice versa */

    let filteredMonthlyValue = []; /* get combined values of all months */
    for (let i = 0; i < 12; i++) {
      const filteredMonth = filteredRecords.filter((record) => {
        return record.date.slice(5, 7) == i + 1;
      });
      const filteredMonthByType = filteredMonth.filter((record) => {
        return record.type === "+";
      });
      filteredMonthsByType.push(filteredMonthByType);

      const monthAmountSum = filteredMonthByType.reduce((acc, currentVal) => {
        return acc + currentVal.amt;
      }, 0);
      filteredMonthlyValue.push(monthAmountSum);
    }

    setMonthlyValue(filteredMonthlyValue);
  }

  useEffect(() => {
    changeYearHandler();
  }, []);

  maxAmount = Math.max(...monthlyValue);

  // Secondary Goal: onClick switchButton
  return (
    <Card className="w-fit px-4 py-2 flex flex-col justify-center items-center bg-green-900 rounded-lg mx-2">
      <div className="w-full flex justify-center items-center gap-2">
        <h3 className="font-medium text-2xl">Monthly Expenses / Income</h3>
        <button className="flex justify-center items-center">
          <span className="material-symbols-outlined">autorenew</span>
        </button>
        <Select
          ref={yearRef}
          onChange={changeYearHandler}
          className="bg-green-800 drop-shadow-md px-2 py-[0.05rem] !rounded-lg font-medium empty:hidden"
          defaultValue={currentYear}>
          {availableYears.map((year, index) => {
            return (
              <option value={year} key={index}>
                {year}
              </option>
            );
          })}
        </Select>
      </div>

      <div className="flex flex-wrap justify-center gap-4 ">
        {allMonths.map((month, index) => {
          return (
            <MonthlyBars
              month={month}
              fill={monthlyValue[index] / parseFloat(maxAmount)}
              key={index}
            />
          );
        })}
      </div>
    </Card>
  );
}
