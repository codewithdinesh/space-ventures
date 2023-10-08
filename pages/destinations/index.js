import StarsBackground from '@/components/3d/StarsBackground';
import DestinationList from '@/components/Home/DestinationList'
import { Canvas } from '@react-three/fiber';
import Link from 'next/link';
import React from 'react'

const DestinationsPage = () => {

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
        {
            name: 'Titan',
            description: "Titan is one of Saturn\'s moons and is known for its methane lakes and rivers.",
            image: '/img/Titan.jpg',
            link: '/titan'
        },

    ];


    return (
        <>
            <Canvas
                style={{ width: "100%", height: "100vh", position: "absolute" }}
                camera={{
                    position: [0, 50, 0],
                    fov: 90,
                    far: 1000,
                    near: 0.1,
                    rotation: [0, 0, 0],
                }}
            >
                <ambientLight />
                <StarsBackground radius={0} depth={500} factor={5} />
            </Canvas>
            <div className="bg-opacity-80 p-3 backdrop-blur-md backdrop-filter container mx-auto min-h-screen">




                <h2 className=" font-bold text-6xl py-4 text-white  ">Destinations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations.map((destination, index) => (
                        <Link key={index} href={`/destinations${destination.link}`}>
                            <div
                                key={index}
                                className="bg-slate-100  text-white bg-opacity-30 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 h-full"
                            >
                                <img
                                    src={destination?.image}
                                    alt={destination?.name}
                                    className="w-full h-50 object-cover mb-4 rounded-md"
                                />
                                <h3 className="text-xl font-semibold ">
                                    {destination.name}
                                </h3>
                                <p className="">{destination.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default DestinationsPage