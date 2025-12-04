import { Helmet } from "react-helmet-async";
import SolarSystem from "@/components/solar-system/SolarSystem";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Orbit World | Interactive Solar System Explorer</title>
        <meta name="description" content="Explore the solar system in stunning 3D. Discover Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, and Pluto with detailed information about each planet and their moons." />
        <meta name="keywords" content="solar system, planets, space, astronomy, Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto, moons, interactive, 3D" />
        <meta property="og:title" content="Orbit World | Interactive Solar System Explorer" />
        <meta property="og:description" content="Explore the solar system in stunning 3D. Discover all planets with detailed information." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://orbitworld.app" />
      </Helmet>
      
      <SolarSystem />
    </>
  );
};

export default Index;
