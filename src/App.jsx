import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Story from './components/Story';
import CountdownTimer from './components/CountdownTimer';
import PhotoGallery from './components/PhotoGallery';
import Locations from './components/Locations';
import Timeline from './components/Timeline';
import Profiles from './components/Profiles';
import Registry from './components/Registry';
import RSVPSection from './components/RSVPSection';
import TelegramBot from './components/TelegramBot';
import DigitalTicket from './components/DigitalTicket';

import WeddingCalendar from './components/WeddingCalendar';

function App() {
  const [ticketId, setTicketId] = useState(null);

  useEffect(() => {
    // Check if the user already RSVP'd
    const savedTicket = localStorage.getItem('wedding_ticket_id');
    if (savedTicket) {
      setTicketId(savedTicket);
    }
  }, []);

  return (
    <div className="app-container">
      <Hero />
      <Story />
      <CountdownTimer targetDate="2026-12-31T15:00:00" />
      <WeddingCalendar />
      
      {ticketId ? (
        <div className="section" id="ticket">
          <DigitalTicket ticketId={ticketId} />
        </div>
      ) : (
        <RSVPSection onRsvpSuccess={(id) => setTicketId(id)} />
      )}

      <Profiles />
      <Locations />
      <Timeline />
      <PhotoGallery />
      <Registry />
      <TelegramBot />
      
      <footer className="section" style={{ textAlign: 'center', paddingBottom: '56px' }}>
        <div className="geo-divider" style={{ marginBottom: '32px' }}>
          <div className="geo-diamond" />
        </div>
        <p style={{ 
          fontFamily: "'Noto Sans Arabic', 'Amiri', serif",
          fontSize: '14px',
          color: 'var(--color-primary)',
          opacity: 0.4,
          direction: 'rtl',
          marginBottom: '16px'
        }}>
          بارك الله لكما وبارك عليكما
        </p>
        <p style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'var(--color-on-surface-variant)', opacity: 0.4, textTransform: 'uppercase' }}>
          Ahmed & Fatima — 2026
        </p>
      </footer>
    </div>
  );
}

export default App;
