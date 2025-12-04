const Index = () => {
  return (
    <iframe 
      src="/orbit-world/index.html" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        border: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
      }}
      title="Orbit World - Interactive Solar System Explorer"
    />
  );
};

export default Index;
