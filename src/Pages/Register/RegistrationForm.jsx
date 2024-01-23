import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../Hooks/util";
import toast from "react-hot-toast";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        role: 'House Renter', // Default role
        phoneNumber: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        axios.post(`${baseUrl}/users`, formData, {
            withCredentials: true
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                if (err.response && err.response.status === 400) {
                    // Handled the case where the user already exists
                    console.error("User already exists. Please login.");
                    toast.error("User already exists. Please login.");
                } else {
                    // Handled other errors
                    console.error("Error during registration:", err.message);
                    toast.error("Error during registration. Please try again later.");
                }
            });

        console.log('Form data submitted:', formData);
    };

    return (
        <div className="max-w-md mx-auto py-20">
            <h2 className="text-2xl font-semibold mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-gray-700 text-sm font-medium mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="role" className="block text-gray-700 text-sm font-medium mb-2">
                        Role
                    </label>
                    <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        required
                    >
                        <option value="House Renter">House Renter</option>
                        <option value="House Owner">House Owner</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-medium mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>

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
                    Register
                </button>
                <p className="mt-4">Already have account? <Link className="text-blue-600 hover:text-blue-700" to={"/login"}>Login</Link></p>
            </form>
        </div>
    );
};

export default RegistrationForm;