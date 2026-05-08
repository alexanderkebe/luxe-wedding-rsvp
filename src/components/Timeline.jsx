import React from 'react';
import { motion } from 'framer-motion';

function Timeline() {
  const events = [
    { time: "14:00", title: "Nikah Ceremony", titleAr: "عقد النكاح", desc: "The sacred union and signing of the contract." },
    { time: "16:00", title: "Reception", titleAr: "الاستقبال", desc: "Refreshments and gathering of families." },
    { time: "18:00", title: "Dinner", titleAr: "العشاء", desc: "A curated Halal multi-course meal." },
    { time: "20:00", title: "Duas & Farewell", titleAr: "الدعاء والوداع", desc: "Blessings from family and evening prayer." }
  ];

  return (
    <section className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >Timeline</motion.h2>
      
      <motion.div 
        className="geo-divider" 
        style={{ marginBottom: '56px' }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.4 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="geo-diamond" />
      </motion.div>
      
      <div style={{ position: 'relative', maxWidth: '380px', margin: '0 auto' }}>
        {/* Vertical Line — animated height */}
        <motion.div 
          style={{ 
            position: 'absolute', 
            left: '0', 
            top: '4px', 
            width: '1px', 
            background: 'linear-gradient(to bottom, var(--color-primary), transparent)',
            opacity: 0.25,
            transformOrigin: 'top'
          }}
          initial={{ scaleY: 0, height: '100%' }}
          whileInView={{ scaleY: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />

        {events.map((event, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: 40, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ margin: '-20px' }}
            transition={{ duration: 0.7, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ position: 'relative', marginBottom: '48px', paddingLeft: '28px' }}
          >
            {/* Diamond marker — pops in */}
            <motion.div 
              style={{ 
                position: 'absolute', 
                left: '-3px', 
                top: '8px', 
                width: '7px', 
                height: '7px', 
                background: 'var(--color-primary)',
                opacity: 0.6
              }}
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 45 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.3, type: 'spring', stiffness: 300 }}
            />
            
            <span style={{ 
              fontSize: '10px',
              letterSpacing: '0.2em',
              color: 'var(--color-primary)',
              fontWeight: 500,
              display: 'block',
              marginBottom: '6px'
            }}>
              {event.time}
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
              <h3 className="headline-md" style={{ margin: 0, fontSize: '20px' }}>
                {event.title}
              </h3>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                style={{
                  fontFamily: "'Noto Sans Arabic', serif",
                  fontSize: '13px',
                  color: 'var(--color-primary)',
                  direction: 'rtl'
                }}
              >{event.titleAr}</motion.span>
            </div>
            <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '13px', lineHeight: 1.7 }}>
              {event.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
