
import {
    PointMaterial,
    Points,
    Sparkles,
    Stars,
    useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { AdditiveBlending, Vector3 } from "three";

import { useRef } from "react";

export default function StarsBackground(props) {

    const starsRef = useRef(null);

    useFrame((state, delta) => {
        starsRef.current.rotation.x += 0.005;
    });

    return (
        <Sparkles
            speed={1}
            ref={starsRef}
            count={6000}
            scale={900}
            size={50}
            color={0xbafcff}

        />
    );
}