import Card from "../../../ReusableComponents/Card";
export default function RecordHistory() {
  return (
    <li className="w-full flex justify-center">
      <Card className="w-11/12 mx-3 px-5 py-1 flex justify-between items-center bg-green-800 rounded-lg">
        <p className="font-medium text-lg">Balance Change</p>
        <div className="flex flex-col justify-center items-center">
          <p className="font-medium text-lg">+100</p>
          <p className="font-medium text-sm opacity-40">May 10, 2006</p>
        </div>
      </Card>
    </li>
  );
}
