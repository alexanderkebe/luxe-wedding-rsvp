import React from 'react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { Ticket } from 'lucide-react';

function DigitalTicket({ ticketId }) {
  const guestName = localStorage.getItem('wedding_guest_name') || 'Honored Guest';

  return (
    <motion.div 
      className="glass-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', bounce: 0.4 }}
      style={{ 
        textAlign: 'center',
        border: '1px solid var(--color-primary)',
        boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
        <Ticket size={32} color="var(--color-primary)" />
      </div>
      
      <h2 className="headline-md" style={{ marginBottom: '8px' }}>You're on the list!</h2>
      <p style={{ color: 'var(--color-on-surface-variant)', marginBottom: '24px' }}>
        Thank you for RSVPing, {guestName}. Please present this QR code upon arrival at the venue.
      </p>

      <div style={{ 
        background: 'white', 
        padding: '24px', 
        borderRadius: 'var(--rounded-lg)', 
        display: 'inline-block',
        marginBottom: '24px'
      }}>
        <QRCodeSVG 
          value={ticketId} 
          size={200}
          bgColor={"#ffffff"}
          fgColor={"#131313"}
          level={"Q"}
        />
      </div>

      <p className="label-sm" style={{ letterSpacing: '0.2em' }}>
        TICKET ID
      </p>
      <p style={{ fontFamily: 'monospace', fontSize: '18px', color: 'var(--color-primary)', marginTop: '4px' }}>
        {ticketId}
      </p>
    </motion.div>
  );
}

export default DigitalTicket;
