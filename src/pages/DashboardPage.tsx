import React from 'react';
import MoodGraph from '../components/dashboard/MoodGraph';
import MoodSummaryCard from '../components/dashboard/MoodSummaryCard';
import { Link } from 'react-router-dom';
import { MessageSquare, Brain, Calendar, Activity, Clock, PlusCircle } from 'lucide-react';
import Button from '../components/common/Button';

const DashboardPage: React.FC = () => {
  // Mock data
  const weeklyMoodData = [
    { date: 'Mon', value: 4, note: 'Feeling stressed about work deadline' },
    { date: 'Tue', value: 3, note: 'Had trouble sleeping' },
    { date: 'Wed', value: 5, note: 'Practiced meditation in the morning' },
    { date: 'Thu', value: 6, note: 'Good progress on work project' },
    { date: 'Fri', value: 7, note: 'Looking forward to the weekend' },
    { date: 'Sat', value: 8, note: 'Relaxing day outdoors' },
    { date: 'Sun', value: 7, note: 'Prepared for the week ahead' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">Your Wellness Dashboard</h1>
            <p className="text-neutral-600 dark:text-neutral-400 mt-1">Track your progress and insights over time</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Link to="/session">
              <Button 
                variant="primary" 
                rounded 
                leftIcon={<PlusCircle size={18} />}
              >
                New Session
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MoodSummaryCard
            title="Weekly Sessions"
            value={4}
            previousValue={3}
            icon={<MessageSquare size={20} className="text-white" />}
            color="bg-primary-500 dark:bg-primary-600 text-white"
          />
          
          <MoodSummaryCard
            title="Average Mood"
            value={7.2}
            previousValue={6.5}
            icon={<Brain size={20} className="text-white" />}
            color="bg-secondary-500 dark:bg-secondary-600 text-white"
          />
          
          <MoodSummaryCard
            title="Streak Days"
            value={12}
            previousValue={7}
            icon={<Calendar size={20} className="text-white" />}
            color="bg-accent-500 dark:bg-accent-600 text-white"
          />
          
          <MoodSummaryCard
            title="Minutes Engaged"
            value={84}
            previousValue={72}
            icon={<Clock size={20} className="text-white" />}
            color="bg-success-500 dark:bg-success-600 text-white"
          />
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Mood graph */}
          <div className="lg:col-span-2">
            <MoodGraph
              title="Weekly Mood Tracker"
              period="Oct 15 - Oct 21, 2023"
              data={weeklyMoodData}
            />
          </div>
          
          {/* Recent sessions */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-6 border border-neutral-100 dark:border-neutral-700">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-xl text-neutral-900 dark:text-white">Recent Sessions</h3>
                <Link to="/session" className="text-sm text-primary-500 dark:text-primary-400 hover:underline">
                  View all
                </Link>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: 'Stress Management', date: 'Today, 2:30 PM', duration: '32 min' },
                  { title: 'Work-Life Balance', date: 'Yesterday, 10:15 AM', duration: '45 min' },
                  { title: 'Sleep Improvement', date: 'Oct 19, 8:45 PM', duration: '28 min' },
                  { title: 'Anxiety Relief', date: 'Oct 17, 4:20 PM', duration: '38 min' },
                ].map((session, index) => (
                  <div 
                    key={index} 
                    className="p-4 border border-neutral-100 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-750 transition-colors"
                  >
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium text-neutral-800 dark:text-neutral-200">{session.title}</h4>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{session.date}</p>
                      </div>
                      <div className="flex items-center text-neutral-500 dark:text-neutral-400">
                        <Clock size={14} className="mr-1" />
                        <span className="text-sm">{session.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <Link to="/session">
                  <Button 
                    variant="outline" 
                    fullWidth
                    leftIcon={<MessageSquare size={18} />}
                  >
                    Start New Session
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Insights section */}
        <div className="mt-8 bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-6 border border-neutral-100 dark:border-neutral-700">
          <div className="flex items-center mb-6">
            <Activity size={24} className="text-primary-500 dark:text-primary-400 mr-2" />
            <h3 className="font-semibold text-xl text-neutral-900 dark:text-white">AI Insights & Recommendations</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Sleep Pattern Improvement',
                description: 'Your sleep quality has improved by 22% this week. Continue with your evening meditation routine.',
                actionText: 'View sleep data'
              },
              {
                title: 'Stress Trigger Identified',
                description: 'Work meetings appear to be a consistent stress trigger. Consider trying the 5-minute breathing exercise before meetings.',
                actionText: 'Try breathing exercise'
              },
              {
                title: 'Weekly Progress Summary',
                description: 'You\'ve shown consistent improvement in mood stability. Your journaling habit is showing positive results.',
                actionText: 'View full report'
              },
            ].map((insight, index) => (
              <div key={index} className="bg-neutral-50 dark:bg-neutral-750 rounded-lg p-5 border border-neutral-200 dark:border-neutral-700">
                <h4 className="font-medium text-neutral-900 dark:text-white mb-2">{insight.title}</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">{insight.description}</p>
                <a href="#" className="text-sm text-primary-500 dark:text-primary-400 hover:underline">
                  {insight.actionText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;