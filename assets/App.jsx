import {createRoot} from "react-dom/client";
import './styles.css';
import Home from "./Pages/Home";
const App = () => {
    return (
        <div>
            <Home />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);