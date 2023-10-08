import { CircleGeometry, DoubleSide, LinearMipMapLinearFilter } from "three";
import Sphere from "./Sphere";
import { useKeyboardControls, useTexture } from "@react-three/drei";
import Saturn from "./Saturn";

const toRadians = (angle) => (angle * Math.PI) / 180;

function Mercury(props) {
  const texture = useTexture("/mercury_8k.jpg");
  texture.generateMipmaps = true;
  texture.minFilter = LinearMipMapLinearFilter;
  return (
    <Sphere
      texture={texture}
      scale={1}
      planet="mercury"
      rotateZ={toRadians(0.1)}
      {...props}
    />
  );
}

function Venus(props) {
  const texture = useTexture("/venus_8k.jpg");
  texture.generateMipmaps = true;
  texture.minFilter = LinearMipMapLinearFilter;
  return (
    <Sphere
      texture={texture}
      scale={2.5}
      planet="venus"
      rotateZ={toRadians(177)}
      {...props}
    />
  );
}

function Earth(props) {
  const texture = useTexture("/earth_8k.jpg");
  texture.generateMipmaps = true;
  texture.minFilter = LinearMipMapLinearFilter;
  return (
    <Sphere
      texture={texture}
      scale={3}
      planet="earth"
      rotateZ={toRadians(23.44)}
      {...props}
    />
  );
}

function Mars(props) {
  const texture = useTexture("/mars_8k.jpg");
  texture.generateMipmaps = true;
  texture.minFilter = LinearMipMapLinearFilter;
  return (
    <Sphere
      texture={texture}
      scale={1.5}
      planet="mars"
      rotateZ={toRadians(25)}
      {...props}
    />
  );
}

function Jupiter(props) {
  const texture = useTexture("/jupiter_8k.jpg");
  texture.generateMipmaps = true;
  texture.minFilter = LinearMipMapLinearFilter;
  return (
    <Sphere
      texture={texture}
      scale={33}
      planet="jupiter"
      rotateZ={toRadians(3)}
      {...props}
    />
  );
}

function Uranus(props) {
  const texture = useTexture("/uranus_2k.jpg");
  texture.generateMipmaps = true;
  texture.minFilter = LinearMipMapLinearFilter;
  return (
    <Sphere
      texture={texture}
      scale={12}
      planet="uranus"
      rotateZ={toRadians(98)}
      {...props}
    />
  );
}

function Neptune(props) {
  const texture = useTexture("/neptune_2k.jpg");
  texture.generateMipmaps = true;
  texture.minFilter = LinearMipMapLinearFilter;
  return (
    <Sphere
      texture={texture}
      scale={11.5}
      planet="neptune"
      rotateZ={toRadians(30)}
      {...props}
    />
  );
}

export default function Planets(props) {
  return (
    <>
      <Mercury position={[150, 0, 0]} args={[1, 64, 64]} {...props} />
      <Venus position={[180, 0, 0]} args={[1, 64, 64]} {...props} />
      <Earth position={[210, 0, 0]} args={[1, 64, 64]} {...props} />
      <Mars position={[260, 0, 0]} args={[1, 64, 64]} {...props} />
      <Jupiter position={[360, 0, 0]} args={[1, 64, 64]} {...props} />
      <Saturn position={[560, 0, 0]} args={[1, 64, 64]} {...props} />
      <Uranus position={[760, 0, 0]} args={[1, 64, 64]} {...props} />
      <Neptune position={[1000, 0, 0]} args={[1, 64, 64]} {...props} />
    </>
  );
}

export { Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune };
