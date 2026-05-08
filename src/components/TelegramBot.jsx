import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

function TelegramBot() {
  return (
    <section className="section">
      <motion.div 
        className="glass-card"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
        style={{ 
          textAlign: 'center',
          padding: '48px 32px'
        }}
      >
        <h2 className="headline-md" style={{ marginBottom: '16px' }}>Share Your Wishes</h2>
        <p style={{ color: 'var(--color-on-surface-variant)', margin: '0 0 32px', lineHeight: 1.9, fontSize: '14px' }}>
          Send your blessings, photos, and video messages through our Telegram Bot. May Allah bless you for your kind words.
        </p>
        
        <a href="https://t.me/LuxeMatrimonyBot" target="_blank" rel="noreferrer" className="btn btn-primary">
          <Send size={16} />
          Open Telegram Bot
        </a>
      </motion.div>
    </section>
  );
}

export default TelegramBot;
