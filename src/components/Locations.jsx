import React from 'react';
import { motion } from 'framer-motion';

function Locations() {
  const locations = [
    {
      title: "Bride's House",
      titleAr: "بيت العروس",
      time: "07:00 AM",
      address: "Bole Medhanialem, Addis Ababa",
      link: "https://www.google.com/maps/search/Bole+Medhanialem+Church+Addis+Ababa"
    },
    {
      title: "Groom's House",
      titleAr: "بيت العريس",
      time: "09:00 AM",
      address: "CMC Michael, Addis Ababa",
      link: "https://www.google.com/maps/search/CMC+Michael+Addis+Ababa"
    },
    {
      title: "The Grand Venue",
      titleAr: "قاعة الاحتفال",
      time: "04:00 PM",
      address: "Sheraton Addis, Taitu St",
      link: "https://www.google.com/maps/search/Sheraton+Addis+Taitu+St+Addis+Ababa"
    }
  ];

  return (
    <section className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >Locations</motion.h2>
      
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
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {locations.map((loc, index) => (
          <motion.div 
            key={index}
            className="glass-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ margin: '-30px' }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(201, 168, 76, 0.3)' }}
            style={{ padding: '32px', transition: 'border-color 0.3s' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <span style={{ 
                  fontSize: '10px', 
                  letterSpacing: '0.2em', 
                  color: 'var(--color-primary)', 
                  fontWeight: 500,
                  textTransform: 'uppercase'
                }}>{loc.time}</span>
                <h3 className="headline-md" style={{ marginTop: '8px', marginBottom: 0, fontSize: '20px' }}>{loc.title}</h3>
              </div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.35 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                style={{
                  fontFamily: "'Noto Sans Arabic', serif",
                  fontSize: '13px',
                  color: 'var(--color-primary)',
                  direction: 'rtl',
                  marginTop: '20px'
                }}
              >{loc.titleAr}</motion.span>
            </div>
            
            <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '13px', marginBottom: '20px' }}>{loc.address}</p>
            
            <motion.a 
              href={loc.link} 
              target="_blank" 
              rel="noreferrer" 
              whileHover={{ opacity: 1 }}
              style={{ 
                color: 'var(--color-on-surface)', 
                textDecoration: 'none',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 500,
                borderBottom: '1px solid rgba(255,255,255,0.15)',
                paddingBottom: '2px',
                opacity: 0.7,
                transition: 'opacity 0.3s'
              }}
            >
              View on Maps
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Locations;
