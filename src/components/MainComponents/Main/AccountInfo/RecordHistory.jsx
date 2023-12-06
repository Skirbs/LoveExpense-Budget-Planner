import Card from "../../../ReusableComponents/Card";
export default function RecordHistory({type, desc, date, amt, index, deleteDialogHandler}) {
  const recordDate = new Date(date);
  const formattedDate = `${recordDate.toLocaleString("default", {
    month: "short",
  })} ${recordDate.getDate()}, ${recordDate.getFullYear()}`;
  return (
    <li className="w-full flex justify-center">
      <Card className="w-8/12 sm:w-11/12 mx-3 px-5 py-1 flex flex-col sm:flex-row justify-between items-center bg-green-800 rounded-lg">
        <button
          className="absolute z-10 right-1 top-1"
          onClick={() => {
            deleteDialogHandler(index, amt);
          }}>
          <span
            className="material-symbols-outlined text-[1.3rem] hover:opacity-80 hover:scale-90 active:scale-75"
            style={{fontVariationSettings: "'FILL' 0,'wght' 200,'GRAD' 0,'opsz' 24"}}>
            delete
          </span>
        </button>
        <p className="w-full text-center sm:text-start font-medium text-lg break-words">{desc}</p>
        <div className="flex flex-col items-end mr-2">
          <p className="min-w-[90px] text-end w-full font-medium text-lg break-words">
            {type}
            {amt.toLocaleString("en-US", {minimumFractionDigits: 2})}
          </p>
          <p className="font-medium text-sm opacity-40">{formattedDate}</p>
        </div>
      </Card>
    </li>
  );
}
