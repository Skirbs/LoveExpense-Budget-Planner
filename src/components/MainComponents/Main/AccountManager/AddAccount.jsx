import Button from "../../../ReusableComponents/Button";

export default function AddAccount() {
  return (
    <li>
      <Button className="min-w-[128px] w-fit p-1 flex items-center" outline opacityChange>
        <p>+ Account Name</p>
      </Button>
    </li>
  );
}
