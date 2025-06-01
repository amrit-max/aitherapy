import React from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface MoodData {
  date: string;
  value: number;
  note?: string;
}

interface MoodGraphProps {
  title: string;
  period: string;
  data: MoodData[];
}

const MoodGraph: React.FC<MoodGraphProps> = ({ title, period, data }) => {
  const maxValue = 10; // Maximum value for the mood scale
  
  const getEmotionColor = (value: number) => {
    if (value <= 3) return "bg-error-500";
    if (value <= 5) return "bg-warning-500";
    if (value <= 7) return "bg-secondary-500";
    return "bg-success-500";
  };

  const getEmotionTextColor = (value: number) => {
    if (value <= 3) return "text-error-500";
    if (value <= 5) return "text-warning-500";
    if (value <= 7) return "text-secondary-500";
    return "text-success-500";
  };

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-6 border border-neutral-100 dark:border-neutral-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-xl text-neutral-900 dark:text-white">{title}</h3>
        
        <div className="flex items-center space-x-2">
          <button className="p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-500 dark:text-neutral-400">
            <ChevronLeft size={18} />
          </button>
          
          <div className="flex items-center bg-neutral-100 dark:bg-neutral-700 px-3 py-1 rounded-md">
            <Calendar size={16} className="mr-2 text-neutral-500 dark:text-neutral-400" />
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{period}</span>
          </div>
          
          <button className="p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-500 dark:text-neutral-400">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      
      <div className="relative">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-neutral-500 dark:text-neutral-400">
          <span>Great</span>
          <span>Good</span>
          <span>Okay</span>
          <span>Low</span>
        </div>
        
        {/* Graph area */}
        <div className="ml-12 h-60">
          {/* Horizontal grid lines */}
          <div className="h-full relative">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-full border-t border-neutral-200 dark:border-neutral-700" 
                style={{ top: `${i * 33.33}%` }}
              ></div>
            ))}
            
            {/* Data visualization */}
            <div className="absolute inset-0 flex items-end">
              <div className="flex items-end justify-between w-full h-full pt-2 pb-6">
                {data.map((item, index) => {
                  const heightPercentage = (item.value / maxValue) * 100;
                  
                  return (
                    <div 
                      key={index} 
                      className="group flex flex-col items-center w-full cursor-pointer relative"
                    >
                      {/* Data point tooltip */}
                      <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <div className="bg-neutral-800 dark:bg-neutral-700 text-white rounded-md px-3 py-2 text-xs shadow-md whitespace-nowrap">
                          <p className="font-medium">{item.date}: {item.value}/10</p>
                          {item.note && <p className="text-neutral-300">{item.note}</p>}
                        </div>
                      </div>
                      
                      {/* Bar */}
                      <div 
                        className={`w-6 rounded-sm ${getEmotionColor(item.value)}`} 
                        style={{ height: `${heightPercentage}%` }}
                      ></div>
                      
                      {/* Date label */}
                      <span className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                        {item.date}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700">
        <div className="flex items-center justify-between">
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            <span className="font-medium">Average: </span>
            <span className={getEmotionTextColor(data.reduce((acc, item) => acc + item.value, 0) / data.length)}>
              {(data.reduce((acc, item) => acc + item.value, 0) / data.length).toFixed(1)}/10
            </span>
          </div>
          
          <button className="text-sm text-primary-500 dark:text-primary-400 hover:underline">
            View detailed report
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoodGraph;