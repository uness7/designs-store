import {createRoot} from "react-dom/client";
import './styles.css';
const App = () => {
    return (
        <div className="text-6xl text-center">
            <h1 className="font-bold underline">from app.jsx</h1>
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);