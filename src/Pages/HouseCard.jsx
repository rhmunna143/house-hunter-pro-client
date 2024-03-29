/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const HouseCard = ({ house }) => {
    const { id, city, bedrooms, bathrooms, roomSize, availability, rent, image } = house;

    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            <div className="img" style={{ overflowX: "hidden", overflowY: "hidden" }}>
                <img src={image} className="rounded-md hover:scale-150 transition" alt="" />
            </div>
            <div className="font-bold text-lg mb-2">{`House in ${city}`}</div>
            <div className="text-gray-700 mb-2">{`${bedrooms} Bedrooms | ${bathrooms} Bathrooms | ${roomSize} Room Size`}</div>
            <div className="text-green-600 font-bold mb-2">{`$${rent}/month`}</div>
            <div className="text-sm">{availability ? 'Available' : 'Not Available'}</div>
            {/* Add more details or buttons as needed */}

            <button className="bg-green-600 w-full px-4 py-2 rounded-2xl hover:bg-blue-700">Rent Now</button>
        </div>
    );
};

export default HouseCard;
