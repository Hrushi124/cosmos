import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import DailyPanchang from './pages/DailyPanchang';
import MonthlyCalendar from './pages/MonthlyCalendar';
import YearlyFestivals from './pages/YearlyFestivals';
import Settings from './pages/Settings';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error("Caught error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', backgroundColor: '#ffecec', color: '#ff0000', border: '1px solid #ff0000', borderRadius: '8px' }}>
          <h2>Component Crashed</h2>
          <pre>{this.state.error?.toString()}</pre>
          <pre style={{ fontSize: '10px' }}>{this.state.errorInfo?.componentStack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/daily" />} />
          <Route path="/daily" element={<ErrorBoundary><DailyPanchang /></ErrorBoundary>} />
          <Route path="/monthly" element={<ErrorBoundary><MonthlyCalendar /></ErrorBoundary>} />
          <Route path="/yearly" element={<ErrorBoundary><YearlyFestivals /></ErrorBoundary>} />
          <Route path="/settings" element={<ErrorBoundary><Settings /></ErrorBoundary>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
