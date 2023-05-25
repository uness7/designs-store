import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import DashboardHeader from "../components/dashboardHeader";
import DesignsList from "../components/DesignsList"
import PaymentSection from "../components/PaymentSection";


const Dashboard = () => {
    return (
        <>
            <header className="bg-bg-headerImage">
                <Navbar />
            </header>
            <DashboardHeader />
            <DesignsList />
            <PaymentSection />
            <div className="flex flex-col justify-center items-center">
                <button className="text-2xl bg-black text-white px-10 text-center rounded-lg py-2">
                    <Link to="/logout">logout</Link>
                </button>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;