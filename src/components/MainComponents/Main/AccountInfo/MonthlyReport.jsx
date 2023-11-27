import MonthlyBars from "./MonthlyBars";

export default function MonthlyReport() {
  return (
    <>
      <div className="w-full flex justify-center items-center gap-2">
        <h3 className="font-medium text-2xl">Monthly Expenses / Income</h3>
        <button className="flex justify-center items-center">
          <span className="material-symbols-outlined">autorenew</span>
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 ">
        <MonthlyBars month="Jan" />
        <MonthlyBars month="Feb" />
        <MonthlyBars month="Mar" />
        <MonthlyBars month="Apr" />
        <MonthlyBars month="May" />
        <MonthlyBars month="Jun" />
        <MonthlyBars month="Jul" />
        <MonthlyBars month="Aug" />
        <MonthlyBars month="Sep" />
        <MonthlyBars month="Oct" />
        <MonthlyBars month="Dec" />
      </div>
    </>
  );
}
