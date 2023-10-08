import Link from 'next/link';
import React from 'react';

const DestinationList = () => {
    // destinations Details
    const destinations = [
        {
            name: 'Mars',
            description: 'The Red Planet',
            image: '/img/mars.png',
            link: '/mars'
        },
        {
            name: 'Europa (Jupiter\'s Moon)',
            description: 'A Moon with a Subsurface Ocean',
            image: '/img/europa.png',
            link: '/europa'
        },
        {
            name: 'The Moon',
            description: 'Earth\'s Natural Satellite',
            image: '/img/FullMoon.jpg',
            link: '/moon'
        },
  
    ];

    return (
        <section className="bg-gray-100  bg-opacity-100 backdrop-blur-md backdrop-filter bg-[url('/img/space.jpg')] bg-cover w-full ">
            <div className="bg-opacity-5 backdrop-blur-md backdrop-filter bg-white w-full bg-cover container mx-auto p-3 px-6 py-8">
                <div className='flex'>

                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 flex-1">
                        Explore Our Destinations
                    </h2>

                    <Link href={"/destinations"}>
                        <div className='flex text-white hover:text-red-500'>
                            Explore More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>

                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations.map((destination, index) => (
                        <Link key={index} href={`/destinations${destination.link}`}>
                            <div
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                            >
                                <img
                                    src={destination?.image}
                                    alt={destination?.name}
                                    className="w-full h-50 object-cover mb-4 rounded-md"
                                />
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {destination.name}
                                </h3>
                                <p className="text-gray-600">{destination.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DestinationList;
