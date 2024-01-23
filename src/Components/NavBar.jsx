import { NavLink } from "react-router-dom";
import Container from "./Container";

const NavBar = () => {
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

                    <div className="user">
                        User
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NavBar;