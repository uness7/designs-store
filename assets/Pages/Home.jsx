import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import DesignsList from "../components/DesignsList";
import Footer from "../components/Footer";


const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <DesignsList />
            <Footer />
        </div>
    );
}

export default Home;