import React from 'react';

const Loom = ({ source }) => {
  const isValidSource = source.startsWith('https://www.loom.com/embed/');

  if (!isValidSource) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a1a1a',
          color: '#888',
          padding: '2rem',
          borderRadius: '8px',
          aspectRatio: '16/9',
        }}
      >
        <span>Video not available</span>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        src={source}
        title="Embedded Loom Video"
        frameBorder={0}
        allowFullScreen
        loading="lazy"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default Loom;
