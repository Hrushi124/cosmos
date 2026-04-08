import React, { useState, useEffect } from 'react';
import { getPanchangStrings } from '../utils/panchang';

const today = new Date();

export default function DailyPanchang() {
  const [panchang, setPanchang] = useState(null);

  useEffect(() => {
    try {
      setPanchang(getPanchangStrings(today));
    } catch (e) {
      console.error(e);
      setPanchang({ tithi: 'Calculating…', nakshatra: 'Calculating…', yoga: 'Calculating…', karana: 'Calculating…' });
    }
  }, []);

  const dateStr = today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const panchangItems = panchang ? [
    { label: 'Tithi',     value: panchang.tithi,     icon: 'brightness_4'  },
    { label: 'Nakshatra', value: panchang.nakshatra,  icon: 'stars'         },
    { label: 'Yoga',      value: panchang.yoga,       icon: 'self_improvement' },
    { label: 'Karana',    value: panchang.karana,     icon: 'casino'        },
  ] : [];

  const timings = [
    { label: 'Sunrise',   value: '06:12', icon: 'wb_sunny',      color: '#835422' },
    { label: 'Sunset',    value: '18:34', icon: 'flare',          color: '#835422' },
    { label: 'Moonrise',  value: '23:48', icon: 'nights_stay',    color: '#243d68' },
    { label: 'Moonset',   value: '12:51', icon: 'brightness_3',   color: '#243d68' },
  ];

  const auspicious = [
    { label: 'Abhijit Muhurat', value: '11:32 – 12:18' },
    { label: 'Amrit Kaal',      value: '22:15 – 23:51' },
  ];

  const inauspicious = [
    { label: 'Rahu Kaal',   value: '13:30 – 14:56' },
    { label: 'Gulika Kaal', value: '09:12 – 10:38' },
  ];

  const cardStyle = {
    background: '#f5f3f3', borderRadius: '20px', padding: '28px',
    border: '1px solid rgba(225,191,182,0.15)',
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Page header */}
      <div style={{ marginBottom: '36px' }}>
        <h1 style={{ fontFamily: 'Noto Serif, serif', fontSize: '48px', color: '#761b00', margin: '0 0 8px', lineHeight: 1.1 }}>
          {dateStr}
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.15em',
            background: '#f5f3f3', color: '#8d7169', padding: '4px 12px', borderRadius: '999px',
          }}>Ashvina • Krishna Paksha</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#835422', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>location_on</span>
            New Delhi, India
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '20px' }}>

        {/* Core Panchanga card – 8 columns */}
        <div style={{ gridColumn: 'span 8', ...cardStyle, position: 'relative', overflow: 'hidden' }}>
          <span className="material-symbols-outlined" style={{
            position: 'absolute', top: '16px', right: '16px',
            fontSize: '100px', color: '#761b00', opacity: 0.07,
          }}>auto_awesome</span>
          <h2 style={{ fontFamily: 'Noto Serif, serif', fontSize: '18px', color: '#8d7169', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ display: 'block', width: '28px', height: '1px', background: '#761b00' }}/>
            Core Panchanga
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 24px' }}>
            {panchangItems.map(({ label, value, icon }) => (
              <div key={label}>
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#8d7169', margin: '0 0 4px' }}>{label}</p>
                <p style={{ fontFamily: 'Noto Serif, serif', fontSize: '26px', color: '#761b00', margin: '0 0 2px' }}>{value || '…'}</p>
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px', color: '#8d7169', margin: 0 }}>Calculated dynamically</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timings card – 4 columns */}
        <div style={{ gridColumn: 'span 4', ...cardStyle, background: '#eae8e7' }}>
          <h2 style={{ fontFamily: 'Noto Serif, serif', fontSize: '16px', color: '#59413b', marginBottom: '20px' }}>Celestial Transitions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {timings.map(({ label, value, icon, color }, i) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '14px', borderBottom: i < timings.length - 1 ? '1px solid rgba(225,191,182,0.25)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="material-symbols-outlined" style={{ color, fontSize: '18px' }}>{icon}</span>
                  <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#1b1c1c' }}>{label}</span>
                </div>
                <span style={{ fontFamily: 'Noto Serif, serif', fontSize: '18px', color: '#761b00', fontWeight: 700 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Auspicious timings – 6 columns */}
        <div style={{ gridColumn: 'span 6', ...cardStyle }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <span className="material-symbols-outlined" style={{ color: '#835422' }}>stars</span>
            <h2 style={{ fontFamily: 'Noto Serif, serif', fontSize: '18px', color: '#59413b', margin: 0 }}>Auspicious Timings</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {auspicious.map(({ label, value }) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', background: '#fff', borderRadius: '999px', border: '1px solid rgba(131,84,34,0.08)' }}>
                <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px', color: '#1b1c1c' }}>{label}</span>
                <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#835422' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Inauspicious timings – 6 columns */}
        <div style={{ gridColumn: 'span 6', ...cardStyle, borderLeft: '3px solid rgba(36,61,104,0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <span className="material-symbols-outlined" style={{ color: '#243d68' }}>error</span>
            <h2 style={{ fontFamily: 'Noto Serif, serif', fontSize: '18px', color: '#59413b', margin: 0 }}>Inauspicious Periods</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {inauspicious.map(({ label, value }) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', background: 'rgba(251,249,248,0.6)', borderRadius: '999px' }}>
                <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px', color: '#1b1c1c' }}>{label}</span>
                <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#243d68' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Banner quote – 12 columns */}
        <div style={{ gridColumn: 'span 12', borderRadius: '20px', overflow: 'hidden', height: '200px', position: 'relative' }}>
          <img
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(60%)' }}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjvLkf5gbrYw-pV9jPR4O1H7giig_mbusDRl4aohxfTysffHgl7mfXGRZwfn73BlMZyV5GKNK3IuFHHbAfrcbGdyHBOMkyeDZPo4dQcJPSJ3zPYBAPJ_yICRMenTomrxaZeCb_qC1x5Ohb3LhHTMkztXHf0VWisnHuRYxx23trORPYVXyvVcuVlqD1Sv9tRg-CWBN5WzpzotqsiB8o8fYlzdrkhXPYTaj1pwFCXh_7NsYt9cMhRIUn1G65zXR2qafEQCzWLqiqurc"
            alt="Cosmic night sky"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(118,27,0,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', padding: '24px 32px', background: 'rgba(251,249,248,0.92)', borderRadius: '16px', maxWidth: '480px' }}>
              <p style={{ fontFamily: 'Noto Serif, serif', fontStyle: 'italic', color: '#761b00', fontSize: '18px', margin: '0 0 6px' }}>
                "Time is the substance of which I am made."
              </p>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#8d7169', margin: 0 }}>
                Sacred Chronometer Observations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
