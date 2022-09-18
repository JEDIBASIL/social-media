import { Switch } from "@mantine/core";
const SettingsNotification = () => {
    return (
        <>
            <div className="notificationSettingsContent">
                <label for="notify">Notify when a user sign up</label>
                <Switch size="md" onLabel="ON" offLabel="OFF" id="notify" />
            </div>
            <div className="notificationSettingsContent">
                <label for="notify">Notify when an admin logs in</label>
                <Switch  size="md" onLabel="ON" offLabel="OFF" id="notify" />
            </div>
            <div className="notificationSettingsContent">
                <label for="notify">Notify when a user forgets password</label>
                <Switch size="md" onLabel="ON" offLabel="OFF" id="notify" />
            </div>
            <div className="notificationSettingsContent">
                <label for="notify">Notify when an admin forgets password</label>
                <Switch size="md" onLabel="ON" offLabel="OFF" id="notify" />
            </div>
        </>
    );
};

export default SettingsNotification;
