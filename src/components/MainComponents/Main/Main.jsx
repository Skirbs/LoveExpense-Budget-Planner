import AccountInfo from "./AccountInfo/AccountInfo";
import AccountManager from "./AccountManager/AccountManager";
export default function Main() {
  return (
    <main className="flex flex-col items-center gap-4">
      <AccountManager />
      <AccountInfo />
    </main>
  );
}
