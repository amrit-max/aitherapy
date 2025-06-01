import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Context providers
import { ThemeProvider } from './context/ThemeContext';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import LandingPage from './pages/LandingPage';
import SessionPage from './pages/SessionPage';
import DashboardPage from './pages/DashboardPage';
import MediaOutputPage from './pages/MediaOutputPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="session" element={<SessionPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="media" element={<MediaOutputPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;