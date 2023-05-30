import { createRoot } from "react-dom/client";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./Pages/Home";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";
import LogoutPage from "./Pages/LogoutPage";
import CartPage from "./Pages/CartPage";
import ProfileUpdatePage from "./Pages/ProfileUpdatePage";
import SavedDesignsPage from "./Pages/SavedDesignsPage";

import UserContext from "./Context/UserContext";

const App = () => {
    const userContext = useState(null);

    return (
        <div>
            <BrowserRouter>
                <UserContext.Provider value={userContext}>
                    <Routes>
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route
                            path="/dashboard/update-profile"
                            element={<ProfileUpdatePage />}
                        />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/saved" element={<SavedDesignsPage />} />
                        <Route path="/logout" element={<LogoutPage />} />
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
