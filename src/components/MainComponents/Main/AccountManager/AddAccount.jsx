import Button from "../../../ReusableComponents/Button";
import NewUserDialog from "../../Dialog/NewUserDialog";
export default function AddAccount() {
  return (
    <>
      <NewUserDialog />
      <li>
        <Button className="min-w-[128px] w-fit p-1 flex items-center" outline opacityChange>
          <p>+ Account Name</p>
        </Button>
      </li>
    </>
  );
}
