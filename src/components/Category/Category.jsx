import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div className="py-20 bg-[#ff4a52] text-white">
            <div className="px-5 py-10 md:gap-20">
                <div>
                    <h2 className="text-center text-3xl font-bold py-5">Category Page</h2>
                    <h3 className="flex items-center justify-center gap-1"><Link to="/" className="hover:text-gray-500 flex items-center cursor-pointer gap-1"><FaHome /> Home</Link> <IoIosArrowForward /> Category</h3>
                </div>
                <h3 className="text-center my-10">Category Page Coming Soon.....</h3>
            </div>
        </div >
    );
};

export default Category;