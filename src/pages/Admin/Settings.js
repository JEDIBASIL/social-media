import { Tabs } from "@mantine/core";
import SettingsNotification from "../../components/admin/SettingsNotification";
import AdminSettings from "../../components/admin/AdminSettings";
import AdminSecurity from "../../components/admin/AdminSecurity";
import GeneralSettings from "../../components/admin/GeneralSettings";
import {HiShieldCheck,HiBell,HiCog} from "react-icons/hi"
import {RiAdminFill} from "react-icons/ri"
const Settings = () => {
   
    return (
        <>
            <div className="settings">
                <Tabs orientation="vertical"  defaultValue="general-settings">
                    <Tabs.List position={"left"}>
                        <Tabs.Tab icon={<HiCog style={{fontSize:"22px"}} />} value="general-settings">
                            <h3>General</h3>
                        </Tabs.Tab>
                        <Tabs.Tab icon={<RiAdminFill style={{fontSize:"22px"}} />} value="admin-settings">
                            <h3>Admin</h3>
                        </Tabs.Tab>
                        <Tabs.Tab icon={<HiBell style={{fontSize:"22px"}} />} value="notification-settings">
                            <h3>Notification</h3>
                        </Tabs.Tab>
                        <Tabs.Tab icon={<HiShieldCheck style={{fontSize:"22px"}} />} value="security-settings">
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
