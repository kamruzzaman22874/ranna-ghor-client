import { useContext, useRef } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
const Login = () => {
    const { loginUser, googleSignUp, resetPassword } = useContext(AuthContext)
    const navigate = useNavigate()
    const emailRef = useRef()
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const password = form.password.value;
        loginUser(username, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate("/")
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Login successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
            })
            .catch(err => console.error(err));


    }
    const handleGoogleSingIn = () => {
        googleSignUp()
            .then(() => {
                alert("successfull")
                navigate("/")

            })
            .catch(err => console.error(err));
    }


    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            Swal.fire("Please Provide your email!");
            return;
        }
        resetPassword(email)
            .then(() => {
                Swal.fire("Please check your email!");
                return;
            })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <div className="py-20 bg-[#ff4a52] text-white">
                <div className="px-5 py-10 md:gap-20">
                    <div>
                        <h2 className="text-center text-3xl font-bold py-5">Login Page</h2>
                        <h3 className="flex items-center justify-center gap-1"><Link to="/" className="hover:text-gray-500 flex items-center cursor-pointer gap-1"><FaHome /> Home</Link> <IoIosArrowForward /> Login</h3>
                    </div>
                </div>
            </div >
            <div className="my-20 px-20 bg-[#F2F2F2] w-11/12 mx-auto p-10 rounded">
                <h2 className="text-2xl  mb-2 font-semibold">Login Form</h2>
                <span className="my-20">
                    <hr className="w-20 relative top-0.5 border-[#ff4a52] border-2" />
                    <hr className="" />
                </span>

                <form onSubmit={handleLogin} className="my-8">
                    <div className="md:flex gap-5 w-full">
                        <div className="md:w-1/2">
                            <div>
                                <label className="">Username</label> <br />
                                <input ref={emailRef} className="w-full py-3 px-3 mt-5 outline-none" type="text" name="username" placeholder="username" id="" />
                            </div>

                        </div>
                        <div className="md:w-1/2">
                            <label htmlFor="">Password</label> <br />
                            <input className="w-full py-3 px-3 mt-5 outline-none" type="password" name="password" placeholder="password" id="" />
                            <Link onClick={handleResetPassword}>
                                <p className="my-3 text-[#ff4a52]">Lost your password?</p>
                            </Link>
                        </div>
                    </div>
                    <div className="md:flex gap-5">
                        <input className="bg-[#ff4a52] px-6 py-3 mb-5 text-white cursor-pointer" type="submit" value="Login" />
                        <Link onClick={handleGoogleSingIn}><p className="flex items-center gap-2 px-6 py-3 bg-[#1DA1F2] text-white"> Signin With <FcGoogle className="text-2xl" /> <IoIosArrowForward /> </p></Link>
                        <Link to="/register"><p className="flex items-center gap-2 px-6 py-3 bg-[#111111] text-white">Create an Account <IoIosArrowForward /> </p></Link>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;