// components/EducationalContent.js
import Link from 'next/link';
import TopicCardEducation from './TopicCardEducation';

const EducationalContent = () => {


    // { title: 'Planet Exploration', link: '/planet-exploration' },
    // { title: 'Asteroid Impact Simulation', link: '/asteroid-simulation' },
    // { title: 'Solar System Formation', link: '/solar-system-formation' },
    // { title: 'The Moon: Earth\'s Natural Satellite', link: '/moon-exploration' },
    // { title: 'Mars: The Red Planet', link: '/mars-exploration' },
    // { title: 'Jupiter: King of the Gas Giants', link: '/jupiter-exploration' },
    // { title: 'Saturn and Its Enigmatic Rings', link: '/saturn-exploration' },
    // { title: 'Voyager Missions: Beyond the Solar System', link: '/voyager-missions' },

    const content = [
        { title: 'Our solar system', link: "/our-solar-system", desc: 'The Sun, planets, dwarf planets, comets and asteroids', img: '/img/solar-planet.jpg' },
        { title: 'Fact sheets', link: '/fact-sheets', desc: 'Get the facts about stars, planets, galaxies, and black holes.', img: '/img/solar-planet.jpg' },
        { title: 'Beyond our solar system', link: '/beyond-our-solar-system', desc: 'The exoplanet zoo, detecting exoplanets, brown dwarfs, the mysteries of dark matter and dark energy.', img: '/img/solar-planet.jpg' },

    ];

    // content = educationalContent;

    return (
        <section className="bg-opacity-10 backdrop-blur-md backdrop-filter bg-slate-900 bg-cover w-full   ">
            <div className="bg-opacity-5 backdrop-blur-md backdrop-filter bg-white w-full bg-cover container mx-auto p-3 px-6 py-8">

                <div className='flex'>

                    <h2 className="text-3xl font-extrabold text-white mb-4 flex-1">
                        Educational Content
                    </h2>

                    <Link href={"/explore"}>
                        <div className='flex text-white hover:text-red-500'>
                            Explore More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>

                    </Link>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {content.map((item, index) => (
                        <Link key={index} href={`/education${item.link}`} >
                            <TopicCardEducation topic={item} />
                        </Link>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default EducationalContent;
