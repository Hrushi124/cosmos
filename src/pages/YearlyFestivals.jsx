import React from 'react';

const festivals = [
  {
    date: 'Jan 14', day: 'Wednesday',
    title: 'Makar Sankranti / Pongal', tag: 'Harvest Festival', tagColor: '#761b00', tagBg: '#ffdbd1',
    desc: 'Transition of the Sun into Capricorn (Makara). Marks the end of winter solstice and the start of longer days. Celebrated with gratitude for the harvest.',
    icon: 'auto_awesome', accentColor: '#761b00',
  },
  {
    date: 'Feb 15', day: 'Sunday',
    title: 'Maha Shivaratri', tag: 'Vratam', tagColor: '#243d68', tagBg: '#d8e2ff',
    desc: 'The Great Night of Shiva. Observing a strict fast and night-long vigil (Jagaran) to overcome darkness and ignorance in life and the world.',
    icon: 'nightlight', accentColor: '#243d68',
  },
  {
    date: 'Mar 04', day: 'Wednesday',
    title: 'Holi', tag: 'Purnima', tagColor: '#835422', tagBg: '#ffdcbf',
    desc: 'Festival of Colors. Celebrates the arrival of spring and the victory of good over evil (Prahalad\'s devotion).',
    icon: 'palette', accentColor: '#835422',
  },
  {
    date: 'Mar 30', day: 'Monday',
    title: 'Ugadi / Gudi Padwa', tag: 'New Year', tagColor: '#761b00', tagBg: '#ffdbd1',
    desc: 'Lunar New Year according to the Amanta and Purnimanta calendars. Time for reading the Panchangam for the new year.',
    icon: 'celebration', accentColor: '#761b00',
  },
  {
    date: 'Apr 07', day: 'Tuesday',
    title: 'Rama Navami', tag: 'Jayanti', tagColor: '#835422', tagBg: '#ffdcbf',
    desc: 'Birth of Lord Rama, the seventh avatar of Vishnu. Celebrated during the Chaitra Navaratri.',
    icon: 'brightness_4', accentColor: '#835422',
  },
];

