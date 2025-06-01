import React from 'react';
import { LineChart, Clock, Lightbulb, Brain, BarChart } from 'lucide-react';

interface MoodData {
  date: string;
  value: number;
}

const SidebarProgress: React.FC = () => {
  // Mock data
  const sessionTime = "24:36";
  const sessionTopics = ["Anxiety", "Work Stress", "Relationships"];
  const moodData: MoodData[] = [
    { date: 'Mon', value: 3 },
    { date: 'Tue', value: 2 },
    { date: 'Wed', value: 4 },
    { date: 'Thu', value: 3 },
    { date: 'Fri', value: 5 },
    { date: 'Sat', value: 6 },
    { date: 'Sun', value: 7 },
  ];

  const getEmotionColor = (value: number) => {
    if (value <= 3) return "text-error-500";
    if (value <= 5) return "text-warning-500";
    return "text-success-500";
  };

  return (
    <div className="h-full bg-white dark:bg-neutral-800 border-l border-neutral-200 dark:border-neutral-700 p-4 overflow-y-auto">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 flex items-center">
          <Clock size={18} className="mr-2 text-primary-500 dark:text-primary-400" />
          Session Details
        </h3>
        <div className="bg-neutral-100 dark:bg-neutral-700 rounded-lg p-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Duration</span>
            <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{sessionTime}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Session #</span>
            <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">12</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 flex items-center">
          <Lightbulb size={18} className="mr-2 text-primary-500 dark:text-primary-400" />
          Topics Discussed
        </h3>
        <div className="flex flex-wrap gap-2">
          {sessionTopics.map((topic, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 flex items-center">
          <Brain size={18} className="mr-2 text-primary-500 dark:text-primary-400" />
          AI Insights
        </h3>
        <div className="bg-neutral-100 dark:bg-neutral-700 rounded-lg p-3">
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            You've shown improvement in managing work-related stress. 
            Continue practicing the mindfulness techniques we discussed.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 flex items-center">
          <BarChart size={18} className="mr-2 text-primary-500 dark:text-primary-400" />
          Weekly Mood Tracker
        </h3>
        <div className="bg-neutral-100 dark:bg-neutral-700 rounded-lg p-3">
          <div className="flex items-end justify-between h-32 mb-1">
            {moodData.map((day, index) => (
              <div key={index} className="flex flex-col items-center w-full">
                <div 
                  className={`w-4 rounded-t-sm ${getEmotionColor(day.value)} bg-current`} 
                  style={{ height: `${day.value * 10}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            {moodData.map((day, index) => (
              <div key={index} className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
                {day.date}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarProgress;