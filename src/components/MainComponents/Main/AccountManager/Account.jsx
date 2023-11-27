import Button from "../../../ReusableComponents/Button";
import Card from "../../../ReusableComponents/Card";

export default function Account() {
  return (
    <li>
      <Button className="min-w-[128px] flex flex-col justify-center">
        <p>Account Name</p>
        <p>$100.00</p>
      </Button>
    </li>
  );
}
