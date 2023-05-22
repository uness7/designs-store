import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";


const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div>
                <button className={"text-7xl"}>
                    <Link to="/logout">logout</Link>
                </button>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;