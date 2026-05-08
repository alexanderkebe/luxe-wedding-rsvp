import React, { useState } from 'react';
import { motion } from 'framer-motion';

const photos = [
  { src: '/1.png', span: 'tall' },
  { src: '/2.png', span: 'normal' },
  { src: '/3.png', span: 'normal' },
  { src: '/4.png', span: 'normal' },
  { src: '/5.png', span: 'tall' },
  { src: '/6.png', span: 'normal' },
  { src: '/7.png', span: 'normal' },
  { src: '/8.png', span: 'normal' },
  { src: '/9.png', span: 'tall' },
  { src: '/10.png', span: 'tall' },
];

function PhotoItem({ photo, index }) {
  const [tapped, setTapped] = useState(false);

  const handleTap = () => {
    setTapped(prev => !prev);
  };

  const isTall = photo.span === 'tall';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={handleTap}
      style={{
        gridRow: isTall ? 'span 2' : 'span 1',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        minHeight: isTall ? '400px' : '190px',
      }}
    >
      {/* The image */}
      <img
        src={photo.src}
        alt={`Wedding photo ${index + 1}`}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          filter: tapped ? 'grayscale(0%) brightness(1)' : 'grayscale(100%) brightness(0.7)',
          transition: 'filter 0.6s ease',
        }}
        className="gallery-img"
      />

      {/* Gold shimmer overlay on B&W state */}
      <div
        className={`gallery-overlay ${tapped ? 'tapped' : ''}`}
        style={{
          position: 'absolute',
          inset: 0,
          background: tapped
            ? 'transparent'
            : 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 50%, rgba(201,168,76,0.05) 100%)',
          transition: 'background 0.6s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Photo number badge */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ delay: index * 0.08 + 0.4 }}
        style={{
          position: 'absolute',
          bottom: '8px',
          right: '10px',
          fontSize: '9px',
          letterSpacing: '0.15em',
          color: 'rgba(255,255,255,0.4)',
          fontFamily: 'var(--font-family-body)',
          fontWeight: 500,
          pointerEvents: 'none',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </motion.div>
    </motion.div>
  );
}

function PhotoGallery() {
  return (
    <section className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >Gallery</motion.h2>

      <motion.div
        className="geo-divider"
        style={{ marginBottom: '48px' }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.4 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="geo-diamond" />
      </motion.div>

      {/* Masonry-style grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridAutoRows: '190px',
        gap: '6px',
      }}>
        {photos.map((photo, index) => (
          <PhotoItem key={index} photo={photo} index={index} />
        ))}
      </div>

      {/* Hint text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{
          textAlign: 'center',
          marginTop: '20px',
          fontSize: '10px',
          letterSpacing: '0.2em',
          color: 'var(--color-on-surface-variant)',
          opacity: 0.5,
          textTransform: 'uppercase',
        }}
      >
        Tap a photo to see in color
      </motion.p>
    </section>
  );
}

export default PhotoGallery;
