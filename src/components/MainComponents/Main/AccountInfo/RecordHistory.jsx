import Card from "../../../ReusableComponents/Card";
export default function RecordHistory({type, desc, date, amt}) {
  return (
    <li className="w-full flex justify-center">
      <Card className="w-11/12 mx-3 px-5 py-1 flex justify-between items-center bg-green-800 rounded-lg">
        <p className="font-medium text-lg">{desc}</p>
        <div className="flex flex-col justify-center items-center">
          <p className="font-medium text-lg">
            {type}
            {amt}
          </p>
          <p className="font-medium text-sm opacity-40">{date}</p>
        </div>
      </Card>
    </li>
  );
}
