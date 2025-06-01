import React from 'react';
import { ExternalLink, Play } from 'lucide-react';

interface VideoSummaryProps {
  title: string;
  thumbnailUrl: string;
  duration: string;
  date: string;
}

const VideoSummary: React.FC<VideoSummaryProps> = ({ title, thumbnailUrl, duration, date }) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-5 border border-neutral-100 dark:border-neutral-700">
      <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-4">Video Summary</h3>
      
      <div className="relative rounded-lg overflow-hidden group">
        <img 
          src={thumbnailUrl} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <button className="bg-white/90 hover:bg-white text-primary-600 rounded-full w-14 h-14 flex items-center justify-center focus:outline-none transition-transform duration-300 transform group-hover:scale-110">
            <Play size={24} className="ml-1" />
          </button>
        </div>
        
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-neutral-800 dark:text-white">{title}</h4>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Generated on {date}
        </p>
      </div>
      
      <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700 flex justify-between items-center">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          <span className="font-medium">Topic:</span> Weekly Progress Review
        </p>
        
        <a href="#" className="text-sm text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 flex items-center">
          View full video
          <ExternalLink size={14} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default VideoSummary;