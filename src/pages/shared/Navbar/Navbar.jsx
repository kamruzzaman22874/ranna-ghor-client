import { Link } from "react-router-dom";
import ListItem from "../../../components/ListItem/ListItem";
import img from "../../../assets/Images/logo-dark.png"
import { useContext, useState } from "react";
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid'
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const [isOpen, setIsOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Category', path: '/category' },
        { id: 3, name: 'Recipes', path: '/recipes' },
        { id: 4, name: 'Pages', path: '/pages' },
        { id: 5, name: 'Blog', path: '/blog' },
        { id: 6, name: 'Contact', path: '/contact' }
    ];

    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Signout successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <nav className="py-3 bg-[#fff]   font-semibold fixed z-10 w-full max-w-7xl mx-auto">
            <div className="md:hidden px-12" onClick={() => setIsOpen(!isOpen)}>
                {
                    isOpen ? <XCircleIcon className="h-10 w-10 text-blue-500 text-3xl" /> : <Bars3Icon className="h-10 w-10 text-blue-500 text-xl" />
                }
            </div>
            <div className={`md:flex px-10  justify-between absolute md:static duration-700 ${isOpen ? "left-5" : "-left-96"}`}>
                <ul className="md:flex text-white md:text-black ">
                    {routes.map(route => <ListItem
                        key={route.id}
                        route={route}
                    ></ListItem>)}
                </ul>
                <div className="hidden md:block">
                    <img className="text-white" src={img} alt="" />
                </div>
                {
                    user ? <><div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full tooltip tooltip-bottom tooltip-secondary">
                                <img alt="User Photo" src={user?.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    {user?.displayName}
                                </a>
                            </li>
                            <li><a onClick={handleSignOut}>Logout</a></li>
                        </ul>
                    </div></> :

                        <div className="mt-5 text-white md:text-black hover:text-[#ff4a52]">
                            <Link to="/login">Login</Link>
                        </div>
                }
            </div >
        </nav >
    );
};

export default Navbar;