import React from 'react'

const DestinationInfo = ({ place }) => {
    return (

        <div
            // key={index}
            className="bg-white w-full  p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
            <img
                src={destination.image}
                alt={destination.name}
                className="  w-full h-full object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-800">
                {destination.name}
            </h3>


        </div>
    )
}

export default DestinationInfo