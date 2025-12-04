import { PlanetData } from "@/data/planets";
import { X } from "lucide-react";

interface InfoPanelProps {
  planet: PlanetData | null;
  isOpen: boolean;
  onClose: () => void;
}

const InfoPanel = ({ planet, isOpen, onClose }: InfoPanelProps) => {
  if (!planet) return null;

  return (
    <>
      {/* Background overlay */}
      <div 
        className={`back-overlay ${isOpen ? 'visible' : ''}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />
      
      {/* Panel */}
      <aside 
        className={`info-panel ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-label={`Information about ${planet.name}`}
        aria-hidden={!isOpen}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close panel"
        >
          <X size={24} />
        </button>
        
        <h1>{planet.name}</h1>
        
        <p>{planet.description}</p>
        
        {planet.image && (
          <img 
            src={planet.image} 
            alt={`${planet.name} surface or atmosphere`}
            loading="lazy"
          />
        )}
        
        {planet.facts.map((fact, index) => (
          <div key={index}>
            <h2>{fact.title}</h2>
            <p>{fact.content}</p>
          </div>
        ))}
        
        <div className="h-8" />
      </aside>
    </>
  );
};

export default InfoPanel;
