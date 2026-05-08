import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const labels = { days: 'Days', hours: 'Hours', minutes: 'Min', seconds: 'Sec' };

  return (
    <section className="section" style={{ paddingTop: '0', paddingBottom: '48px' }}>
      <motion.div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          padding: '40px 24px',
          borderTop: '1px solid rgba(201, 168, 76, 0.15)',
          borderBottom: '1px solid rgba(201, 168, 76, 0.15)',
        }}
        initial={{ opacity: 0, scaleX: 0.5 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {Object.keys(timeLeft).length ? Object.keys(timeLeft).map((interval, index) => (
          <motion.div 
            key={interval} 
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <AnimatePresence mode="popLayout">
              <motion.div 
                key={timeLeft[interval]}
                initial={{ y: -10, opacity: 0, filter: 'blur(4px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: 10, opacity: 0, filter: 'blur(4px)' }}
                transition={{ duration: 0.3 }}
                style={{ 
                  fontSize: '36px', 
                  fontFamily: 'var(--font-family-headline)', 
                  color: 'var(--color-primary)',
                  fontWeight: 400,
                  lineHeight: 1.1
                }}
              >
                {timeLeft[interval].toString().padStart(2, '0')}
              </motion.div>
            </AnimatePresence>
            <span style={{
              fontSize: '9px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-on-surface-variant)',
              marginTop: '8px',
              fontWeight: 500
            }}>{labels[interval]}</span>
          </motion.div>
        )) : <span style={{ color: 'var(--color-primary)' }}>Alhamdulillah — It's Time!</span>}
      </motion.div>
    </section>
  );
}

export default CountdownTimer;
