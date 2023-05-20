import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import DesignsList from "../components/DesignsList";
import Footer from "../components/Footer";
import PaymentSection from "../PaymentSection";


const Home = () => {
    return (
        <div className="text-violet-950">
            <Navbar />
            <HeroSection />
            <DesignsList />
            <PaymentSection />
            <Footer />
        </div>
    );
}

export default Home;