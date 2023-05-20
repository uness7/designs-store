import {createRoot} from "react-dom/client";
import './styles.css';
import Home from "./Pages/Home";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                    <Routes>
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
            </BrowserRouter>
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);