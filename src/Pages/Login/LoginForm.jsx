import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../Hooks/util";
import toast from "react-hot-toast";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implemented login logic here

        axios.post(`${baseUrl}/users/current-user`, formData, { withCredentials: true })
            .then((response) => {
                console.log(response.data);
                toast.success("Login Success.")
                window.location.reload()
                // Handle successful login, e.g., store user data in state or context
            })
            .catch((error) => {
                console.error(error);
                if (error.response.status == 402) {
                    toast.error(error.response.data.message)
                }
                if (error.response.status == 401) {
                    toast.error(error.response.data.message)
                }
                // Handle login error, e.g., show error message to the user
            });
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="max-w-md mx-auto py-20">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Login
                </button>
                <p className="mt-4">No account? <Link to={"/register"} className="text-blue-600 hover:text-blue-700">Register</Link> </p>
            </form>
        </div>
    );
};

export default LoginForm;
