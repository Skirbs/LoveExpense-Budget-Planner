import Button from "../../../ReusableComponents/Button";
import Card from "../../../ReusableComponents/Card";

export default function Account({data}) {
  return (
    <li>
      <Button className="min-w-[128px] flex flex-col justify-center">
        <p>{data.userName}</p>
        <p>${data.balance.toFixed(2)}</p>
      </Button>
    </li>
  );
}
