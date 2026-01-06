import React from 'react';

const YouTube = ({ id, width = 560, height = 315 }) => {
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
        <span>YouTube embed not available</span>
      </div>
    );
  }

  const src = `https://www.youtube.com/embed/${id}`;

  return (
    <iframe
      width={width}
      height={height}
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      loading="lazy"
    />
  );
};

export default YouTube;
