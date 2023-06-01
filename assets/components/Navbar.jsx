import { BsFillCartCheckFill, BsFillBookmarkHeartFill } from "react-icons/all";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const fetchRole = () => {
            try {
                fetch("/api/dashboard")
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.isAuth) {
                            setIsAuth(true);
                        }
                    });
            } catch (error) {
                console.log(error);
            }
        };
        fetchRole();
    }, []);

    return (
        <div className="p-4 text-lg text-center flex justify-between border-b-2 border-slate-100">
            <div className="w-2/3 flex flex-row justify-start space-x-4">
                <h2 className="ml-4 mt-2 text-2xl">
                    <Link to="/" className="font-bold">
                        WaiziDesigns
                    </Link>
                </h2>
                <SearchBar />
            </div>
            <div className="w-1/3 flex flex-row justify-between items-center space-x-2 px-4 cursor-pointer">
                <Link to="/cart" className="mt-1 text-2xl">
                    <BsFillCartCheckFill />
                </Link>
                <Link to="/saved" className="mt-1 text-2xl">
                    <BsFillBookmarkHeartFill />
                </Link>
                {isAuth ? (
                    <>
                        <Link to="/logout" className="mr-4">
                            Logout
                        </Link>

                        <Link to="/dashboard">
                            <span>Dashboard</span>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="mr-4">
                            Login
                        </Link>
                        <Link to="/signup" className="mr-4">
                            Signup
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
