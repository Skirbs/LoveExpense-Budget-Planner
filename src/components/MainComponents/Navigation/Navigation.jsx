import {useRef} from "react";
import LogoIcon from "../../../assets/Logo.svg";
import SettingDialog from "../Dialog/SettingDialog";
export default function Navigation() {
  const settingDialog = useRef();
  function openSettingHandler() {
    settingDialog.current.Open();
  }
  return (
    <>
      <SettingDialog ref={settingDialog} />
      <nav className="w-full bg-green-900 rounded-b-xl flex justify-between items-center px-4 py-2">
        <div className="flex items-center">
          <img src={LogoIcon} alt="Logo Icon" className="w-8 mr-2" />
          <h1 className="font-medium text-lg">LoveExpense</h1>
        </div>
        <button onClick={openSettingHandler} className="flex justify-between items-center">
          <span className="material-symbols-outlined text-green-975 text-3xl select-none">
            settings
          </span>
        </button>
      </nav>
    </>
  );
}
