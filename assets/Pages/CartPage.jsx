import CartPanel from "../components/CartPanel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ErrorBoundary from "../components/ErrorBoundary";

const CartPage = () => {
    return (
        <div>
            <Navbar />
            <ErrorBoundary>
                <CartPanel />
            </ErrorBoundary>
            <Footer />
        </div>
    );
};

export default CartPage;
