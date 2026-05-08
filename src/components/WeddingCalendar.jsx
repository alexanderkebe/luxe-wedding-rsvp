import React from 'react';
import { motion } from 'framer-motion';

const events = {
  10: { title: "Proposal Anniversary", type: "minor" },
  15: { title: "Family Dinner", type: "minor" },
  20: { title: "Nikah Ceremony", type: "major", highlight: "var(--color-primary)", lamp: true },
  25: { title: "Henna Night", type: "major", highlight: "var(--color-secondary)", lamp: true },
  31: { title: "Wedding Reception", type: "main", highlight: "var(--color-primary)", lamp: true }
};

// Simple Stylized Lantern Icon
const Lantern = ({ color = "var(--color-primary)" }) => (
  <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: `drop-shadow(0 0 4px ${color})` }}>
    <path d="M7 2V4M3 6H11L13 14H1L3 6ZM5 16H9L10 18H4L5 16Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="7" cy="10" r="1.5" fill={color}>
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

function WeddingCalendar() {
  const month = "December";
  const year = 2026;
  const daysInMonth = 31;
  const startDay = 2; // Dec 1, 2026 is a Tuesday (0=Sun, 1=Mon, 2=Tue...)

  const calendarDays = [];
  for (let i = 0; i < startDay; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

  const dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <section className="section" id="calendar">
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
        style={{ padding: '40px 24px', position: 'relative' }}
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

          {calendarDays.map((day, i) => {
            const event = day ? events[day] : null;
            return (
              <div key={i} style={{ position: 'relative', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {day && (
                  <>
                    {/* The "Lamp" Lamp effect for important days */}
                    {event?.lamp && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        style={{ position: 'absolute', top: '-12px', zIndex: 2 }}
                      >
                        <Lantern color={event.highlight} />
                      </motion.div>
                    )}

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
                        opacity: 1,
                        fontWeight: event ? 600 : 300,
                        boxShadow: event?.type === 'main' ? `0 0 20px ${event.highlight}` : 'none',
                        position: 'relative',
                        zIndex: 1
                      }}
                    >
                      {day}
                      
                      {event && !event.lamp && (
                        <div style={{
                          position: 'absolute',
                          bottom: '-4px',
                          width: '4px',
                          height: '4px',
                          background: 'var(--color-primary)',
                          borderRadius: '50%'
                        }} />
                      )}
                    </motion.div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Legend */}
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
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '13px', color: 'var(--color-on-surface)', letterSpacing: '0.05em' }}>
                  {ev.title}
                </p>
                {ev.type === 'main' && (
                  <p style={{ fontSize: '9px', textTransform: 'uppercase', color: 'var(--color-primary)', letterSpacing: '0.1em' }}>
                    Main Event
                  </p>
                )}
              </div>
              {ev.lamp && <Lantern color={ev.highlight} />}
            </motion.div>
          ))}
        </div>

        {/* Add to Calendar Button — Moved here */}
        <motion.div 
          style={{ marginTop: '32px', textAlign: 'center' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a 
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ahmed+and+Fatima+Wedding" 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-primary"
            style={{ borderRadius: 'var(--rounded-full)', fontSize: '12px' }}
          >
            Add to Calendar
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default WeddingCalendar;
