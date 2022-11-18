import { Link as A } from "react-router-dom"
import {IoMdPerson, IoMdColorPalette, IoMdPhotos, IoMdNotifications, IoMdLock, IoMdChatboxes} from "react-icons/io"
const SettingsSideBar = () => {
  return (
    <div className={"SettingsSideBar"}>
        <ul>
            <li><A className={"active"} to={"/"}> <IoMdPerson /> Account</A></li>
            <li><A to={"/"}> <IoMdColorPalette /> Appearance</A></li>
            <li><A to={"/"}> <IoMdPhotos /> Post</A></li>
            <li><A to={"/"}> <IoMdLock /> Privacy</A></li>
            <li><A to={"/"}> <IoMdChatboxes /> Chat</A></li>
            <li><A to={"/"}> <IoMdNotifications /> Notification</A></li>
        </ul>
    </div>
  )
}

export default SettingsSideBar