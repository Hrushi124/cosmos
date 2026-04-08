import React, { useState } from 'react';

export default function Settings() {
  const [lat, setLat] = useState('28.6139');
  const [lng, setLng] = useState('77.2090');
  const [tz, setTz] = useState('+05:30 (IST)');
  const [dst, setDst] = useState(false);
  const [ayanamsa, setAyanamsa] = useState('Lahiri (Chitra Paksha)');
  const [lang, setLang] = useState('English');

  const inputStyle = {
    width: '100%', padding: '14px 16px', borderRadius: '10px', border: 'none',
    background: '#eae8e7', fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: '15px', color: '#1b1c1c', outline: 'none', boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block', marginBottom: '6px',
    fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '10px',
    fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8d7169',
  };

  const cardStyle = {
    background: '#f5f3f3', borderRadius: '16px', padding: '28px',
    border: '1px solid rgba(225,191,182,0.15)',
  };

  const languages = ['English', 'Hindi (हिन्दी)', 'Sanskrit (संस्कृतम्)', 'Marathi (मराठी)'];

  return (
    <section style={{ maxWidth: '900px', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      {/* Header */}
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontFamily: 'Noto Serif, serif', fontSize: '44px', color: '#1b1c1c', margin: '0 0 8px' }}>Location Identity</h1>
        <p style={{ color: '#59413b', fontSize: '15px', margin: 0, lineHeight: 1.6 }}>
          Vedic calculations require precise coordinates to align the celestial sphere with your earthly position.
        </p>
      </header>

      {/* Search + Coordinates */}
      <div style={{ ...cardStyle, marginBottom: '24px' }}>
        {/* Global search */}
        <div style={{ marginBottom: '28px' }}>
          <label style={labelStyle}>Global Search</label>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <span className="material-symbols-outlined" style={{ position: 'absolute', left: '16px', color: '#8d7169', fontSize: '20px' }}>search</span>
            <input
              type="text"
              placeholder="Enter city, temple, or holy site..."
              style={{ ...inputStyle, paddingLeft: '48px', paddingRight: '56px', fontSize: '18px', background: '#fff', borderRadius: '14px' }}
            />
            <button style={{
              position: 'absolute', right: '12px', background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', color: '#761b00', padding: '6px',
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>my_location</span>
            </button>
          </div>
        </div>

        {/* Coordinates + Map */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
          <div>
            <h3 style={{ fontFamily: 'Noto Serif, serif', fontSize: '20px', color: '#761b00', margin: '0 0 20px' }}>Precise Coordinates</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
              <div>
                <label style={labelStyle}>Latitude</label>
                <input style={inputStyle} value={lat} onChange={e => setLat(e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>Longitude</label>
                <input style={inputStyle} value={lng} onChange={e => setLng(e.target.value)} />
              </div>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Timezone (UTC Offset)</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#eae8e7', borderRadius: '10px', padding: '0 16px' }}>
                <span className="material-symbols-outlined" style={{ color: '#835422', fontSize: '20px' }}>schedule</span>
                <input value={tz} onChange={e => setTz(e.target.value)}
                  style={{ flex: 1, background: 'none', border: 'none', padding: '14px 0', fontSize: '15px', color: '#1b1c1c', outline: 'none', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: '#fff', borderRadius: '10px' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '13px', color: '#1b1c1c', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Daylight Saving Time</div>
                <div style={{ fontSize: '11px', color: '#8d7169' }}>Adjust for seasonal time shifts</div>
              </div>
              <label style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
                <input type="checkbox" checked={dst} onChange={e => setDst(e.target.checked)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
                <div style={{
                  width: '44px', height: '24px', borderRadius: '999px',
                  background: dst ? '#761b00' : '#c4c4c4', transition: 'background 0.2s', position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', top: '2px', left: dst ? '22px' : '2px',
                    width: '20px', height: '20px', background: '#fff', borderRadius: '50%', transition: 'left 0.2s',
                  }} />
                </div>
              </label>
            </div>
          </div>

          {/* Map preview */}
          <div style={{ borderRadius: '14px', overflow: 'hidden', position: 'relative', minHeight: '240px', background: '#d6d4d3' }}>
            <img
              alt="New Delhi map preview"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(80%)', transition: 'filter 0.5s' }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA86qLxzgr1TOiYLAq_29doVHlfasX2EDVaK6SRUoiHVeBr8JSzWPJM3kZl22vTZf7Izyul5khzhEmIf2mrZ4FmItJBBNZPtJxRBCNFjibhHMpZ-T0_IS2x_ULn6tUB4xRcfNHcg67BRPpyG53n28ARo1iHFh6FKsHFtDzEwhyGLRbL8XgYsxLdIJtX14DEXhF9vjpXgj1AtKosBrwBQQOQGNtt0S7ZKm2OYx69MBDeLLnBhwEJk0UpZXDf1_THRwmQGNiYpQRsQn8"
              onMouseEnter={e => e.target.style.filter = 'grayscale(0%)'}
              onMouseLeave={e => e.target.style.filter = 'grayscale(80%)'}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(30,20,18,0.6), transparent)',
              padding: '20px 16px',
            }}>
              <div style={{ color: '#fff' }}>
                <p style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.8, margin: '0 0 2px' }}>Current Anchor</p>
                <p style={{ fontFamily: 'Noto Serif, serif', fontSize: '20px', margin: 0, fontWeight: 700 }}>New Delhi, Bharat</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calculation + Language */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
        {/* Ayanamsa */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: '#835422' }}>
            <span className="material-symbols-outlined">auto_stories</span>
            <h3 style={{ fontFamily: 'Noto Serif, serif', fontSize: '22px', margin: 0 }}>Dharma Calculation</h3>
          </div>
          <label style={labelStyle}>Ayanamsa (Celestial Offset)</label>
          <select value={ayanamsa} onChange={e => setAyanamsa(e.target.value)}
            style={{ ...inputStyle, marginBottom: '10px', cursor: 'pointer', appearance: 'none' }}>
            {['Lahiri (Chitra Paksha)', 'Raman', 'KP (Krishnamurti Padhdhati)', 'Sayana (Tropical)', 'Fagan-Bradley'].map(o => (
              <option key={o}>{o}</option>
            ))}
          </select>
          <p style={{ fontSize: '12px', color: '#8d7169', fontStyle: 'italic', lineHeight: 1.6, margin: 0 }}>
            The precision of your planetary longitude depends on this anchor. Lahiri is the standard for most Vedic observances.
          </p>
        </div>

        {/* Language */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: '#835422' }}>
            <span className="material-symbols-outlined">translate</span>
            <h3 style={{ fontFamily: 'Noto Serif, serif', fontSize: '22px', margin: 0 }}>Linguistic Preference</h3>
          </div>
          <label style={labelStyle}>System Language</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {languages.map(l => (
              <button key={l} onClick={() => setLang(l)} style={{
                padding: '14px', borderRadius: '12px', cursor: 'pointer',
                border: l === lang ? '2px solid #761b00' : '2px solid transparent',
                background: l === lang ? '#ffdbd1' : '#fff',
                color: l === lang ? '#761b00' : '#59413b',
                fontWeight: l === lang ? 700 : 500,
                fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', transition: 'all 0.15s',
              }}>{l}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '16px' }}>
        <button style={{
          padding: '14px 28px', background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.15em', color: '#59413b',
        }}>Reset to Default</button>
        <button style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '16px 40px', background: '#761b00', color: '#fff', border: 'none',
          borderRadius: '14px', cursor: 'pointer', fontWeight: 700, fontSize: '16px',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          boxShadow: '0 12px 32px rgba(118,27,0,0.25)', transition: 'transform 0.15s',
        }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span className="material-symbols-outlined">save</span>
          Update Chronometer
        </button>
      </div>
    </section>
  );
}
