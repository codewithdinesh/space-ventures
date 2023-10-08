import React from 'react'

const PlaceInfo = ({ place }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  text-white">


            {/*  Image */}
            <div className='w-full h-fit flex shadow-2xl shadow-black  rounded-md'>

                <img
                    src={place?.img}
                    alt={place?.title}
                    className="w-full h-full object-cover  bg-transparent  rounded-md "
                />
            </div>

            {/* Destination Details */}
            <div className='flex-col p-5 bg-opacity-10 backdrop-blur-md backdrop-filter bg-slate-100  rounded-md'>
                <h1 className=' text-6xl py-5  p-1'>
                    {place?.title}
                </h1>

                <div className='py-10 '>

                    {place?.desc}

                </div>
            </div>

        </div>
    )
}

export default PlaceInfo