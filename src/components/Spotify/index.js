import React from 'react';

const DEFAULT_HEIGHTS = {
  track: 352,
  album: 500,
  playlist: 500,
  artist: 352,
  episode: 352,
  show: 352,
};

const Spotify = ({ id, type = 'track', height }) => {
  const resolvedHeight = height || DEFAULT_HEIGHTS[type] || 352;

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
          height: resolvedHeight,
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
      height={resolvedHeight}
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
};

export default Spotify;
