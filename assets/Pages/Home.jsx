import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import DesignsList from "../components/DesignsList";
import Footer from "../components/Footer";
import PaymentSection from "../components/PaymentSection";
import {Outlet, Route, Routes} from "react-router-dom";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";

const Home = () => {
    return (
        <div className="text-gray-900">
            <Navbar />
            <HeroSection />
            <DesignsList />
            <PaymentSection />
            <Footer />
        </div>
    );
}

export default Home;