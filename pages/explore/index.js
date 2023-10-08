import StarsBackground from '@/components/3d/StarsBackground'
import LandingStars from '@/components/3d/StarsBackground'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Explore = () => {
    return (
        <div>

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




        </div>
    )
}

export default Explore