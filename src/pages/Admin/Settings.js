import { Tabs } from "@mantine/core";
import { CgProfile } from "react-icons/cg";
import { Link as A } from "react-router-dom";
import SettingsNotification from "../../components/admin/SettingsNotification";
import AdminSettings from "../../components/admin/AdminSettings";
import AdminSecurity from "../../components/admin/AdminSecurity";
import { useReducer,useContext } from "react";

import { AdminSettingsContextProvider } from "../../components/admin/AdminSettingsContext";
import GeneralSettings from "../../components/admin/GeneralSettings";
const Settings = () => {
   
    return (
        <>
       
            <h2 className="heading">Settings</h2>

            <div className="settings">
                <Tabs defaultValue="general-settings">
                    <Tabs.List position={"left"}>
                        <Tabs.Tab value="general-settings">
                            <h3>General</h3>
                        </Tabs.Tab>
                        <Tabs.Tab value="admin-settings">
                            <h3>Admin</h3>
                        </Tabs.Tab>
                        <Tabs.Tab value="notification-settings">
                            <h3>Notification</h3>
                        </Tabs.Tab>
                        <Tabs.Tab value="security-settings">
                            <h3>Security</h3>
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="general-settings" pt="xs">
                        <div className="settingsContainer">
                            <h2>General</h2>
                            <GeneralSettings/>
                        </div>
                    </Tabs.Panel>

                    <Tabs.Panel value="admin-settings" pt="xs">
                        <div className="settingsContainer">
                            <h2>Admin</h2>
                            <AdminSettings />
                        
                        </div>
                    </Tabs.Panel>

                    <Tabs.Panel value="notification-settings" pt="xs">
                        <div className="settingsContainer">
                            <h2>Notification</h2>
                            <SettingsNotification />
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="security-settings" pt="xs">
                        <div className="settingsContainer">
                            <h2>Security</h2>
                           
                            <AdminSecurity />
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
          
        </>
    );
};

export default Settings;
