import React, { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { supabase } from '../utils/supabaseClient';
import { Link } from 'react-router-dom';

function AdminScanner() {
  const [scanResult, setScanResult] = useState(null);
  const [statusMsg, setStatusMsg] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: {width: 250, height: 250} },
      false
    );

    scanner.render(async (decodedText) => {
      // Pause scanning on successful read
      scanner.pause();
      setScanResult(decodedText);
      
      try {
        if (import.meta.env.VITE_SUPABASE_URL) {
          // Verify ticket in database
          const { data, error } = await supabase
            .from('guests')
            .select('*')
            .eq('ticket_id', decodedText)
            .single();

          if (error) throw new Error("Ticket not found");
          
          if (data.status === 'checked_in') {
            setIsError(true);
            setStatusMsg(`Ticket already used! (${data.name})`);
          } else {
            // Update status
            const { error: updateError } = await supabase
              .from('guests')
              .update({ status: 'checked_in', checked_in_at: new Date() })
              .eq('ticket_id', decodedText);
              
            if (updateError) throw updateError;
            
            setIsError(false);
            setStatusMsg(`Check-in successful: ${data.name}`);
          }
        } else {
          // Mock logic
          setIsError(false);
          setStatusMsg(`Mock Scan Success: ${decodedText}`);
        }
      } catch (err) {
        setIsError(true);
        setStatusMsg(err.message);
      }

      // Resume scanning after 3 seconds
      setTimeout(() => {
        setScanResult(null);
        setStatusMsg('');
        scanner.resume();
      }, 3000);

    }, (errorMessage) => {
      // Ignore background read errors
    });

    return () => {
      scanner.clear().catch(error => {
        console.error("Failed to clear scanner", error);
      });
    };
  }, []);

  return (
    <div className="app-container" style={{ padding: '24px' }}>
      <h1 className="headline-md" style={{ marginBottom: '24px', textAlign: 'center' }}>Live Scanner</h1>
      
      <div className="glass-card" style={{ padding: 0, overflow: 'hidden', background: 'white' }}>
        <div id="reader" style={{ width: '100%', border: 'none' }}></div>
      </div>

      {statusMsg && (
        <div style={{ 
          marginTop: '24px', 
          padding: '16px', 
          borderRadius: 'var(--rounded-md)',
          background: isError ? 'var(--color-error-container)' : 'var(--color-primary-container)',
          color: isError ? 'var(--color-on-error-container)' : 'var(--color-on-primary-container)',
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          {statusMsg}
        </div>
      )}

      <div style={{ marginTop: '32px' }}>
        <Link to="/admin" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default AdminScanner;
