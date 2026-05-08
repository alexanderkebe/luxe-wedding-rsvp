import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const slideUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' } }
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(4px)' },
  visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.6, ease: 'easeOut' } }
};

function Story() {
  return (
    <section className="section">
      <motion.div 
        className="glass-card"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: '-50px' }}
        style={{ textAlign: 'center', padding: '48px 32px' }}
      >
        {/* Arabic quote */}
        <motion.p 
          variants={slideUp}
          style={{ 
            fontFamily: "'Noto Sans Arabic', 'Amiri', serif",
            fontSize: '18px',
            color: 'var(--color-primary)',
            opacity: 0.7,
            direction: 'rtl',
            marginBottom: '8px'
          }}
        >
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
        </motion.p>
        <motion.p 
          variants={slideUp}
          style={{ 
            fontSize: '10px',
            color: 'var(--color-on-surface-variant)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '32px',
            opacity: 0.7
          }}
        >
          "He created for you mates from among yourselves" — Ar-Rum 30:21
        </motion.p>

        {/* Geometric divider */}
        <motion.div 
          variants={scaleIn}
          className="geo-divider" 
          style={{ marginBottom: '32px' }}
        >
          <div className="geo-diamond" />
        </motion.div>
        
        <motion.h2 variants={slideUp} className="section-title">Our Story</motion.h2>
        
        <motion.p variants={slideUp} style={{ color: 'var(--color-on-surface-variant)', marginBottom: '20px', lineHeight: 2 }}>
          With gratitude to Allah, we invite you to share in the joy of our union. What began as a blessing has blossomed into a beautiful journey of faith, love, and endless support.
        </motion.p>
        <motion.p variants={slideUp} style={{ color: 'var(--color-on-surface-variant)', lineHeight: 2 }}>
          Your presence in our lives has meant the world to us, and we cannot imagine taking this next step without our closest loved ones by our side. May Allah bless this gathering.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Story;
