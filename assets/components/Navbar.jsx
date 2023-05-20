import {BsFillCartCheckFill,  BsFillBookmarkHeartFill} from 'react-icons/all'
import searchBar from "./SearchBar";
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
            <div className="p-4 text-lg text-center flex flex-row justify-between border-b-2 border-slate-100">
            <div className="w-2/3 flex flex-row justify-start space-x-4">
                <h2 className="ml-4 mt-2 text-2xl">
                    <Link to='/' className="font-bold">DesignsY</Link>
                </h2>
                <SearchBar />
            </div>
            <div className="w-1/3 flex flex-row justify-between items-center space-x-2 px-4 cursor-pointer">
                <a className="mt-1 text-2xl">
                    <BsFillCartCheckFill />
                </a>
                <a className="mt-1 text-2xl">
                    <BsFillBookmarkHeartFill />
                </a>
                <a>Sell your art</a>
                <a href="/login" className="mr-4">Login</a>
                <a href="/signup" className="mr-4">Signup</a>
            </div>
        </div>
    );
}

export default Navbar;