import { FaFacebookF, FaPinterestP, FaDribbble, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
const Subscribe = () => {
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-5 my-10">
                <div className="bg-[#3B5998] flex justify-center p-4">
                    <div className="text-white  text-center">
                        <FaFacebookF className="ml-1 text-2xl" />
                        <span>0</span>
                        <p>Fans</p>
                    </div>
                </div>
                <div className="bg-[#1DA1F2] flex justify-center p-4">
                    <div className="text-white  text-center">
                        <FaTwitter className="ml-6 text-2xl" />
                        <span>0</span>
                        <p>Followers</p>
                    </div>
                </div>
                <div className="bg-[#BD081C] flex justify-center p-4">
                    <div className="text-white  text-center">
                        <FaPinterestP className="ml-6 text-2xl" />
                        <span>0</span>
                        <p>Followers</p>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-5 my-10 relative bottom-5">
                <div className="bg-[#EA4C89] flex justify-center p-4">
                    <div className="text-white  text-center">
                        <FaDribbble className="ml-1 text-2xl" />
                        <span>0</span>
                        <p>Fans</p>
                    </div>
                </div>
                <div className="bg-[#5851DB] flex justify-center p-4">
                    <div className="text-white  text-center">
                        <FaInstagram className="ml-6 text-2xl" />
                        <span>0</span>
                        <p>Followers</p>
                    </div>
                </div>
                <div className="bg-[#FF0000] flex justify-center p-4">
                    <div className="text-white  text-center">
                        <CiYoutube className="ml-6 text-2xl" />
                        <span>0</span>
                        <p>Followers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;