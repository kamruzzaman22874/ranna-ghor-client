import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
const Contact = () => {
    return (
        <div>
            <div className="py-36 bg-[#ff4a52] text-white">
                <div className="px-5 md:gap-20">

                    <div>
                        <h2 className="text-center text-3xl font-bold py-5">Contact</h2>
                        <h3 className="flex items-center justify-center gap-1"><Link to="/" className="hover:text-gray-500 flex items-center cursor-pointer gap-1"><FaHome /> Home</Link> <IoIosArrowForward /> Contact</h3>
                    </div>
                </div>
            </div >
            <div className="grid md:grid-cols-12 md:gap-20 my-20 gap-10">
                <div className="col-span-6  px-5">
                    <h2 className="text-2xl mb-2">Our Address</h2>
                    <span className="">
                        <hr className="w-20 relative top-0.5 border-[#ff4a52] border-2" />
                        <hr className="" />
                    </span>

                    <div className="space-y-3">
                        <p className="my-3">Korem ipsum dolor sitter amet consectetuer adipiscing elitter Curabt ur ugueque habitant morbi tristique.</p>
                        <div className="flex items-center gap-2">
                            <FaLocationDot className="bg-red-400 text-2xl font-bold text-white rounded-full w-10 h-10 p-2" />
                            <p>29 Street, Uttara City, Bangladesh #34 Road, House #10, Sector #06.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhone className="bg-red-400 text-2xl font-bold text-white rounded-full w-10 h-10 p-2" />
                            <p>+880198921421.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <BiLogoGmail className="bg-red-400 text-2xl font-bold text-white rounded-full w-10 h-10 p-2" />
                            <p>hossen2022jamal@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-6  px-5">
                    <h2 className="text-2xl mb-2">Send Us Message</h2>
                    <span className="">
                        <hr className="w-20 relative top-0.5 border-[#ff4a52] border-2" />
                        <hr className="" />
                    </span>

                    <div className="space-y-3 my-10">
                        <form>
                            <div className="flex gap-5">
                                <input className="border w-1/2 h-10 p-2 outline-none" type="text" placeholder="Name*" name="" id="" /> <br />
                                <input className="border w-1/2 p-2 outline-none" type="email" placeholder="Email*" name="" id="" />
                            </div>
                            <div>
                                <input className="border w-full p-2 my-5 outline-none" type="text" placeholder="Subject*" name="" id="" /> <br />
                            </div>
                            <textarea className="border w-full outline-none p-2" name="" placeholder="Subject*" id="" cols="30" rows="10"></textarea>
                            <input className="bg-[#FF4A52] px-8 py-4 text-white uppercase mt-16 " type="submit" value="Send Message" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

// className = "py-48  bg-red-800  bg-cover bg-center h-[300px]" style = {{ backgroundImage: `url(${bannerImg})` }}