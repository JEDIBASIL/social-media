import { useReducer, createContext, useEffect, useState } from "react";
const modalReducer = (state, { type, payload }) => {
    switch (type) {
        case "dark-theme":
            return { theme: (state.theme = "dark") };
        case "light-theme":
            return { theme: (state.theme = "light") };
        case "system-theme":
            return { theme: (state.theme = "system") };
        default: return state;
    }
};

let theme = "";
JSON.parse(localStorage.getItem("theme"))
    ? (theme = JSON.parse(localStorage.getItem("theme")))
    : (theme = "");

const AdminSettingsContext = createContext();
export const AdminSettingsContextProvider = ({ children }) => {
    const [settings, settingsDispatch] = useReducer(modalReducer, {
        theme: theme,
    });
    const [appearanceTheme, setAppearanceThemeTheme] = useState(null);
    const switchTheme = () => {
        if (settings.theme === "dark") {
            setAppearanceThemeTheme("dark");
        }
        if (settings.theme === "light") {
            setAppearanceThemeTheme("light");
        }
        if (settings.theme === "system") {
            let systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (systemTheme) {
                setAppearanceThemeTheme("dark");
            } else {
                setAppearanceThemeTheme("light");
            }
        }
    };
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(settings.theme));
        switchTheme;
    }, [settings, appearanceTheme]);

    return (
        <AdminSettingsContext.Provider value={{ settings, settingsDispatch,appearanceTheme }}>
            {children}
        </AdminSettingsContext.Provider>
    );
};

export default AdminSettingsContext;
