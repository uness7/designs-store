import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DashboardHeader from "../components/dashboardHeader";
import DesignsList from "../components/DesignsList"
import PaymentSection from "../components/PaymentSection";


const Dashboard = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <DashboardHeader />
            <DesignsList />
            <PaymentSection />
            <Footer />
        </>
    );
}

export default Dashboard;