import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";
import AdimApp from "./components/admin/AdimApp";
import Overview from "./pages/Admin/Overview";
import Notification from "./pages/Admin/Notification";
import Settings from "./pages/Admin/Settings";
import Users from "./pages/Admin/Users";
import Login from "./pages/Admin/auth/Login";
import Signup from "./pages/Admin/auth/Signup";
import UserProfile from "./pages/Admin/UserProfile";
import { useEffect,useState } from "react";
import { AdminSettingsContextProvider } from "./components/admin/AdminSettingsContext";
import UserApp from "./components/user/UserApp";

function App() {
    const [loggedin,setLoggedin] = useState(true);
    return (
        <AdminSettingsContextProvider>
            <Router>
                <div className="App">
                    <Routes>
                    
                            <Route path="/admin" element={<AdimApp />}>
                                <Route
                                    path="/admin"
                                    element={<Overview />}
                                ></Route>
                                <Route
                                    path="/admin/users"
                                    element={<Users />}
                                ></Route>
                                <Route
                                    path="/admin/notifications"
                                    element={<Notification />}
                                ></Route>
                                <Route
                                    path="/admin/settings"
                                    element={<Settings />}
                                ></Route>
                                <Route
                                    path="/admin/user-profile"
                                    element={<UserProfile />}
                                ></Route>
                            </Route>

                        <Route path="/auth/log-in" element={<Login />}></Route>
                        <Route path="/auth/sign-up" element={<Signup />}></Route>
                        <Route path="/" element={loggedin === true? <UserApp/> : <>hello world</>}></Route>

                    </Routes>
                </div>
            </Router>
        </AdminSettingsContextProvider>
    );
}

export default App;
