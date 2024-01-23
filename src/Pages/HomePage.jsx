/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import HouseCard from './HouseCard'; // Assume you have a HouseCard component
import BannerSection from './Home/BannerSection';

const HomePage = () => {
    const [houses, setHouses] = useState([]);
    const [filters, setFilters] = useState({
        city: '',
        bedrooms: '',
        bathrooms: '',
        roomSize: '',
        availability: '',
        rentRange: [0, 1000], // Default rent range
    });

    useEffect(() => {
        // Fetch houses based on filters from the server
        // You can use   backend API endpoint for this

        // For demonstration purposes, let's assume houses are fetched from an API
        // and stored in the 'houses' state
        const fetchedHouses = [
            // Sample house data
            { id: 1, city: 'New York', bedrooms: 2, bathrooms: 1, roomSize: 'Medium', availability: true, rent: 1200 },
            // Add more house data as needed
        ];

        setHouses(fetchedHouses);
    }, [filters]);

    const handleFilterChange = (filter, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filter]: value,
        }));
    };

    return (
        <>
            <BannerSection />

            <div className="bg-blue-600 text-white py-20">
                <div className="container mx-auto">

                    {/* Filters Section */}
                    <div className="mb-8">
                        {/* Add   filter components here */}
                        {/* Example: <CityFilter onChange={(value) => handleFilterChange('city', value)} /> */}
                        {/* Example: <BedroomFilter onChange={(value) => handleFilterChange('bedrooms', value)} /> */}
                        {/* ... */}
                    </div>

                    {/* House Listings */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {houses.map((house) => (
                            <HouseCard key={house.id} house={house} />
                        ))}
                    </div>

                    {/* Pagination/Infinite Scroll */}
                    {/* Implement   pagination/infinite scroll component here */}

                    {/* Note: Make sure to use appropriate Tailwind CSS classes for styling */}
                </div>
            </div>
        </>
    );
};

export default HomePage;