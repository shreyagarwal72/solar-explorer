import { planets, PlanetData } from "@/data/planets";

interface PlanetMenuProps {
  selectedPlanet: string;
  onSelectPlanet: (planetId: string) => void;
}

const PlanetMenu = ({ selectedPlanet, onSelectPlanet }: PlanetMenuProps) => {
  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-30" aria-label="Planet navigation">
      {planets.map((planet, index) => (
        <button
          key={planet.id}
          onClick={() => onSelectPlanet(planet.id)}
          className={`planet-menu-item ${selectedPlanet === planet.id ? 'active' : ''}`}
          style={{ top: `${(index - 4) * 48}px` }}
          aria-label={`Select ${planet.name}`}
          aria-pressed={selectedPlanet === planet.id}
        >
          <div 
            className="planet-preview"
            style={{ background: `url("${planet.previewTexture}")` }}
          />
          <div className="planet-info">
            <h3>
              <div 
                className="pip" 
                style={{ backgroundColor: planet.color }}
              />
              {planet.name}
            </h3>
            <h4 style={{ color: selectedPlanet === planet.id ? planet.color : undefined }}>
              {planet.distance}
            </h4>
          </div>
        </button>
      ))}
    </nav>
  );
};

export default PlanetMenu;
