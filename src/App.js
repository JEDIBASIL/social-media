import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import AdimApp from "./components/admin/AdimApp";
import Overview from "./pages/Admin/Overview";
import Notification from "./pages/Admin/Notification";
import Settings from "./pages/Admin/Settings";
import Users from "./pages/Admin/Users";
import Login from "./pages/Admin/auth/Login";
import Signup from "./pages/Admin/auth/Signup";
import UserProfile from "./pages/Admin/UserProfile";
import { useState, useEffect } from "react";
import { AdminSettingsContextProvider } from "./components/admin/AdminSettingsContext";
import UserApp from "./components/user/UserApp";
import Home from "./pages/users/Home";
import Activity from "./pages/users/Activity";
import Explore from "./pages/users/Explore";
import Chat from "./pages/users/Chat";
import Call from "./pages/users/Call";
import Profile from "./pages/users/Profile";
import Clips from "./pages/users/Clips";
import SettingsAndPrivacy from "./pages/users/SettingsAndPrivacy";

function App() {
    const [loggedin, setLoggedin] = useState(true);
    useEffect(() => {
        setLoggedin(true)
    }, [loggedin])
    return (
        <AdminSettingsContextProvider>
            <Router>
                <div className="App">
                    <Routes>

                        <Route path="/admin" element={<AdimApp />}>
                            <Route
                                path="/admin"
                                element={<Overview />}>
                            </Route>
                            <Route
                                path="/admin/users"
                                element={<Users />}>
                            </Route>
                            <Route
                                path="/admin/notifications"
                                element={<Notification />}>
                            </Route>
                            <Route
                                path="/admin/settings"
                                element={<Settings />}>
                            </Route>
                            <Route
                                path="/admin/user-profile"
                                element={<UserProfile />}>
                            </Route>
                        </Route>

                        <Route path="/auth/log-in" element={<Login />}></Route>
                        <Route path="/auth/sign-up" element={<Signup />}></Route>
                        <Route path="/" element={loggedin === true ? <UserApp /> : <>hello world</>}>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/activity" element={<Activity />}></Route>
                            <Route path="/explore" element={<Explore />}></Route>
                            <Route path="/chats" element={<Chat />}></Route>
                            <Route path="/call" element={<Call />}></Route>
                            <Route path="/clips" element={<Clips />}></Route>
                            <Route path="/profile" element={<Profile />}></Route>
                            <Route path="/settings-privacy" element={<SettingsAndPrivacy />}></Route>
                        </Route>

                    </Routes>
                </div>
            </Router>
        </AdminSettingsContextProvider>
    );
}

export default App;