export default function YearlyFestivals() {
  const sectionStyle = {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  };

  return (
    <section style={sectionStyle}>
      {/* Hero */}
      <div style={{
        position: 'relative', overflow: 'hidden', borderRadius: '20px',
        background: '#f5f3f3', padding: '48px', marginBottom: '48px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div style={{ zIndex: 1, maxWidth: '600px' }}>
          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#761b00', margin: '0 0 12px' }}>
            Vedic Calendar 2026
          </p>
          <h1 style={{ fontFamily: 'Noto Serif, serif', fontSize: '56px', color: '#1b1c1c', lineHeight: 1.1, margin: '0 0 16px' }}>
            Yearly Festivals<br />&amp; <em style={{ color: '#835422' }}>Vratams</em>
          </h1>
          <p style={{ color: '#59413b', fontSize: '15px', lineHeight: 1.7, margin: '0 0 28px', maxWidth: '480px' }}>
            A celestial journey through the sacred timings of 2026. Synchronize your spiritual practices with precise lunar calculations and traditional dharmic observances.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '12px 24px', borderRadius: '999px', border: 'none', cursor: 'pointer',
              background: '#761b00', color: '#fff', fontWeight: 600, fontSize: '14px',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              boxShadow: '0 8px 24px rgba(118,27,0,0.2)',
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>event_upcoming</span>
              Export to Google Calendar
            </button>
            <button style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '12px 24px', borderRadius: '999px', background: 'none',
              border: '1px solid rgba(141,113,105,0.3)', color: '#835422', cursor: 'pointer',
              fontWeight: 600, fontSize: '14px', fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>download</span>
              Download iCal
            </button>
          </div>
        </div>
        <span className="material-symbols-outlined" style={{
          position: 'absolute', right: '-2%', top: '-10%',
          fontSize: '320px', color: '#761b00', opacity: 0.06, pointerEvents: 'none', userSelect: 'none',
        }}>brightness_4</span>
      </div>

      {/* Filter row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['All Observances', 'Ekadashi', 'Amavasya', 'Purnima', 'National Holidays'].map((label, i) => (
            <button key={label} style={{
              padding: '8px 20px', borderRadius: '999px', border: 'none', cursor: 'pointer',
              background: i === 0 ? '#ffdbd1' : '#efeded',
              color: i === 0 ? '#761b00' : '#59413b',
              fontWeight: 500, fontSize: '13px', fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}>{label}</button>
          ))}
        </div>
        <div style={{ position: 'relative', minWidth: '260px' }}>
          <span className="material-symbols-outlined" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#8d7169', fontSize: '18px' }}>filter_list</span>
          <input
            type="text"
            placeholder="Filter by month or deity..."
            style={{
              width: '100%', padding: '10px 16px 10px 42px', borderRadius: '12px',
              border: 'none', background: '#f5f3f3',
              fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#1b1c1c',
              outline: 'none', boxSizing: 'border-box',
            }}
          />
        </div>
      </div>

      {/* Table header */}
      <div style={{
        display: 'grid', gridTemplateColumns: '2fr 3fr 4fr 1fr',
        padding: '12px 24px', borderBottom: '1px solid rgba(225,191,182,0.25)',
        fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '10px', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8d7169',
      }}>
        <div>Date &amp; Day</div>
        <div>Festival Name</div>
        <div>Significance</div>
        <div style={{ textAlign: 'right' }}>Rituals</div>
      </div>

      {/* Festival rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {festivals.map((f, i) => (
          <div key={i}
            style={{
              display: 'grid', gridTemplateColumns: '2fr 3fr 4fr 1fr',
              alignItems: 'center', padding: '28px 24px',
              borderRadius: '14px', background: '#fff', cursor: 'pointer',
              position: 'relative', overflow: 'hidden',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#fbf9f8';
              e.currentTarget.querySelector('.accent-bar').style.opacity = '1';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.querySelector('.accent-bar').style.opacity = '0';
            }}
          >
            <div className="accent-bar" style={{ position: 'absolute', left: 0, top: 0, width: '3px', height: '100%', background: f.accentColor, opacity: 0, transition: 'opacity 0.15s' }} />

            <div>
              <div style={{ fontFamily: 'Noto Serif, serif', fontSize: '26px', color: f.accentColor }}>{f.date}</div>
              <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#8d7169' }}>{f.day}</div>
            </div>

            <div style={{ paddingRight: '16px' }}>
              <h3 style={{ fontFamily: 'Noto Serif, serif', fontSize: '20px', color: '#1b1c1c', margin: '0 0 6px' }}>{f.title}</h3>
              <span style={{
                display: 'inline-block', padding: '3px 10px', borderRadius: '999px',
                background: f.tagBg, color: f.tagColor,
                fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}>{f.tag}</span>
            </div>

            <div>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#59413b', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span className="material-symbols-outlined" style={{ color: f.accentColor, fontSize: '22px', opacity: 0.5 }}>{f.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter CTA */}
      <div style={{
        marginTop: '48px', padding: '40px',
        background: 'linear-gradient(135deg, #f5f3f3 0%, #eae8e7 100%)',
        borderRadius: '20px', textAlign: 'center', border: '1px solid rgba(225,191,182,0.2)',
      }}>
        <h3 style={{ fontFamily: 'Noto Serif, serif', fontSize: '26px', color: '#1b1c1c', margin: '0 0 10px' }}>Never Miss a Vratam</h3>
        <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#59413b', fontSize: '14px', maxWidth: '440px', margin: '0 auto 24px', lineHeight: 1.6 }}>
          Subscribe to our premium Vedic alerts. Receive precise Tithi timings and fasting rules 24 hours before each major observance.
        </p>
        <div style={{ display: 'flex', gap: '8px', maxWidth: '400px', margin: '0 auto', justifyContent: 'center' }}>
          <input type="email" placeholder="Enter your email..."
            style={{
              flex: 1, padding: '12px 16px', borderRadius: '12px', border: 'none',
              fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px',
              background: '#fff', color: '#1b1c1c', outline: 'none',
            }} />
          <button style={{
            padding: '12px 24px', borderRadius: '12px', border: 'none', cursor: 'pointer',
            background: '#761b00', color: '#fff', fontWeight: 700, fontSize: '14px',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}>Subscribe</button>
        </div>
      </div>
    </section>
  );
}
