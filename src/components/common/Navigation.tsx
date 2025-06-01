import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Menu, X, Activity, MessageSquare, Film, Home } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navigation: React.FC = () => {
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home', icon: <Home size={18} /> },
    { path: '/session', label: 'Session', icon: <MessageSquare size={18} /> },
    { path: '/dashboard', label: 'Dashboard', icon: <Activity size={18} /> },
    { path: '/media', label: 'Media', icon: <Film size={18} /> },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-primary-500 dark:text-primary-300 hover:opacity-90 transition-opacity"
          >
            <Brain className="h-8 w-8" />
            <span className="font-semibold text-xl">EchoMind</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary-600 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/50'
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Start Session Button - desktop only */}
            <Link
              to="/session"
              className="hidden md:flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-medium shadow-sm transition-colors"
            >
              Start Session
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 animate-fade-in">
          <nav className="flex flex-col px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary-600 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}

            <Link
              to="/session"
              className="flex items-center justify-center px-4 py-3 mt-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium shadow-sm transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start New Session
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;