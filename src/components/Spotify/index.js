import React from 'react';

const Spotify = ({ id, type = 'track', height = 352 }) => {
  if (!id) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a1a1a',
          color: '#888',
          padding: '2rem',
          borderRadius: '12px',
          height,
        }}
      >
        <span>Spotify embed not available</span>
      </div>
    );
  }

  const src = `https://open.spotify.com/embed/${type}/${id}?utm_source=generator`;

  return (
    <iframe
      style={{ borderRadius: '12px' }}
      src={src}
      width="100%"
      height={height}
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
};

export default Spotify;
