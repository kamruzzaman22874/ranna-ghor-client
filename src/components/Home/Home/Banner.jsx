
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider1 from "../../../assets/Images/slider1.jpg"
import slider2 from "../../../assets/Images/slider2.jpg"
import slider3 from "../../../assets/Images/slider3.jpg"
import { FaStarHalfAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
const Banner = () => {
    return (
        <Carousel className="py-20" showArrows={true} >
            <div className="absolute w-full group">
                <img className="" src={slider1} />
                <div className="bg-[#FFFFFF] w-1/2 rounded p-2 bottom-28 mx-auto space-y-3 relative group-hover:bottom-64 duration-500">
                    <h6 className="text-[#F54951]">Rezala</h6>
                    <h2 className="text-2xl font-semibold">Sultan Dines Kacchi Recipes Sultan Kacchi</h2>
                    <div className="flex justify-center items-center text-yellow-600">
                        <FaStarHalfAlt />
                        <FaStarHalfAlt />
                        <FaStarHalfAlt />
                        <FaStarHalfAlt />
                        <FaStarHalfAlt />
                        <p className="ml-3">0/5</p>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Fugit iure cumque velit illo molestiae.</p>
                    <div className="bg-orange-50 w-2/3 mx-auto p-4 ">
                        <span className="flex items-center gap-3 pb-8">
                            <FcManager className="text-red-300" />
                            <p>by</p>
                            <MdOutlineWatchLater className="text-red-300" />
                            <p>55 Mins</p>
                            <FaComment className="text-red-300" />
                            <p>0</p>
                            <CiHeart className="text-red-300" />
                            <p>5 Likes</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className="absolute w-full group">
                <img className="" src={slider2} />
                <div className="bg-[#FFFFFF] w-1/2 rounded p-2 bottom-28 mx-auto space-y-3 relative group-hover:bottom-64 duration-500">
                    <h6 className="text-[#F54951]">Rezala</h6>
                    <h2 className="text-2xl font-semibold">Sultan Dines Kacchi Recipes Sultan Kacchi</h2>
                    <div className="flex justify-center items-center text-yellow-600">
                        <FaStarHalfAlt />
                        <FaStarHalfAlt />
                        <FaStarHalfAlt />
                        <FaStarHalfAlt />
                        <FaStarHalfAlt />
                        <p className="ml-3">0/5</p>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Fugit iure cumque velit illo molestiae.</p>
                    <div className="bg-orange-50 w-2/3 mx-auto p-4 ">
                        <span className="flex items-center gap-3 pb-8">
                            <FcManager className="text-red-300" />
                            <p>by</p>
                            <MdOutlineWatchLater className="text-red-300" />
                            <p>55 Mins</p>
                            <FaComment className="text-red-300" />
                            <p>0</p>
                            <CiHeart className="text-red-300" />
                            <p>5 Likes</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className="absolute w-full group">
                <img className="" src={slider3} />
                <div className="bg-[#FFFFFF] w-1/2 rounded p-2 bottom-28 mx-auto space-y-3 relative group-hover:bottom-64 duration-500">
                    <h6 className="text-[#F54951]">Rezala</h6>
                    <h2 className="text-2xl font-semibold">Sultan Dines Kacchi Recipes Sultan Kacchi</h2>
                    <div className="flex justify-center items-center text-yellow-600">
                        <FaStarHalfAlt />
                        <FaStarHalfAlt />
                        <FaStarHalfAlt />
                        <FaStarHalfAlt />
                        <FaStarHalfAlt />
                        <p className="ml-3">0/5</p>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Fugit iure cumque velit illo molestiae.</p>
                    <div className="bg-orange-50 w-2/3 mx-auto p-4 ">
                        <span className="flex items-center gap-3 pb-8">
                            <FcManager className="text-red-300" />
                            <p>by</p>
                            <MdOutlineWatchLater className="text-red-300" />
                            <p>55 Mins</p>
                            <FaComment className="text-red-300" />
                            <p>0</p>
                            <CiHeart className="text-red-300" />
                            <p>5 Likes</p>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <img src={slider3} />
            </div>
        </Carousel>
    );
};

export default Banner;