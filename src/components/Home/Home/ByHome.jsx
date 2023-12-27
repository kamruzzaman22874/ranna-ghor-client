
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
const ByHome = () => {
    return (
        <div className="">
            <Link className="fixed bottom-0 right-0 p-2" to="/">
                <FaHome className="text-white text-xl p-5 rounded-full bg-[#FF4A52]" />
            </Link>
        </div>
    );
};

export default ByHome;