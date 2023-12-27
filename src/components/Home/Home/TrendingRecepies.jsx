import trendingFood from "../../../assets/Images/trnding-food.jpg"
import aboutImg from "../../../assets/Images/about.jpg"
import signatureImg from "../../../assets/Images/signature.png"
import figureImg from "../../../assets/Images/figure1.jpg"
import { FaStarHalfAlt } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { MdOutlineWatchLater } from "react-icons/md";
import Subscribe from "./Subscribe";
import TrendingFood from "./TrendingFood";
import LatestRecepie from "./LatestRecepie";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const TrendingRecepies = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <div className="grid md:grid-cols-12 px-5 md:gap-20 my-5">
            <div className="md:col-span-7">
                <div className="">
                    <h2 className="text-2xl mb-2">Trending Recipes</h2>
                    <span className="">
                        <hr className="w-20 border-[#ff4a52] border-2" />
                        <hr className="" />
                    </span>
                    <div className="my-5">
                        <img data-aos="zoom-in" className="rounded h-[500px] hover:rotate-2 duration-75" src={trendingFood} alt="" />
                    </div>
                    <div className="text-center space-y-5">
                        <h2 className="text-[#ff4a52]">Salad</h2>
                        <h1 className="text-2xl">Lemon Dijon Vina igrette Kale Quinoa, and</h1>
                        <div className="flex justify-center items-center">
                            <FaStarHalfAlt />
                            <FaStarHalfAlt />
                            <FaStarHalfAlt />
                            <FaStarHalfAlt />
                            <FaStarHalfAlt />
                            <p className="ml-3">0/5</p>
                        </div>
                        <p>The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, and cooked slowly on a vertical rotisserie. As the outer layers of the meat cooks, it’s shaved off and served in a pita or other flatbread with vegetables</p>
                        <span className="flex justify-center items-center gap-3 w-1/3 mx-auto p-3 rounded bg-orange-50 my-10">
                            <MdOutlineWatchLater className="text-red-500" />
                            <p>55 Mins</p>
                            <FcManager className="text-red-500" />
                            <p>by</p>
                        </span>
                    </div>
                </div>
                <TrendingFood />
                <img className="rounded h-[120px] mt-10" src={figureImg} alt="" />
            </div>
            <div className="col-span-5">
                <div className="grid">
                    <h2 className="text-2xl mb-2">About Me</h2>
                    <span>
                        <hr className="w-20 border-[#ff4a52] border-2" />
                        <hr className="" />
                    </span>
                    <div className="my-10 md:px-8 w-full">
                        <img className="w-full" src={aboutImg} alt="" />
                        <div className="flex justify-center">
                            <img className="ml-10 py-5" src={signatureImg} alt="" />
                        </div>
                        <p className="text-center text-lg">Fusce mauris auctor ollicituder teary iner hendrerit risusey aeenean rauctor mauris pibus doloer.</p>
                    </div>
                </div>
                <div className="grid mt-10">
                    <h2 className="text-2xl mb-2">Subscribe & Follow</h2>
                    <span>
                        <hr className="w-20 top-0.5 relative border-[#ff4a52] border-2" />
                        <hr className="" />
                        <div>
                            <Subscribe />
                            <LatestRecepie />
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TrendingRecepies;