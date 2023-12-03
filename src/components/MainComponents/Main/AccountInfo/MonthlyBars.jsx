export default function MonthlyBars({month, fill}) {
  const value = Math.round(fill * 10000) / 100;
  return (
    <div className="flex flex-col items-center">
      <div className="w-[30px] h-[100px] bg-green-925 border-2 border-green-950 overflow-hidden rounded-full relative">
        <div style={{height: `${value}%`}} className="monthly-bar"></div>
      </div>
      <p>{month}</p>
    </div>
  );
}
