import { Link as A } from "react-router-dom"
import {TfiPalette, TfiLock, TfiCommentAlt, TfiCamera, TfiBell, TfiUser} from "react-icons/tfi"
const SettingsSideBar = () => {
  return (
    <div className={"SettingsSideBar"}>
        <ul>
            <li><A className={"active"} to={"/"}> <TfiUser /> Account</A></li>
            <li><A to={"/"}> <TfiPalette /> Appearance</A></li>
            <li><A to={"/"}> <TfiCamera /> Post</A></li>
            <li><A to={"/"}> <TfiLock /> Privacy</A></li>
            <li><A to={"/"}> <TfiCommentAlt /> Chat</A></li>
            <li><A to={"/"}> <TfiBell /> Notification</A></li>
        </ul>
    </div>
  )
}

export default SettingsSideBar