import React from 'react';
import { Brain, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-primary-500 dark:text-primary-300">
              <Brain className="h-6 w-6" />
              <span className="font-semibold text-lg">EchoMind</span>
            </Link>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Your AI-powered mental health companion. Available 24/7 for support and guidance.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-100 tracking-wider uppercase">Platform</h3>
            <ul className="mt-4 space-y-2">
              {['Home', 'Start Session', 'Dashboard', 'Media'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-100 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              {['FAQ', 'Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-100 tracking-wider uppercase">Connect</h3>
            <div className="mt-4 flex space-x-4">
              {[
                { icon: <Twitter size={20} />, label: 'Twitter' },
                { icon: <Github size={20} />, label: 'GitHub' },
                { icon: <Linkedin size={20} />, label: 'LinkedIn' },
              ].map((item) => (
                <a 
                  key={item.label}
                  href="#" 
                  className="text-neutral-500 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-300"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center">
            &copy; {currentYear} EchoMind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;