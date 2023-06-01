import { createRoot } from "react-dom/client";
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
import ProfilePage from "./Pages/ProfilePage";

const App = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/dashboard/update-user-profile" element={<ProfileUpdatePage />}/>
                    <Route path="/dashboard/user-profile" element={<ProfilePage />}/>
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/saved" element={<SavedDesignsPage />} />
                    <Route path="/logout" element={<LogoutPage />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
