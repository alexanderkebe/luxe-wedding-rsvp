import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section 
      className="section" 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        textAlign: 'center',
        backgroundImage: "linear-gradient(rgba(9,13,11,0.25) 0%, transparent 25%, transparent 45%, rgba(9,13,11,0.5) 65%, rgba(9,13,11,0.92) 100%), url('/landing-pic.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        padding: '40px 32px 40px',
        overflow: 'hidden'
      }}
    >
      {/* Basmala in Arabic at the top */}
      <motion.div
        initial={{ opacity: 0, filter: 'blur(10px)', y: -30 }}
        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
        style={{ zIndex: 1, textAlign: 'center' }}
      >
        <p style={{ 
          fontFamily: "'Noto Sans Arabic', 'Amiri', serif",
          fontSize: '16px',
          color: 'rgba(201, 168, 76, 0.8)',
          letterSpacing: '0.02em',
          fontWeight: 400,
          direction: 'rtl'
        }}>
          بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
        </p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          style={{
            fontSize: '9px',
            color: 'rgba(255,255,255,0.45)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginTop: '8px',
            fontFamily: 'var(--font-family-body)'
          }}
        >
          In the Name of Allah, the Most Gracious, the Most Merciful
        </motion.p>
      </motion.div>

      {/* Names at the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ zIndex: 1 }}
      >
        {/* Decorative geometric element */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.35 }}
          transition={{ duration: 1.2, delay: 1.8, ease: 'easeOut' }}
          style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}
        >
          <div style={{ width: '40px', height: '1px', background: 'var(--color-primary)' }} />
          <motion.div 
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: 45, scale: 1 }}
            transition={{ duration: 0.6, delay: 2.2, type: 'spring' }}
            style={{ width: '6px', height: '6px', background: 'var(--color-primary)' }} 
          />
          <div style={{ width: '40px', height: '1px', background: 'var(--color-primary)' }} />
        </motion.div>

        <h1 className="display-lg" style={{ marginBottom: '12px', color: '#ffffff', overflow: 'hidden' }}>
          <motion.span
            initial={{ y: 60, opacity: 0, filter: 'blur(8px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ display: 'block' }}
          >
            Ahmed
          </motion.span>
          <motion.span 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 0.6, delay: 1.2, type: 'spring', stiffness: 200 }}
            style={{ 
              fontSize: '20px', 
              fontFamily: "'Amiri', serif",
              fontStyle: 'italic',
              display: 'block',
              margin: '4px 0'
            }}
          >&</motion.span>
          <motion.span
            initial={{ y: 60, opacity: 0, filter: 'blur(8px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ display: 'block' }}
          >
            Fatima
          </motion.span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{ 
            color: 'rgba(255,255,255,0.5)', 
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginTop: '24px',
            fontFamily: 'var(--font-family-body)',
            fontWeight: 400
          }}
        >
          Request the honor of your presence
        </motion.p>

        {/* Bottom ornament */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.2, scaleX: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          style={{ marginTop: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
        >
          <div style={{ width: '24px', height: '1px', background: '#fff' }} />
          <div style={{ width: '4px', height: '4px', border: '1px solid rgba(255,255,255,0.5)', transform: 'rotate(45deg)' }} />
          <div style={{ width: '24px', height: '1px', background: '#fff' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
