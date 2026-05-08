import React from 'react';
import { motion } from 'framer-motion';

function Registry() {
  return (
    <section className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >Gifts</motion.h2>
      
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
      
      <motion.div 
        className="glass-card"
        initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', padding: '48px 32px' }}
      >
        <motion.p 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ 
            fontFamily: "'Noto Sans Arabic', serif",
            fontSize: '15px',
            color: 'var(--color-primary)',
            direction: 'rtl',
            marginBottom: '24px'
          }}
        >
          جزاكم الله خيراً
        </motion.p>
        
        <p style={{ color: 'var(--color-on-surface-variant)', marginBottom: '32px', lineHeight: 1.9 }}>
          Your presence at our wedding is the greatest gift of all. However, should you wish to honor us with a gift, a wishing well will be available.
        </p>

        <motion.div 
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ 
            padding: '32px 24px',
            background: 'rgba(201, 168, 76, 0.05)',
            border: '1px solid rgba(201, 168, 76, 0.1)',
            transformOrigin: 'top',
            borderRadius: 'var(--rounded-lg)'
          }}
        >
          <p style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 600 }}>
            Our New Home
          </p>
          <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '14px', lineHeight: 1.8, marginBottom: 0 }}>
            As we embark on this new chapter and move into our first home together, we would be deeply grateful for any contributions toward furnishing our new space or home essentials to help us build our nest.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Registry;
