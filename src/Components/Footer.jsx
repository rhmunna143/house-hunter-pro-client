
const Footer = () => {
    return (
        <footer className="bg-blue-700 text-white py-20">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <div className="mb-6">
                    <h1 className="text-5xl font-bold mb-4 logo">House Hunter</h1>

                    <p className="text-sm mt-2 text-center">Find Your Dream Home</p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-4">Connect with Us</h4>
                    <div className="flex place-items-center justify-center space-x-4">
                        <a href="#" className="text-white hover:text-gray-300">
                            <i className="fab fa-facebook-square text-2xl"></i>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            <i className="fab fa-twitter text-2xl"></i>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            <i className="fab fa-instagram text-2xl"></i>
                        </a>
                        {/* Add more social media icons as needed */}
                    </div>
                </div>

                <div className="">
                    <p className="text-sm">&copy; 2024 House Hunter. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
