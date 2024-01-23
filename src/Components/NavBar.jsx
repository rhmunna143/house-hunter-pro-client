import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import useCurrentUser from "../Hooks/useCurrentUser";
import axios from "axios";
import { baseUrl } from "../Hooks/util";
import toast from "react-hot-toast";

const NavBar = () => {
const{ users} = useCurrentUser()
    const lastUser = users.length - 1;
    const latestUser = users[lastUser]

    const handleLogout = () => {
        axios.delete(`${baseUrl}/logout/${latestUser.email}`)
            .then(res => {
                if (res.data) {
                    toast.success("Logout success");
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="bg-blue-600 text-white py-4">
            <Container>
                <div className="flex flex-wrap items-center justify-between">
                    <h1 className="text-5xl font-bold mb-4 logo">House Hunter</h1>

                    <div className="menu font-medium flex flex-wrap gap-4 place-items-center">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending  rounded-lg px-4 py-2" : isActive ? "active bg-blue-700 rounded-lg px-4 py-2" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/blogs"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending  rounded-lg px-4 py-2" : isActive ? "active bg-blue-700 rounded-lg px-4 py-2" : ""
                            }
                        >
                            Blogs
                        </NavLink>

                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending  rounded-lg px-4 py-2" : isActive ? "active bg-blue-700 rounded-lg px-4 py-2" : ""
                            }
                        >
                            Login
                        </NavLink>

                        <NavLink
                            to="/register"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending  rounded-lg px-4 py-2" : isActive ? "active bg-blue-700 rounded-lg px-4 py-2" : ""
                            }
                        >
                            Register
                        </NavLink>
                    </div>

                    {
                        latestUser && <div className="user flex flex-wrap gap-2 items-center">

                            <Link className="font-medium" to={"/dashboard/home"}>Dashboard</Link> |

                            <p>{latestUser?.fullName}</p> |

                            <button onClick={handleLogout} className="bg-green-600 px-4 py-2 rounded-xl hover:bg-blue-700">Logout</button>
                        </div>
                    }
                </div>
            </Container>
        </div>
    );
};

export default NavBar;