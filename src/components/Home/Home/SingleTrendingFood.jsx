import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FcManager } from "react-icons/fc";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const SingleTrendingFood = ({ food }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    const { name, title, image, description } = food;
    return (
        <div className="card bg-base-100 ">
            <img data-aos="zoom-in-up" src={image} alt="Food" className="rounded-xl " />
            <div className="card-body items-center text-center space-y-2">
                <h2 className="card-title text-red-400">{name}</h2>
                <p className="text-xl font-semibold">{title}</p>
                <p>{description}</p>
                <div className="bg-orange-50  p-2  rounded ">
                    <span className="flex items-center gap-3 ">
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
        </div >
    );
};

export default SingleTrendingFood;