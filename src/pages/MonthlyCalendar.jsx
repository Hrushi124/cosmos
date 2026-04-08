import React, { useState, useMemo } from 'react';
import { getPanchangStrings } from '../utils/panchang';

const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekDays   = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

export default function MonthlyCalendar() {
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const today = new Date();

  const year  = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth     = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const calendarDays = useMemo(() => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      days.push({
        dayNumber: d,
        isToday: today.toDateString() === date.toDateString(),
        panchang: getPanchangStrings(date),
      });
    }
    return days;
  }, [year, month]);

  return (
    <section style={{ maxWidth: '1100px', width: '100%' }}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <span style={{
            display: 'inline-block', fontSize: '10px', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.2em',
            background: '#ffdbd1', color: '#761b00', borderRadius: '999px',
            padding: '4px 12px', marginBottom: '10px',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}>Current Transit</span>
          <h1 style={{ fontFamily: 'Noto Serif, serif', fontSize: '52px', color: '#761b00', margin: '0 0 4px' }}>
            {monthNames[month]} {year}
          </h1>
          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#59413b', margin: 0 }}>
            Vedic Calculations · Local Time
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#f5f3f3', borderRadius: '14px', padding: '6px' }}>
          <button onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
            style={{ padding: '10px', background: 'none', border: 'none', cursor: 'pointer', color: '#761b00', borderRadius: '10px' }}
          ><span className="material-symbols-outlined">chevron_left</span></button>
          <button onClick={() => setCurrentDate(new Date())}
            style={{ padding: '8px 16px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Noto Serif, serif', fontSize: '16px', color: '#761b00', borderLeft: '1px solid rgba(225,191,182,0.4)', borderRight: '1px solid rgba(225,191,182,0.4)' }}
          >Today</button>
          <button onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
            style={{ padding: '10px', background: 'none', border: 'none', cursor: 'pointer', color: '#761b00', borderRadius: '10px' }}
          ><span className="material-symbols-outlined">chevron_right</span></button>
        </div>
      </header>

      {/* Calendar grid */}
      <div style={{ border: '1px solid rgba(225,191,182,0.2)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(118,27,0,0.06)' }}>
        {/* Weekday headers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', background: '#f5f3f3' }}>
          {weekDays.map(d => (
            <div key={d} style={{
              padding: '14px', textAlign: 'center',
              fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.1em', color: '#8d7169',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}>{d}</div>
          ))}
        </div>

        {/* Day cells */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1px', background: 'rgba(225,191,182,0.15)' }}>
          {calendarDays.map((day, idx) => {
            if (!day) return (
              <div key={`e-${idx}`} style={{ minHeight: '120px', background: '#fbfaf9', opacity: 0.4 }} />
            );
            const bg = day.isToday ? '#fff8f6' : '#ffffff';
            return (
              <div key={idx} style={{
                minHeight: '120px', padding: '12px', background: bg,
                position: 'relative', cursor: 'pointer',
                transition: 'background 0.15s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#fff3ef'}
                onMouseLeave={e => e.currentTarget.style.background = bg}
              >
                {day.isToday && (
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '3px', height: '100%', background: '#835422' }} />
                )}
                <div style={{
                  fontFamily: 'Noto Serif, serif', fontSize: '22px',
                  color: day.isToday ? '#761b00' : '#1b1c1c', fontWeight: day.isToday ? 700 : 400,
                }}>{day.dayNumber}</div>
                <div style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: day.isToday ? '#835422' : '#8d7169', marginTop: '2px', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {day.panchang.tithi}
                </div>
                <div style={{ marginTop: '8px' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '2px',
                    fontSize: '9px', fontWeight: 700, padding: '2px 6px', borderRadius: '999px',
                    background: 'rgba(131,84,34,0.1)', color: '#835422',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '10px' }}>star</span>
                    {day.panchang.nakshatra}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Monthly overview footer card */}
      <div style={{
        marginTop: '40px', padding: '32px',
        background: '#f5f3f3', borderRadius: '16px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px',
        border: '1px solid rgba(225,191,182,0.2)',
      }}>
        <div>
          <h3 style={{ fontFamily: 'Noto Serif, serif', fontSize: '22px', color: '#761b00', margin: '0 0 6px' }}>Monthly Overview</h3>
          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#59413b', fontSize: '14px', maxWidth: '480px', margin: 0, lineHeight: 1.6 }}>
            Review the celestial alignments, primary Nakshatras in transit, and prominent Tithis mapping to {monthNames[month]} {year}.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {[
            { label: 'Ekadashi', count: '2', color: '#761b00' },
            { label: 'Amavasya', count: '1', color: '#243d68' },
            { label: 'Purnima', count: '1', color: '#835422' },
          ].map(({ label, count, color }) => (
            <div key={label} style={{ textAlign: 'center', padding: '16px 24px', background: '#fff', borderRadius: '12px', minWidth: '80px' }}>
              <div style={{ fontFamily: 'Noto Serif, serif', fontSize: '28px', color, fontWeight: 700 }}>{count}</div>
              <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8d7169' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
