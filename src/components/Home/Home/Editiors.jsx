import { FaStarHalfAlt } from "react-icons/fa";
import img1 from "../../../assets/Images/editors1.jpg";
import img2 from "../../../assets/Images/editors2.jpg";
import img3 from "../../../assets/Images/editors3.jpg";
import "./Editors.css";

const Editiors = () => {
    return (
        <div className="px-5 my-5">
            <div>
                <h2 className="text-2xl mb-2">Editor's Choice</h2>
                <span className="">
                    <hr className="w-20 relative top-0.5 border-[#ff4a52] border-2" />
                    <hr className="" />
                </span>
            </div>

            <div className="grid md:grid-cols-3 gap-8 my-8">
                <img className="rounded w-full" src={img1} alt="" />
                <img className="rounded w-full" src={img2} alt="" />
                <img className="rounded w-full" src={img3} alt="" />
            </div>
        </div>
    );
};

export default Editiors;
