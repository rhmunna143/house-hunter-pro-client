import Container from "../../Components/Container";

const BannerSection = () => {
    return (
        <div className="bg-blue-700 text-white py-20">
            <Container>
                <div className="flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-4">Find Your Dream Home with House Hunter</h2>
                        <p className="text-lg mb-6">
                            Discover a wide range of rental properties. Your perfect home is just a click away!
                        </p>

                        <div className="flex flex-col w-3/5 gap-4 mx-auto">
                            <input type="text" name="search" id="search" className="bg-transparent border border-white rounded-xl py-1" />

                            <button
                                href="#search-section" // Replace with the actual ID or target of your search section
                                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full inline-block transition duration-300"
                            >
                                Start Your Search
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BannerSection;
