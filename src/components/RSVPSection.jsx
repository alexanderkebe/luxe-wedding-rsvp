import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../utils/supabaseClient';

function RSVPSection({ onRsvpSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    meal_preference: 'halal'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const ticketId = `TKT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

      if (import.meta.env.VITE_SUPABASE_URL) {
        const { error: sbError } = await supabase
          .from('guests')
          .insert([{ ...formData, ticket_id: ticketId }]);
        if (sbError) throw sbError;
      }

      localStorage.setItem('wedding_ticket_id', ticketId);
      localStorage.setItem('wedding_guest_name', formData.name);
      onRsvpSuccess(ticketId);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section" id="rsvp">
      <h2 className="section-title">RSVP</h2>

      <div className="geo-divider" style={{ marginBottom: '48px' }}>
        <div className="geo-diamond" />
      </div>

      <motion.div 
        className="glass-card"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
        style={{ padding: '40px 28px' }}
      >
        <p style={{ textAlign: 'center', color: 'var(--color-on-surface-variant)', marginBottom: '36px', fontSize: '12px', letterSpacing: '0.12em' }}>
          Please respond by November 1st
        </p>

        {error && (
          <div style={{ background: 'var(--color-error-container)', color: 'var(--color-on-error-container)', padding: '14px', marginBottom: '24px', fontSize: '13px', borderRadius: 'var(--rounded-md)' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="form-input" 
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="form-input" 
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Attendance</label>
            <div style={{ display: 'flex', gap: '1px' }}>
              <label style={{ 
                flex: 1, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                padding: '16px', 
                cursor: 'pointer', 
                background: formData.attending === 'yes' ? 'var(--color-primary)' : 'var(--color-surface-container)', 
                color: formData.attending === 'yes' ? 'var(--color-on-primary)' : 'var(--color-on-surface-variant)', 
                transition: 'all 0.3s ease',
                fontSize: '11px',
                letterSpacing: '0.2em',
                fontWeight: 500,
                textTransform: 'uppercase'
              }}>
                <input type="radio" name="attending" value="yes" checked={formData.attending === 'yes'} onChange={handleChange} style={{ display: 'none' }} />
                Accept
              </label>
              <label style={{ 
                flex: 1, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                padding: '16px', 
                cursor: 'pointer', 
                background: formData.attending === 'no' ? 'var(--color-primary)' : 'var(--color-surface-container)', 
                color: formData.attending === 'no' ? 'var(--color-on-primary)' : 'var(--color-on-surface-variant)', 
                transition: 'all 0.3s ease',
                fontSize: '11px',
                letterSpacing: '0.2em',
                fontWeight: 500,
                textTransform: 'uppercase'
              }}>
                <input type="radio" name="attending" value="no" checked={formData.attending === 'no'} onChange={handleChange} style={{ display: 'none' }} />
                Decline
              </label>
            </div>
          </div>

          {formData.attending === 'yes' && (
            <motion.div 
              className="form-group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <label className="form-label">Meal Preference</label>
              <select 
                name="meal_preference" 
                className="form-input" 
                value={formData.meal_preference}
                onChange={handleChange}
                style={{ appearance: 'none' }}
              >
                <option value="halal">Halal</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
              </select>
            </motion.div>
          )}

          <button type="submit" className="btn btn-primary" disabled={loading} style={{ marginTop: '16px' }}>
            {loading ? 'Sending...' : 'Confirm RSVP'}
          </button>
        </form>
      </motion.div>
    </section>
  );
}

export default RSVPSection;
