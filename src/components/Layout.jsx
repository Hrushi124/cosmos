import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const navItems = [
  { to: '/daily',    icon: 'today',               label: 'Daily Panchang'   },
  { to: '/monthly',  icon: 'calendar_view_month', label: 'Monthly View'     },
  { to: '/yearly',   icon: 'event_note',           label: 'Yearly Calendar'  },
  { to: '/settings', icon: 'location_on',          label: 'Location Settings'},
];

const activeClass   = 'flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl bg-[#ffdbd1] text-[#761b00] transition-all';
const inactiveClass = 'flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-stone-500 hover:bg-stone-200 hover:text-stone-800 transition-all';

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (to) => {
    setMobileOpen(false);
    navigate(to);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#fbf9f8' }}>

      {/* ── Sidebar (desktop) ── */}
      <aside style={{
        width: '256px',
        minWidth: '256px',
        height: '100vh',
        position: 'sticky',
        top: 0,
        backgroundColor: '#f5f3f3',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 40,
        overflowY: 'auto',
      }}
        className="hidden lg:flex"
      >
        {/* Brand */}
        <div style={{ padding: '24px 20px 8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', background: '#ffdbd1' }}>
              <img
                alt="Sacred Chronometer"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsCx8ZG-OhC1YCdVhx8IiUbEFFophWnhrPGhFsmQeUr3rmyZI5qHqfjx6v9YwXQEhfgMGN-akdet8n8PSIkPiCkYiQ9PNX6V9i1nt9a2G5uQWdWrJVC4Lj79t5doCxlTrV-RygZbSlU5TBiWZp0FHZ7YgBNXUgtqTcdP0aDzZ7hg98Pe56488tZXkJJ-QEU-Jd0So00pp8dzzVm0RN15pnhOAJM-_2Gjko3oc5AQ7GCGShAFfoYMWbXM5pVT79u1s5WfFYsb3Xc9M"
              />
            </div>
            <div>
              <div style={{ fontFamily: 'Noto Serif, serif', fontStyle: 'italic', color: '#761b00', fontSize: '14px' }}>The Sacred Time</div>
              <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '10px', color: '#8d7169', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Vedic Calculations</div>
            </div>
          </div>

          {/* Nav links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navItems.map(({ to, icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => isActive ? activeClass : inactiveClass}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#761b00' }}>{icon}</span>
                {label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ marginTop: '32px' }}>
            <button
              style={{
                width: '100%',
                padding: '14px',
                background: '#761b00',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              Calculate Kundli
            </button>
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 'auto', padding: '20px', fontSize: '10px', color: '#8d7169', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          © 2024 Sacred Chronometer
        </div>
      </aside>

      {/* ── Main column ── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>

        {/* Top bar */}
        <header style={{
          position: 'sticky', top: 0, zIndex: 50,
          backgroundColor: 'rgba(251,249,248,0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(225,191,182,0.2)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 24px' }}>
            <span style={{ fontFamily: 'Noto Serif, serif', fontWeight: 700, color: '#761b00', fontSize: '20px' }}>
              Sacred Chronometer
            </span>

            {/* Desktop top links */}
            <nav className="hidden lg:flex" style={{ gap: '28px', display: 'flex', alignItems: 'center', fontFamily: 'Noto Serif, serif', fontSize: '14px' }}>
              {['Muhurat', 'Festivals', 'Horoscope', 'Rituals'].map(label => (
                <a key={label} href="#" style={{ color: '#59413b', textDecoration: 'none' }}
                  onMouseEnter={e => e.target.style.color = '#761b00'}
                  onMouseLeave={e => e.target.style.color = '#59413b'}
                >{label}</a>
              ))}
            </nav>

            {/* Hamburger for mobile */}
            <button
              className="lg:hidden"
              onClick={() => setMobileOpen(v => !v)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
            >
              <span className="material-symbols-outlined" style={{ color: '#761b00', fontSize: '28px' }}>
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

          {/* Mobile nav dropdown */}
          {mobileOpen && (
            <div className="lg:hidden" style={{ padding: '8px 16px 16px', backgroundColor: '#f5f3f3', borderTop: '1px solid rgba(225,191,182,0.3)' }}>
              {navItems.map(({ to, icon, label }) => (
                <button
                  key={to}
                  onClick={() => handleNavClick(to)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    width: '100%', padding: '12px 16px',
                    background: 'none', border: 'none', borderRadius: '10px',
                    fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px',
                    color: '#59413b', cursor: 'pointer', textAlign: 'left',
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#ffdbd1'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <span className="material-symbols-outlined" style={{ color: '#761b00', fontSize: '20px' }}>{icon}</span>
                  {label}
                </button>
              ))}
            </div>
          )}
        </header>

        {/* Page content */}
        <main style={{ flex: 1, padding: '32px 28px', overflowY: 'auto' }}>
          {children}
        </main>

        {/* Footer */}
        <footer style={{ padding: '24px 28px', borderTop: '1px solid rgba(225,191,182,0.2)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px', color: '#8d7169', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <span>© 2024 Sacred Chronometer. Precise Vedic Astrology &amp; Panchanga.</span>
          <nav style={{ display: 'flex', gap: '16px' }}>
            {['About Panchang', 'Privacy Policy', 'Dharma Shastras', 'Contact Scholar'].map(l => (
              <a key={l} href="#" style={{ color: '#8d7169', textDecoration: 'none' }}>{l}</a>
            ))}
          </nav>
        </footer>
      </div>
    </div>
  );
}
