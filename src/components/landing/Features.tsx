import React from 'react';
import { MessageSquare, Brain, Activity, SliceIcon as VoiceIcon, Camera, Lock, LineChart, CalendarClock } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-neutral-100 dark:border-neutral-700">
      <div className="h-12 w-12 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-300 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare size={24} />,
      title: 'Therapy Conversations',
      description: 'Chat with an AI therapist trained on evidence-based techniques to help you process thoughts and emotions.'
    },
    {
      icon: <Brain size={24} />,
      title: 'Personalized Insights',
      description: 'Receive tailored mental health insights based on your conversation patterns and emotional responses.'
    },
    {
      icon: <Activity size={24} />,
      title: 'Mood Tracking',
      description: 'Monitor your emotional wellbeing over time with visual mood tracking and progress reports.'
    },
    {
      icon: <VoiceIcon size={24} />,
      title: 'Voice Interaction',
      description: 'Listen to AI responses with natural voice synthesis for a more human-like therapeutic experience.'
    },
    {
      icon: <Camera size={24} />,
      title: 'Emotion Recognition',
      description: 'Optional camera-based emotion detection to enhance the AI\'s understanding of your current state.'
    },
    {
      icon: <Lock size={24} />,
      title: 'Private & Secure',
      description: 'Your data is encrypted and confidential, ensuring your mental health journey remains private.'
    },
    {
      icon: <LineChart size={24} />,
      title: 'Progress Analytics',
      description: 'Track your mental health journey with detailed analytics and actionable insights.'
    },
    {
      icon: <CalendarClock size={24} />,
      title: '24/7 Availability',
      description: 'Access therapeutic support whenever you need it, day or night, without appointments.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Advanced Features for Your <span className="text-primary-500 dark:text-primary-400">Mental Wellbeing</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-400">
            EchoMind combines cutting-edge AI technology with evidence-based therapeutic approaches to provide comprehensive mental health support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;