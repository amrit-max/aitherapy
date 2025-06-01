import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Sparkles } from 'lucide-react';
import Button from '../common/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-neutral-900 dark:to-primary-900/20">
      {/* Abstract background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary-200/30 dark:bg-primary-800/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-200/40 dark:bg-secondary-800/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-40 left-1/4 w-64 h-64 bg-accent-200/20 dark:bg-accent-800/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-300 mb-6 animate-fade-in">
              <Sparkles size={16} className="mr-2" />
              <span>AI-Powered Mental Wellness</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4 leading-tight">
              Your Personal
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-400 dark:to-secondary-400"> AI Therapy </span>
              Assistant
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Experience a new kind of mental health support that's available 24/7, personalized to your needs, and completely confidential.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/session">
                <Button 
                  variant="primary" 
                  size="lg" 
                  rounded 
                  rightIcon={<ArrowRight size={18} />}
                >
                  Start Your Session
                </Button>
              </Link>
              
              <Link to="/dashboard">
                <Button variant="outline" size="lg" rounded>
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Main illustration */}
              <div className="rounded-2xl bg-white dark:bg-neutral-800 shadow-lg p-4 transform transition-transform hover:scale-[1.02] duration-300">
                <div className="bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/40 dark:to-accent-900/40 rounded-xl p-6 overflow-hidden">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-500 dark:bg-primary-400 rounded-full p-2 mr-3">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg text-neutral-800 dark:text-white">EchoMind</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="ml-auto max-w-[80%] bg-white dark:bg-neutral-800 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl p-3 shadow-sm">
                      <p className="text-sm text-neutral-800 dark:text-neutral-200">How are you feeling today?</p>
                    </div>
                    
                    <div className="max-w-[80%] bg-primary-500 dark:bg-primary-600 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl p-3 text-white shadow-sm">
                      <p className="text-sm">I've been feeling a bit overwhelmed with work lately. It's hard to focus.</p>
                    </div>
                    
                    <div className="ml-auto max-w-[80%] bg-white dark:bg-neutral-800 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl p-3 shadow-sm">
                      <p className="text-sm text-neutral-800 dark:text-neutral-200">I understand that feeling. Let's explore some strategies to help you manage work stress and improve your focus...</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <span className="w-2 h-2 rounded-full bg-success-500"></span>
                        <span className="text-xs text-neutral-600 dark:text-neutral-400">AI listening...</span>
                      </div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-500">
                        Session #342
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -right-4 -top-4 bg-accent-100 dark:bg-accent-900/40 p-3 rounded-lg shadow-md transform rotate-6 animate-pulse-slow">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-accent-200 dark:bg-accent-800 flex items-center justify-center">
                    <Sparkles size={16} className="text-accent-600 dark:text-accent-300" />
                  </div>
                  <div className="text-xs font-medium text-accent-800 dark:text-accent-200">
                    Mood Analysis
                  </div>
                </div>
              </div>
              
              <div className="absolute -left-6 bottom-10 bg-secondary-100 dark:bg-secondary-900/40 p-3 rounded-lg shadow-md transform -rotate-3 animate-bounce-gentle">
                <div className="text-xs font-medium text-secondary-800 dark:text-secondary-200">
                  Personalized Insights
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;