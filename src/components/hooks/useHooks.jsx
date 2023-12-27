import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const useHooks = () => {
    return (
        <div>
            <h2 className="text-center text-3xl font-bold py-5">Contact</h2>
            <h3 className="flex items-center justify-center gap-1"><Link to="/" className="hover:text-gray-500 flex items-center cursor-pointer gap-1"><FaHome /> Home</Link> <IoIosArrowForward /> Contact</h3>
        </div>
    );
};

export default useHooks;