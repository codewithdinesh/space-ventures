import Link from 'next/link';
import React from 'react';

const TouristPlaces = ({ touristPlaces }) => {
    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full ">
            {touristPlaces?.map((place, index) => (

                <Link key={index} href={`/destinations/places?title=${place?.title}&desc=${place?.desc}&img=${place?.img}`}>

                    <div className='w-full h-full hover:shadow-lg transition duration-300 rounded-lg shadow-md bg-opacity-70 backdrop-blur-md backdrop-filter break-words bg-slate-100 cursor-pointer relative'>
                        <img src={place?.img} alt={place.title} className="w-full h-40 object-cover rounded-md" />

                        {/* Text Overlay */}
                        <div className={`absolute top-0 left-0 w-full h-full flex flex-col justify-end p-5 `}>
                            <h2 className="text-lg font-semibold text-white mb-2">{place?.title}</h2>

                        </div>
                    </div>
                </Link>

            ))
            }
        </div >

    );
};

export default TouristPlaces;
