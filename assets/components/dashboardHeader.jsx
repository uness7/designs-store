
import {Link} from "react-router-dom";

const DashboardHeader = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-slate-500 h-96 mx-5 border-2 border-white rounded-xl">
            <Link to="/dashboard/user-profile">
                <button className="bg-black text-white px-20 py-2 rounded   mr-3">
                    Profile                
                </button>
            </Link>
            </div>
        </div>
    );
}

export default DashboardHeader;