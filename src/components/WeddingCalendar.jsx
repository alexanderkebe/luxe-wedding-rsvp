import React from 'react';
import { motion } from 'framer-motion';

const events = {
  10: { title: "Proposal Anniversary", type: "minor" },
  15: { title: "Family Dinner", type: "minor" },
  20: { title: "Nikah Ceremony", type: "major", highlight: "var(--color-primary)" },
  25: { title: "Henna Night", type: "major", highlight: "var(--color-secondary)" },
  31: { title: "Wedding Reception", type: "main", highlight: "var(--color-primary)" }
};

function WeddingCalendar() {
  const month = "December";
  const year = 2026;
  const daysInMonth = 31;
  const startDay = 2; // Dec 1, 2026 is a Tuesday (0=Sun, 1=Mon, 2=Tue...)

  const calendarDays = [];
  // Fill empty slots before the 1st
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }
  // Fill actual days
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <section className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Save The Date
      </motion.h2>

      <motion.div 
        className="geo-divider" 
        style={{ marginBottom: '40px' }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.4 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="geo-diamond" />
      </motion.div>

      <motion.div 
        className="glass-card"
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
        style={{ padding: '40px 24px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h3 style={{ 
            fontSize: '28px', 
            marginBottom: '4px', 
            color: 'var(--color-primary)',
            letterSpacing: '0.15em'
          }}>
            {month}
          </h3>
          <p style={{ 
            fontSize: '12px', 
            letterSpacing: '0.3em', 
            color: 'var(--color-on-surface-variant)',
            opacity: 0.6
          }}>
            {year}
          </p>
        </div>

        {/* Calendar Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(7, 1fr)', 
          gap: '8px',
          textAlign: 'center'
        }}>
          {/* Day Labels */}
          {dayLabels.map((label, i) => (
            <div key={i} style={{ 
              fontSize: '10px', 
              fontWeight: 600, 
              color: 'var(--color-primary)', 
              opacity: 0.5,
              marginBottom: '12px'
            }}>
              {label}
            </div>
          ))}

          {/* Days */}
          {calendarDays.map((day, i) => {
            const event = day ? events[day] : null;
            return (
              <div key={i} style={{ position: 'relative', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {day && (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    style={{
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '13px',
                      borderRadius: 'var(--rounded-full)',
                      color: event ? '#fff' : 'var(--color-on-surface)',
                      background: event ? (event.highlight || 'var(--color-surface-container-highest)') : 'transparent',
                      border: event?.type === 'minor' ? '1px solid var(--color-primary)' : 'none',
                      opacity: day ? 1 : 0,
                      fontWeight: event ? 600 : 300,
                      boxShadow: event?.type === 'main' ? '0 0 15px var(--color-primary)' : 'none',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    {day}
                    
                    {/* Event Dot Indicator */}
                    {event && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{
                          position: 'absolute',
                          bottom: '-4px',
                          width: '4px',
                          height: '4px',
                          background: 'var(--color-primary)',
                          borderRadius: '50%'
                        }}
                      />
                    )}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Legend / Event List */}
        <div style={{ marginTop: '40px', borderTop: '1px solid var(--glass-border)', paddingTop: '24px' }}>
          {Object.entries(events).map(([day, ev], idx) => (
            <motion.div 
              key={day}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ delay: idx * 0.1 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '16px', 
                marginBottom: '12px' 
              }}
            >
              <div style={{ 
                width: '28px', 
                textAlign: 'right', 
                fontSize: '14px', 
                fontFamily: 'var(--font-family-headline)',
                color: 'var(--color-primary)'
              }}>
                {day}
              </div>
              <div style={{ height: '12px', width: '1px', background: 'var(--glass-border)' }} />
              <div>
                <p style={{ fontSize: '13px', color: 'var(--color-on-surface)', letterSpacing: '0.05em' }}>
                  {ev.title}
                </p>
                {ev.type === 'main' && (
                  <p style={{ fontSize: '9px', textTransform: 'uppercase', color: 'var(--color-primary)', letterSpacing: '0.1em' }}>
                    Main Event
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default WeddingCalendar;
