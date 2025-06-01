import React from 'react';
import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';

interface MoodSummaryCardProps {
  title: string;
  value: number;
  previousValue: number;
  icon: React.ReactNode;
  color: string;
}

const MoodSummaryCard: React.FC<MoodSummaryCardProps> = ({ 
  title, 
  value, 
  previousValue, 
  icon,
  color
}) => {
  const percentChange = ((value - previousValue) / previousValue) * 100;
  const isPositive = percentChange >= 0;
  
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-neutral-100 dark:border-neutral-700 p-5">
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">{title}</p>
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mt-1">{value}</h3>
          
          <div className="flex items-center mt-2">
            <span className={`flex items-center text-xs font-medium ${
              isPositive ? 'text-success-500' : 'text-error-500'
            }`}>
              {isPositive ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
              {Math.abs(percentChange).toFixed(1)}%
            </span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 ml-1">vs last week</span>
          </div>
        </div>
        
        <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${color}`}>
          {icon}
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
        <a href="#" className="text-sm text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 flex items-center">
          View details
          <ArrowRight size={14} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default MoodSummaryCard;