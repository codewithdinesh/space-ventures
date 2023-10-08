
import StarsBackground from '@/components/3d/StarsBackground';
import Destination from '@/components/destinations/Destination';
import { Canvas } from '@react-three/fiber';
import { useRouter } from 'next/router';
import React from 'react'


const DestinationPage = () => {
    const router = useRouter();

    const { id } = router.query;

    const destinations = [

        {
            name: 'Moon',
            link: 'moon',
            desc: 'The Moon is Earth\'s natural satellite and has been a subject of fascination and exploration for centuries.',
            touristPlaces: [
                { title: 'Apollo 11 Landing Site (Tranquility Base)', link: '', desc: 'Visit the historic Apollo 11 landing site where humans first set foot on the Moon. Explore the "Tranquility Base" and learn about the incredible journey of Neil Armstrong and Buzz Aldrin.', img: '/img/moon/tranquility-base.jpg' },
                { title: ' Descent Stages', link: '', desc: 'Discover the remnants of the lunar module descent stages left behind by the Apollo missions. These spacecraft played a crucial role in safely landing astronauts on the Moon.', img: "/public/img/moon/Earth_Moon_and_Lunar_Module,.jpg" },
                { title: 'Lunar Rovers and Instruments', link: '', desc: 'Explore the lunar rovers and scientific instruments used by astronauts to conduct experiments and collect data on the Moon\'s geology and environment.', img: '/img/moon/lunar-rover.jpg' },
                { title: 'Tycho Crater', link: '', desc: 'Visit the Tycho Crater, a prominent lunar impact crater known for its central peak. Study the unique features and geological history of this lunar landmark.', img: '' },
                { title: 'Mare Tranquillitatis (Sea of Tranquility)', link: '', desc: 'Explore the Mare Tranquillitatis, also known as the "Sea of Tranquility." This vast lunar plain is famous for its role in the Apollo 11 mission and offers stunning lunar vistas.', img: '' },
                { title: 'Copernicus Crater', link: '', desc: 'Visit the Copernicus Crater, a large and well-preserved lunar impact crater. Study its intricate ejecta pattern and geological formations.', img: '' },
            ],
            itinerary: [
                { day: 'Day 1', activity: 'Departure from Earth' },
                { day: 'Day 2-6', activity: 'Observe Moon from Orbit & Prepare for Landing' },
                { day: 'Day 7', activity: 'Arrival at the Moon (Land at Apollo 11 Site)' },
                { day: 'Day 8-9', activity: 'Explore Tranquility Base and Collect Lunar Samples' },
                { day: 'Day 10-11', activity: 'Visit Lunar Rovers and Instruments' },
                { day: 'Day 12-13', activity: 'Explore Tycho Crater and Copernicus Crater' },
                { day: 'Day 14', activity: 'Reflect and Depart for Earth' },
            ],
            image: "/img/FullMoon.jpg",

            info: [
                { rotation: '27.3 Days' },
                { revolution: '27.3 Days' },
                { radius: '1,737.1 KM' },
                { temperature: '-173°C to 127°C' },
            ],
        },
        {
            name: 'Mars',
            link: 'mars',
            desc: 'Mars is the fourth planet from the Sun and has been a subject of fascination for scientists and explorers.',
            touristPlaces: [
                { title: 'Gale Crater (Aeolis Mons - Mount Sharp)', link: '', desc: 'Explore Gale Crater, home to Aeolis Mons, also known as Mount Sharp. Study the intriguing geological features and search for clues about Mars\' ancient history.', img: '/img/FullMoon.jpg' },
                { title: 'Olympus Mons (Tallest Volcano in the Solar System)', link: '', desc: 'Visit Olympus Mons, the tallest volcano in the Solar System. Ascend its slopes and investigate the geological wonders of this Martian giant.', img: '' },
                { title: 'Valles Marineris (Grand Canyon of Mars)', link: '', desc: 'Embark on an exploration of Valles Marineris, often called the "Grand Canyon of Mars." Study its massive canyons and geological formations.', img: '' },
                { title: 'Curiosity Rover Landing Site', link: '', desc: 'Visit the landing site of NASA\'s Curiosity rover. Learn about its scientific discoveries and ongoing missions to understand Mars\' environment.', img: '' },
                { title: 'Victoria Crater', link: '', desc: 'Explore Victoria Crater, a well-known Martian impact crater. Study the exposed rock layers and geological history of this fascinating site.', img: '' },
                { title: 'The Face on Mars (Cydonia Region)', link: '', desc: 'Investigate the Cydonia region and the famous "Face on Mars" feature. Examine the geological formations and mysteries of this area.', img: '' },
            ],
            itinerary: [
                { day: 'Weeks 1-9', activity: 'Travel to Mars and Observe Mars from Orbit' },
                { day: 'Week 10', activity: 'Arrival at Gale Crater (Land at Aeolis Mons)' },
                { day: 'Day 71-75', activity: 'Explore the Base of Mount Sharp and Ancient Lakebeds' },
                { day: 'Day 76-80', activity: 'Visit Olympus Mons and Conduct Geological Studies' },
                { day: 'Day 81-85', activity: 'Explore Valles Marineris and its Spectacular Canyons' },
                { day: 'Day 86-90', activity: 'Visit Curiosity Rover Landing Site and Gather Data' },
                { day: 'Day 91-95', activity: 'Explore Victoria Crater and its Geological Features' },
                { day: 'Day 96-100', activity: 'Investigate the Face on Mars in Cydonia Region' },
                { day: 'Weeks 11-20', activity: 'Return to Earth' },
            ],
            image: "/img/mars.png",

            info: [
                { rotation: '0.99 Days' },
                { revolution: '687 Days' },
                { radius: '3,389.5 KM' },
                { temperature: '-80°C to 20°C' },
            ],
        }, {
            name: 'Europa',
            link: 'europa',
            desc: 'Europa is one of Jupiter\'s moons and is known for its subsurface ocean potential.',
            touristPlaces: [
                { title: 'Europa\'s Icy Surface', link: '', desc: 'Explore the icy surface of Europa, marked by its unique geological features. Witness the frozen landscapes and geological wonders of this moon.', img: '' },
                { title: 'Potential Subsurface Ocean Access Points', link: '', desc: 'Discover potential subsurface ocean access points on Europa. Learn about the scientific significance of these locations in the search for extraterrestrial life.', img: '' },
                { title: 'Geological Features (Ridges, Craters, Chaos Terrain)', link: '', desc: 'Study Europa\'s geological features, including ridges, craters, and chaos terrain. Gain insights into the moon\'s geological history.', img: '' },
                { title: 'Surface Geysers or Vents', link: '', desc: 'Witness surface geysers or vents on Europa, which may provide access to its subsurface ocean. Explore the dynamic features of this moon.', img: '' },
                { title: 'Ice Samples for Scientific Analysis', link: '', desc: 'Collect ice samples from Europa\'s surface for scientific analysis. Learn how these samples can reveal crucial information about the moon\'s composition.', img: '' },
            ],
            itinerary: [
                { day: 'Months 1-12', activity: 'Travel to Europa and Observe the Icy Surface' },
                { day: 'Months 13-24', activity: 'Arrival at Europa and Execute Descent to Surface' },
                { day: 'Months 25-30', activity: 'Establish Research Station and Deploy Instruments' },
                { day: 'Months 31-36', activity: 'Drill Through the Ice to Explore the Subsurface Ocean' },
                { day: 'Months 37-42', activity: 'Transmit Data and Findings to Earth' },
                { day: 'Months 43-48', activity: 'Continued Exploration and Study of Europa' },
                { day: 'Months 49-54', activity: 'Further Investigations and Data Collection' },
                { day: 'Months 55-60', activity: 'Preparation for Return to Earth' },
                { day: 'Months 61-72', activity: 'Return to Earth and Maintain Communication' },
            ],
            image: "/img/europa.png",

            info: [
                { rotation: '3.55 Days' },
                { revolution: '3.55 Days' },
                { radius: '1,560.8 KM' },
                { temperature: '-160°C to -220°C' },
            ],
        },
        {
            name: 'Titan',
            link: 'titan',
            desc: 'Titan is one of Saturn\'s moons and is known for its methane lakes and rivers.',
            touristPlaces: [
                { title: 'Methane Lakes and Rivers', link: '', desc: 'Explore the methane lakes and rivers of Titan, unique in the solar system. Witness the ethereal landscapes and study the chemistry of these liquid hydrocarbon features.', img: "" },
                { title: 'Huygens Probe Landing Site', link: '', desc: 'Visit the landing site of the Huygens probe, which provided valuable insights into Titan\'s atmosphere and surface. Explore the area where this historic mission took place.', img: '' },
                { title: 'Dunes and Sand Seas', link: '', desc: 'Study the vast dunes and sand seas of Titan, shaped by the moon\'s complex weather patterns. Learn about the geology and processes that create these features.', img: '' },
                { title: 'Kraken Mare (Largest Methane Sea)', link: '', desc: 'Explore Kraken Mare, the largest methane sea on Titan. Discover the unique characteristics of this massive liquid methane feature and its potential significance.', img: '' },
                { title: 'Shores of Ligeia Mare', link: '', desc: 'Visit the shores of Ligeia Mare, another of Titan\'s methane seas. Study the interactions between liquid methane and the moon\'s icy surface in this intriguing region.', img: '' },
                { title: 'Titan\'s Thick Atmosphere and Unique Chemistry', link: '', desc: 'Learn about Titan\'s thick atmosphere and its unique chemistry, including the presence of complex organic molecules. Explore the science behind this fascinating moon.', img: '' },
            ],

            itinerary: [
                { day: 'Years 1-2', activity: 'Travel to Titan and Observe the Methane Lakes' },
                { day: 'Years 3-4', activity: 'Arrival at Titan and Execute Descent Through Atmosphere' },
                { day: 'Years 5-10', activity: 'Explore Methane Lakes, Dunes, and River Systems' },
                { day: 'Years 11-15', activity: 'Conduct Experiments to Study Titan\'s Atmosphere' },
                { day: 'Years 16-20', activity: 'Transmit Data and Findings to Earth' },
                { day: 'Years 21-25', activity: 'Continued Investigations and Data Collection' },
                { day: 'Years 26-30', activity: 'Prepare for Return to Saturn\'s Orbit' },
                { day: 'Years 31-35', activity: 'Return to Earth and Reflect on Mission' },
            ],
            image: "/img/Titan.jpg",

            info: [
                { rotation: '15.95 Days' },
                { revolution: '29.5 Years' },
                { radius: '2,575 KM' },
                { temperature: '-179°C to -179°C' },
            ],
        },








    ]

    const destinationData = destinations.find((destination) => destination.link === id);


    return (
        <div>
            <Canvas
                style={{ width: "100%", height: "100vh", position: "fixed" }}
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
            <div className='bg-opacity-80 p-3 backdrop-blur-md backdrop-filter container mx-auto min-h-screen'>
                <Destination destinationData={destinationData} />

            </div>
        </div>
    )
}

export default DestinationPage;