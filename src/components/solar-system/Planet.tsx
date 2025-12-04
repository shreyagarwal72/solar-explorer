import { PlanetData } from "@/data/planets";

interface PlanetProps {
  planet: PlanetData;
  isActive: boolean;
  zOffset: number;
  onReadMore: () => void;
}

const Planet = ({ planet, isActive, zOffset, onReadMore }: PlanetProps) => {
  const opacity = isActive ? 1 : Math.max(0, 1 - Math.abs(zOffset) / 2300);
  
  return (
    <div className="solar-system-container">
      <article 
        className={`planet planet-${planet.id} ${isActive ? 'active' : ''}`}
        style={{
          transform: `translateZ(${zOffset}px) translateY(0) rotateX(4deg) scaleX(0.89)`,
          opacity,
          pointerEvents: isActive ? 'all' : 'none'
        }}
        aria-hidden={!isActive}
      >
        {/* Moons */}
        {planet.moons.map((moon, index) => (
          <div key={moon.name}>
            <div 
              className={`moon ${isActive ? 'visible' : ''}`}
              style={{
                left: moon.position.left,
                top: moon.position.top,
                transform: `scale(${moon.scale})`,
                background: moon.texture ? `url("${moon.texture}")` : undefined
              }}
              aria-label={`${moon.name} moon`}
            >
              <h4 className="font-thin text-xl tracking-wider relative -top-28 text-muted-foreground">
                Moon
              </h4>
              <h3 
                className="font-thin text-4xl tracking-wider relative -top-28"
                style={{ color: planet.color }}
              >
                {moon.name}
              </h3>
            </div>
            <div 
              className={`moon-trajectory ${isActive ? 'visible' : ''}`}
              style={{
                width: moon.trajectorySize.width,
                height: moon.trajectorySize.height,
                left: moon.trajectoryPosition.left,
                top: moon.trajectoryPosition.top
              }}
              aria-hidden="true"
            />
          </div>
        ))}
        
        {/* Planet Description */}
        <div className={`planet-description ${isActive ? 'visible' : ''}`}>
          <h2 style={{ color: `${planet.color}88` }}>{planet.type}</h2>
          <h1>{planet.name}</h1>
          <p>{planet.description}</p>
          <button 
            onClick={onReadMore}
            className="read-more-btn"
            style={{ color: planet.color, borderColor: planet.color }}
            aria-label={`Read more about ${planet.name}`}
          >
            Read More
          </button>
        </div>
        
        {/* Overlay */}
        <div className="planet-overlay" aria-hidden="true" />
      </article>
    </div>
  );
};

export default Planet;
