
const HouseCard = ({ house }) => {
    const { id, city, bedrooms, bathrooms, roomSize, availability, rent } = house;

    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            <div className="font-bold text-lg mb-2">{`House in ${city}`}</div>
            <div className="text-gray-700 mb-2">{`${bedrooms} Bedrooms | ${bathrooms} Bathrooms | ${roomSize} Room Size`}</div>
            <div className="text-green-600 font-bold mb-2">{`$${rent}/month`}</div>
            <div className="text-sm">{availability ? 'Available' : 'Not Available'}</div>
            {/* Add more details or buttons as needed */}
        </div>
    );
};

export default HouseCard;
