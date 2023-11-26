import Account from "./Account";
import AddAccount from "./AddAccount";
export default function AccountManager() {
  return (
    <div className="bg-green-925 w-11/12 py-3 px-2 rounded-b-lg flex flex-col items-center sm:items-start">
      <h2 className="font-medium text-lg">Accounts</h2>
      <ul className="flex flex-wrap items-center justify-center sm:justify-normal py-1 gap-2.5">
        <Account />
        <Account />
        <Account />
        <AddAccount />
      </ul>
    </div>
  );
}
