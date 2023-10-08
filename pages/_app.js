import StarsBackground from '@/components/3d/StarsBackground';
import MobileNavbar from '@/components/Header/MobileNavbar';
import Navbar from '@/components/Header/Navbar';
import '@/styles/globals.css'
import { Canvas } from '@react-three/fiber';

import { motion } from "framer-motion";


export default function App({ Component, pageProps }) {



  return (
    <div className={"relative items-center justify-center bg-gradient-to-r from-slate-500  to-black   bg-[url('/img/space-1.jpg')]"}>


      <Component {...pageProps} />

    </div>
  )

}
