import React, { useState } from 'react';
import ChatInterface from '../components/session/ChatInterface';
import SidebarProgress from '../components/session/SidebarProgress';
import VideoTherapySession from '../components/session/VideoTherapySession';
import { Maximize, Minimize, Brain } from 'lucide-react';
import { TherapistType } from '../types/therapist';

const SessionPage: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedTherapist, setSelectedTherapist] = useState<TherapistType | null>(null);
  const [isVideoSession, setIsVideoSession] = useState(false);
  
  const handleTherapistSelect = (type: TherapistType) => {
    setSelectedTherapist(type);
    setIsVideoSession(true);
  };

  const handleEndSession = () => {
    setIsVideoSession(false);
    setSelectedTherapist(null);
  };

  if (isVideoSession && selectedTherapist) {
    return (
      <VideoTherapySession
        therapistType={selectedTherapist}
        onEndSession={handleEndSession}
      />
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Header */}
      <div className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-primary-500 dark:bg-primary-600 text-white p-2 rounded-lg mr-3">
              <Brain size={20} />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-neutral-900 dark:text-white">Therapy Session</h1>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Started 24 minutes ago</p>
            </div>
          </div>
          
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="p-2 rounded-md text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700"
          >
            {showSidebar ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Chat area */}
        <div className={`flex-1 ${showSidebar ? 'md:w-3/4' : 'w-full'}`}>
          <ChatInterface onTherapistSelect={handleTherapistSelect} />
        </div>
        
        {/* Sidebar */}
        {showSidebar && (
          <div className="hidden md:block w-1/4 border-l border-neutral-200 dark:border-neutral-700">
            <SidebarProgress />
          </div>
        )}
      </div>
    </div>
  );
};

export default SessionPage;