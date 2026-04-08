import React from 'react';
import { renderToString } from 'react-dom/server';
import MonthlyCalendar from './src/pages/MonthlyCalendar.jsx';
import YearlyFestivals from './src/pages/YearlyFestivals.jsx';
import Settings from './src/pages/Settings.jsx';

try {
  console.log('Rendering MonthlyCalendar...');
  renderToString(<MonthlyCalendar />);
  console.log('Rendering YearlyFestivals...');
  renderToString(<YearlyFestivals />);
  console.log('Rendering Settings...');
  renderToString(<Settings />);
  console.log('ALL COMPONENTS RENDERED SUCCESSFULLY NO RUNTIME ERRORS!');
} catch (e) {
  console.error("RUNTIME ERROR:", e);
}
