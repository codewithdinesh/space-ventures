// pages/destination/[name].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import Navbar from '../Header/Navbar';
import PlanetInfoCard from '../planets/PlanetInfoCard';
import TouristPlaces from '../planets/TuristPlaces';
import Link from 'next/link';
import MobileNavbar from '../Header/MobileNavbar';
import BookingModal from '../Booking/Booking';

const Destination = ({ destinationData, isBooking }) => {
    const router = useRouter();
    const { name } = router.query;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container mx-auto">
            <Navbar />
            <MobileNavbar />


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  text-white">


                {/* 3D Image */}
                <div className='w-full h-fit flex shadow-2xl shadow-black  rounded-md'

                >
                    {/* <Canvas>
                        <Image3d />
                    </Canvas> */}

                    <img
                        src={destinationData?.image}
                        alt={destinationData?.name}
                        className="w-full h-full object-cover  bg-transparent  rounded-md "
                    />


                </div>


                {/* Destination Details */}
                <div className='flex-col p-5 bg-opacity-10 backdrop-blur-md backdrop-filter bg-slate-100  rounded-md'>
                    <h1 className=' text-6xl py-5  p-1'>
                        {destinationData?.name}
                    </h1>

                    <div className='py-10 '>

                        {destinationData?.desc}

                    </div>

                    {/* Links */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link href={"#overview"}>
                            <div className="mb-2 p-4 bg-opacity-20 hover:bg-opacity-80 hover:text-blue-950 backdrop-blur-md backdrop-filter bg-slate-100 cursor-pointer">
                                <h2 className="text-lg font-semibold">Overview</h2>
                            </div>
                        </Link>
                        <Link href={"#places-to-visit"}>
                            <div className="mb-2 p-4 bg-opacity-20 hover:bg-opacity-80 hover:text-blue-950  backdrop-blur-md backdrop-filter bg-slate-100 cursor-pointer">
                                <h2 className="text-lg font-semibold">Places to Visit</h2>
                            </div>
                        </Link>

                        <Link href={"#iternitery"}>
                            <div className="mb-2 p-4 bg-opacity-20 hover:bg-opacity-80 hover:text-blue-950  backdrop-blur-md backdrop-filter bg-slate-100 cursor-pointer">
                                <h2 className="text-lg font-semibold">Iternitery</h2>
                            </div>
                        </Link>

                        <Link href={"#packages"}>
                            <div className="mb-2 p-4 bg-opacity-20 hover:bg-opacity-80 hover:text-blue-950 backdrop-blur-md backdrop-filter bg-slate-100 cursor-pointer">
                                <h2 className="text-lg font-semibold">Packages</h2>
                            </div>
                        </Link>
                    </div>

                    <Link href={"#"} onClick={openModal}>
                        <div className="mb-2 p-4 my-5 bg-opacity-70 hover:bg-opacity-100  backdrop-blur-md backdrop-filter bg-green-600 hover:bg-red-500 cursor-pointer">
                            <h2 className="text-lg font-semibold">Book Your journey</h2>
                        </div>
                    </Link>

                    {/* Notes */}
                    <p className='text-red-300 py-5 '>
                        Note : Your journey will be starting from the NASA spacecraft Launch Center, USA
                    </p>

                    <BookingModal isOpen={isModalOpen} onClose={closeModal} />
                </div>


            </div>

            {/* <InfoContainer planetData={destinationData} /> */}
            {/* Planet Information */}

            <div className='bg-opacity-30 backdrop-blur-md backdrop-filter bg-blue-100 p-5 my-3 rounded-md ' id='overview'>

                <h1 className=' font-bold text-4xl py-4 text-white  '> Planet Information </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                    {
                        destinationData?.info?.map((planet, index) => {
                            return <PlanetInfoCard key={index} planetData={planet} />
                        })
                    }
                </div>
            </div>

            {/* Places to Visit */}
            <div id='places-to-visit' className="bg-opacity-10 backdrop-blur-md backdrop-filter bg-blue-200 p-5 my-3 rounded-md">
                <h2 className=" font-bold text-4xl py-4 text-white  ">Places To Visit:</h2>

                <TouristPlaces touristPlaces={destinationData?.touristPlaces} />

            </div>

            {/* Iternitery Details */}

            {
                // isBooking ?
                <div id='iternitery' className='bg-opacity-10 backdrop-blur-md backdrop-filter bg-blue-200 p-5 my-3 rounded-md '>
                    <h2 className=" font-bold text-4xl py-4 text-white  ">Itinerary:</h2>
                    <ul className="list-disc pl-6">
                        {destinationData?.itinerary.map((item) => (
                            <li key={item.day} className=' list-none mb-2 p-4 bg-opacity-70 backdrop-blur-md backdrop-filter bg-slate-100 cursor-pointer'>
                                <strong>{item.day}:</strong> {item?.activity}
                            </li>
                        ))}
                    </ul>
                </div>
                //  : null
            }

            {/* turist Guide */}

        </div>
    );
};



export default Destination;
