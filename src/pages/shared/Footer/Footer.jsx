import { FaDribbble, FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import footerImg from "../../../assets/Images/logo-light.png"
import { CiYoutube } from "react-icons/ci";
const Footer = () => {
    return (
        <div className="bg-[#1B1D1F] min-h-max text-[#A2B0A2] py-20 ">
            <div className="flex justify-center">
                <img src={footerImg} alt="" />
            </div>
            <div className="md:flex justify-center">
                <div className="md:flex gap-5 justify-center my-10">
                    <div className="flex justify-center gap-2 p-4">
                        <FaFacebookF className="ml-6 text-2xl" />
                        <span>0</span>
                        <p>Fans</p>
                    </div>
                    <div className="flex justify-center gap-2 p-4">
                        <FaTwitter className="ml-6 text-2xl" />
                        <span>0</span>
                        <p>Followers</p>
                    </div>
                    <div className="flex justify-center gap-2 p-4">
                        <FaPinterestP className="ml-6 text-2xl" />
                        <span>0</span>
                        <p>Followers</p>
                    </div>

                    <div className="flex justify-center gap-2 p-4">
                        <FaDribbble className="ml-1 text-2xl" />
                        <span>0</span>
                        <p>Fans</p>
                    </div>
                    <div className=" flex justify-center gap-2 p-4">
                        <FaInstagram className="ml-6 text-2xl" />
                        <span>0</span>
                        <p>Followers</p>
                    </div>
                    <div className="flex justify-center gap-2 p-4">
                        <CiYoutube className="ml-6 text-2xl" />
                        <span>0</span>
                        <p>Followers</p>
                    </div>
                </div>
            </div>
            <p className="text-center">© 2020 Ranna. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;