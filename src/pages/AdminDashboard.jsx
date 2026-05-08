import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { Link } from 'react-router-dom';
import { Users, CheckCircle, Clock } from 'lucide-react';

function AdminDashboard() {
  const [stats, setStats] = useState({ total: 0, attending: 0, checkedIn: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from Supabase
    // For now, we mock it or fetch if Supabase is connected
    const fetchStats = async () => {
      try {
        if (import.meta.env.VITE_SUPABASE_URL) {
          const { data, error } = await supabase.from('guests').select('*');
          if (error) throw error;
          
          const attending = data.filter(g => g.attending === 'yes').length;
          const checkedIn = data.filter(g => g.status === 'checked_in').length;
          
          setStats({ total: data.length, attending, checkedIn });
        } else {
          // Mock data
          setStats({ total: 150, attending: 120, checkedIn: 45 });
        }
      } catch (err) {
        console.error('Error fetching stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="app-container" style={{ padding: '24px' }}>
      <h1 className="headline-lg" style={{ marginBottom: '32px' }}>Admin Dashboard</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px', marginBottom: '32px' }}>
        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
          <div style={{ marginRight: '16px', color: 'var(--color-primary)' }}><Users size={32} /></div>
          <div>
            <p className="label-sm">Total RSVPs</p>
            <p className="display-lg" style={{ fontSize: '32px' }}>{loading ? '...' : stats.total}</p>
          </div>
        </div>
        
        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
          <div style={{ marginRight: '16px', color: 'var(--color-secondary)' }}><CheckCircle size={32} /></div>
          <div>
            <p className="label-sm">Attending</p>
            <p className="display-lg" style={{ fontSize: '32px' }}>{loading ? '...' : stats.attending}</p>
          </div>
        </div>

        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
          <div style={{ marginRight: '16px', color: 'var(--color-tertiary)' }}><Clock size={32} /></div>
          <div>
            <p className="label-sm">Checked In</p>
            <p className="display-lg" style={{ fontSize: '32px' }}>{loading ? '...' : stats.checkedIn}</p>
          </div>
        </div>
      </div>

      <Link to="/admin/scanner" className="btn btn-primary" style={{ textDecoration: 'none' }}>
        Open QR Scanner
      </Link>
      
      <div style={{ marginTop: '16px' }}>
        <Link to="/" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
          Back to Site
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
