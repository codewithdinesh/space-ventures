import MobileNavbar from '@/components/Header/MobileNavbar';
import Navbar from '@/components/Header/Navbar';
import PlaceInfo from '@/components/destinations/PlaceInfo'
import { useRouter } from 'next/router'
import React from 'react'

const Place = () => {

    const Router = useRouter();

    const { title, desc, img } = Router.query;

    const place = {
        title,
        desc,
        img
    }

    return (
        <div className="container mx-auto min-h-screen">
            <Navbar />
            <MobileNavbar />

            <PlaceInfo place={place} />

        </div>
    )
}

export default Place