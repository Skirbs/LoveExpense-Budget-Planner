export default function MonthlyBars({month}) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[30px] h-[100px] bg-green-900 p-0.5 rounded-md">
        <div className="w-full h-full bg-green-800 rounded-md"></div>
      </div>
      <p>{month}</p>
    </div>
  );
}
