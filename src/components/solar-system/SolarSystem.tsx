import { useState, useCallback } from "react";
import { planets } from "@/data/planets";
import Planet from "./Planet";
import PlanetMenu from "./PlanetMenu";
import InfoPanel from "./InfoPanel";
import StarField from "./StarField";

const SolarSystem = () => {
  const [selectedPlanetId, setSelectedPlanetId] = useState("earth");
  const [showPanel, setShowPanel] = useState(false);

  const selectedPlanetIndex = planets.findIndex(p => p.id === selectedPlanetId);
  const selectedPlanet = planets[selectedPlanetIndex];

  const handleSelectPlanet = useCallback((planetId: string) => {
    setSelectedPlanetId(planetId);
    setShowPanel(false);
  }, []);

  const handleReadMore = useCallback(() => {
    setShowPanel(true);
  }, []);

  const handleClosePanel = useCallback(() => {
    setShowPanel(false);
  }, []);

  return (
    <div className="solar-system-wrapper">
      <StarField />
      
      {/* Logo */}
      <header className="fixed top-10 left-0 right-0 mx-auto text-center z-20">
        <h1 className="text-sm uppercase font-thin tracking-widest text-foreground">
          Orbit World
          <span className="text-xs text-primary block mt-1">
            Explore the Solar System
          </span>
        </h1>
      </header>

      {/* Planet Menu */}
      <PlanetMenu 
        selectedPlanet={selectedPlanetId}
        onSelectPlanet={handleSelectPlanet}
      />

      {/* Solar System View */}
      <main className="solar-view" role="main" aria-label="Solar system visualization">
        {planets.map((planet, index) => {
          const zOffset = (index - selectedPlanetIndex) * 2300;
          return (
            <Planet
              key={planet.id}
              planet={planet}
              isActive={planet.id === selectedPlanetId}
              zOffset={zOffset}
              onReadMore={handleReadMore}
            />
          );
        })}
      </main>

      {/* Info Panel */}
      <InfoPanel 
        planet={selectedPlanet}
        isOpen={showPanel}
        onClose={handleClosePanel}
      />
    </div>
  );
};

export default SolarSystem;
