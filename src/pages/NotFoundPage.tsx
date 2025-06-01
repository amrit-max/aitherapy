import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400">
          <span className="text-3xl font-bold">404</span>
        </div>
        
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">Page Not Found</h1>
        
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <Button 
              variant="primary" 
              leftIcon={<Home size={18} />}
            >
              Back to Home
            </Button>
          </Link>
          
          <button onClick={() => window.history.back()}>
            <Button 
              variant="outline" 
              leftIcon={<ArrowLeft size={18} />}
            >
              Go Back
            </Button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;