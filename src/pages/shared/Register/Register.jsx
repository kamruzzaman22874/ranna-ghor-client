import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser, userUpdateProfile } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        // const lastName = form.lastName.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // const confirm = form.confirm.value;
        const details = {
            name, email, photo, password,
        }
        console.log(details);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate("/")
                userUpdateProfile(name, photo)
                    .then(() => {
                        alert("User updated")

                    })
                    .catch(err => console.log(err));
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Account create successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
            })
            .catch(err => console.error(err));

    }
    return (
        <div>
            <div className="py-20 bg-[#ff4a52] text-white">
                <div className="px-5 py-10 md:gap-20">
                    <div>
                        <h2 className="text-center text-3xl font-bold py-5">Registration Page</h2>
                        <h3 className="flex items-center justify-center gap-1"><Link to="/" className="hover:text-gray-500 flex items-center cursor-pointer gap-1"><FaHome /> Home</Link> <IoIosArrowForward /> Registration</h3>
                    </div>
                </div>
            </div >
            <div className="my-20 px-20 bg-[#F2F2F2] w-11/12 mx-auto p-10 rounded">
                <h2 className="text-2xl  mb-2 font-semibold">Registration Form</h2>
                <span className="my-20">
                    <hr className="w-20 relative top-0.5 border-[#ff4a52] border-2" />
                    <hr className="" />
                </span>
                <form onSubmit={handleRegister} className="my-8">
                    <div className="md:flex gap-5 w-full">
                        <div className="md:w-1/2">
                            <div>
                                <label className="">Name</label> <br />
                                <input className="w-full py-3  px-3 my-5 outline-none" type="text" name="name" placeholder="Name" id="" />
                            </div>

                        </div>
                        {/* <div className="md:w-1/2">
                            <label htmlFor="">Last Name</label> <br />
                            <input className="w-full py-3 px-3  my-5 outline-none" type="text" name="lastName" placeholder="Last Name" id="" />
                        </div> */}
                        <div className="md:w-1/2">
                            <div>
                                <label className="">Email</label> <br />
                                <input className="w-full py-3 px-3 my-5 outline-none" type="text" name="email" placeholder="Email" id="" />
                            </div>

                        </div>
                    </div>
                    <div className="md:flex gap-5 w-full">

                        <div className="md:w-1/2">
                            <label htmlFor="">Photo Url</label> <br />
                            <input className="w-full py-3 px-3 my-5 outline-none" type="photo" name="photo" placeholder="Photo Url" id="" />
                        </div>
                        <div className="md:w-1/2">
                            <div>
                                <label className="">Password</label> <br />
                                <input className="w-full py-3 px-3 my-5 outline-none" type="password" name="password" placeholder="Password" id="" />
                            </div>

                        </div>
                    </div>
                    <div className="md:flex gap-5 w-full">

                        {/* <div className="md:w-1/2">
                            <label htmlFor="">Confirm Password</label> <br />
                            <input className="w-full py-3 px-3 my-5 outline-none" type="password" name="confirm" placeholder="Confirm password" id="" />
                        </div> */}
                    </div>
                    <div className="md:flex gap-5">
                        <input className="bg-[#ff4a52] px-6 py-3 mb-5 text-white cursor-pointer" type="submit" value="Signup" />
                        <Link to="/login"><p className="flex items-center gap-2 px-6 py-3 bg-[#111111] text-white">Do you have an account? Please Login <IoIosArrowForward /> </p></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;