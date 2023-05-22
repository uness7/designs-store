import {createRoot} from "react-dom/client";
import './styles.css';
import Home from "./Pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";
import LogoutPage from "./Pages/LogoutPage";
import logout from "./Pages/LogoutPage";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                    <Routes>
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/dashboard" element={<Dashboard />} />
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