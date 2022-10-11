import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { MantineProvider, Notification } from "@mantine/core";
import { MdWifiOff } from "react-icons/md";
import { useContext } from "react";
import AdminSettingsContext from "./AdminSettingsContext";
import '../../styles/admin/styles.css'
const AdimApp = () => {
    const { appearanceTheme } = useContext(AdminSettingsContext);

 

    return (
        <MantineProvider
            theme={{ colorScheme: appearanceTheme}}
            withGlobalStyles
            withNormalizeCSS
        >
            <div>
            <div className="adminApp" data-theme={appearanceTheme}>
                <SideBar/>
                <div className="adminAppContainer">
                    <Notification
                        className="popUpNotification"
                        title={<h3>No internect connection</h3>}
                        icon={<MdWifiOff />}
                        color={"red"}
                    >
                        <p>Your are not connected to the internet</p>
                    </Notification>
                    <TopBar />
                    <div className="adminAppContent">
                        <Outlet />
                    </div>
                </div>
            </div>
            </div>
        </MantineProvider>
    );
};

export default AdimApp;
