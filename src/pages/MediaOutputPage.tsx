import React from 'react';
import AudioPlayer from '../components/media/AudioPlayer';
import VideoSummary from '../components/media/VideoSummary';

const MediaOutputPage: React.FC = () => {
  // Mock data for video summaries
  const videoSummaries = [
    {
      title: 'Weekly Therapy Progress Review',
      thumbnailUrl: 'https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '3:42',
      date: 'Oct 21, 2023'
    },
    {
      title: 'Mindfulness Techniques - Custom Video',
      thumbnailUrl: 'https://images.pexels.com/photos/1028741/pexels-photo-1028741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '5:18',
      date: 'Oct 18, 2023'
    },
    {
      title: 'Stress Management Strategies',
      thumbnailUrl: 'https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '4:05',
      date: 'Oct 14, 2023'
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">Media Outputs</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mt-1">Listen to voice responses and watch video summaries from your sessions</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Audio player section */}
          <div className="lg:col-span-1">
            <AudioPlayer />
            
            <div className="mt-6 bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-5 border border-neutral-100 dark:border-neutral-700">
              <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-4">Recent Voice Responses</h3>
              
              <div className="space-y-3">
                {[
                  { title: 'Anxiety Management Techniques', date: 'Today, 2:30 PM', duration: '2:45' },
                  { title: 'Deep Breathing Exercise', date: 'Yesterday, 10:15 AM', duration: '3:20' },
                  { title: 'Positive Affirmations', date: 'Oct 19, 8:45 PM', duration: '1:58' },
                ].map((audio, index) => (
                  <div 
                    key={index} 
                    className="p-3 border border-neutral-100 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-750 transition-colors cursor-pointer"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-neutral-800 dark:text-neutral-200 text-sm">{audio.title}</h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{audio.date}</p>
                      </div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">
                        {audio.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Video summaries section */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videoSummaries.map((video, index) => (
                <VideoSummary
                  key={index}
                  title={video.title}
                  thumbnailUrl={video.thumbnailUrl}
                  duration={video.duration}
                  date={video.date}
                />
              ))}
            </div>
            
            <div className="mt-6 bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-5 border border-neutral-100 dark:border-neutral-700">
              <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-4">About Media Features</h3>
              
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 text-sm">
                <p>
                  EchoMind offers advanced media features to enhance your therapy experience:
                </p>
                
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Voice Responses:</strong> Listen to AI-generated voice responses using advanced 
                    text-to-speech technology for a more personal experience.
                  </li>
                  <li>
                    <strong>Video Summaries:</strong> Receive personalized video summaries of your therapy 
                    sessions, complete with visualizations and key insights.
                  </li>
                  <li>
                    <strong>Downloadable Content:</strong> Save and access your media content anytime, 
                    even offline, for continued support between sessions.
                  </li>
                </ul>
                
                <p>
                  All media content is generated using state-of-the-art AI technology while maintaining 
                  complete privacy and confidentiality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaOutputPage;