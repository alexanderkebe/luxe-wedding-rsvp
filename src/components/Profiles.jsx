import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
    transition: { duration: 0.7, delay: i * 0.25, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

function Profiles() {
  return (
    <section className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >The Couple</motion.h2>
      
      {/* Geometric divider */}
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px', margin: '0 auto' }}>
        {/* Bride */}
        <motion.div 
          className="glass-card"
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-30px' }}
          whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(201, 168, 76, 0.15)' }}
          style={{ textAlign: 'center', padding: '40px 32px' }}
        >
          {/* Circular Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
            style={{ 
              width: '120px', 
              height: '120px', 
              borderRadius: '50%', 
              margin: '0 auto 24px',
              border: '2px solid var(--color-primary)',
              padding: '4px',
              background: 'rgba(201, 168, 76, 0.1)'
            }}
          >
            <img 
              src="/bride.png" 
              alt="Fatima" 
              style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.5, scale: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontFamily: "'Noto Sans Arabic', serif",
              fontSize: '14px',
              color: 'var(--color-primary)',
              direction: 'rtl',
              marginBottom: '12px'
            }}
          >العروس</motion.p>
          <motion.h3 
            className="headline-md" 
            style={{ letterSpacing: '0.15em', marginBottom: '16px' }}
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >Fatima</motion.h3>
          <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '13px', lineHeight: 1.8 }}>
            A soul of grace and kindness, beginning a new journey of faith and love.
          </p>
        </motion.div>

        {/* Groom */}
        <motion.div 
          className="glass-card"
          custom={1}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-30px' }}
          whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(201, 168, 76, 0.15)' }}
          style={{ textAlign: 'center', padding: '40px 32px' }}
        >
          {/* Circular Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6, type: 'spring' }}
            style={{ 
              width: '120px', 
              height: '120px', 
              borderRadius: '50%', 
              margin: '0 auto 24px',
              border: '2px solid var(--color-primary)',
              padding: '4px',
              background: 'rgba(201, 168, 76, 0.1)'
            }}
          >
            <img 
              src="/groom.png" 
              alt="Ahmed" 
              style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.5, scale: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            style={{
              fontFamily: "'Noto Sans Arabic', serif",
              fontSize: '14px',
              color: 'var(--color-primary)',
              direction: 'rtl',
              marginBottom: '12px'
            }}
          >العريس</motion.p>
          <motion.h3 
            className="headline-md" 
            style={{ letterSpacing: '0.15em', marginBottom: '16px' }}
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >Ahmed</motion.h3>
          <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '13px', lineHeight: 1.8 }}>
            A pillar of strength and devotion, guided by love and tradition.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Profiles;
