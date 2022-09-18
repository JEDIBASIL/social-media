import { IoBrowsers, IoBrowsersOutline } from "react-icons/io5";
import { Radio } from "@mantine/core";
import { useContext } from "react";
import AdminSettingsContext from "./AdminSettingsContext";
const GeneralSettings = () => {
    const {settingsDispatch} = useContext(AdminSettingsContext)
    const {settings} = useContext(AdminSettingsContext)

    return (
        <>
            <div className="generalSettingsContent">
                <h4>Appearance</h4>
                <div className="appearanceSettings">
                    <p>your dashboard adapt  it colour scheme based on your preferences. Choose which colour scheme you’d like to use for your dashboard.</p>
                    <div className="appearanceSettingsContainer">
                        <label className="card">
                            <div className='img'>
                                <IoBrowsers />
                            </div>
                            <div className="themeSwitch">
                                <Radio
                                defaultChecked={settings.theme === 'system'?true:false}
                                   onChange={()=>{
                                    settingsDispatch({type:"system-theme"})
                                }}
                                 value="system" name="theme" label={<h2>System</h2>}/>
                            </div>
                        </label>
                        <label className="card">
                            <div style={{color: 'gainsboro'}} className='img'>
                                <IoBrowsersOutline />
                            </div>
                            <div className="themeSwitch">
                                <Radio
                                defaultChecked={settings.theme === 'light'?true:false}
                                onChange={()=>{
                                    settingsDispatch({type:"light-theme"})
                                }}
                                 value="light" name="theme" label={<h2>Light</h2>}/>
                            </div>
                        </label>
                        <label className="card">
                            <div style={{color: 'slategray'}} className='img'>
                                <IoBrowsers />
                            </div>
                            <div className="themeSwitch">
                                <Radio
                                defaultChecked={settings.theme === 'dark'?true:false}
                                onChange={()=>{
                                    settingsDispatch({type:"dark-theme"})
                                }}
                                 value="dark" name="theme" label={<h2>Dark</h2>}/>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div className="generalSettingsContent">
                <h4>Languages</h4>
            </div>
        </>
    );
};

export default GeneralSettings;
