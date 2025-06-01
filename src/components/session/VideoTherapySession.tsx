import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import { Mic, MicOff, Camera, CameraOff, Volume2, VolumeX, AlertCircle } from 'lucide-react';
import Button from '../common/Button';
import { TherapistType, THERAPIST_PROFILES } from '../../types/therapist';

interface VideoTherapySessionProps {
  therapistType: TherapistType;
  onEndSession: () => void;
}

const VideoTherapySession: React.FC<VideoTherapySessionProps> = ({ therapistType, onEndSession }) => {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [hasWebcamPermission, setHasWebcamPermission] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [videoAttempts, setVideoAttempts] = useState(0);
  const webcamRef = useRef<Webcam>(null);
  const therapist = THERAPIST_PROFILES[therapistType];
  const maxRetries = 3;

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(() => setHasWebcamPermission(true))
      .catch((err) => {
        setError('Camera access denied. Please enable camera permissions to continue.');
        console.error('Webcam permission error:', err);
      });
  }, []);

  const handleVideoError = () => {
    if (videoAttempts < maxRetries) {
      setVideoAttempts(prev => prev + 1);
      setIsLoading(true);
      setTimeout(() => {
        const iframe = document.querySelector('iframe');
        if (iframe) iframe.src = iframe.src;
      }, Math.pow(2, videoAttempts) * 1000);
    } else {
      setError('Unable to load the therapist video. Please check your connection and try again.');
      setIsLoading(false);
    }
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
    setVideoAttempts(0);
  };

  const toggleMic = () => setIsMicOn(!isMicOn);
  const toggleCamera = () => {
    if (!hasWebcamPermission) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(() => {
          setHasWebcamPermission(true);
          setIsCameraOn(true);
        })
        .catch(() => setError('Unable to access camera. Please check your permissions.'));
    } else {
      setIsCameraOn(!isCameraOn);
    }
  };
  const toggleAudio = () => setIsAudioOn(!isAudioOn);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-900 p-4">
        <div className="bg-neutral-800 p-6 rounded-xl max-w-md w-full text-center">
          <div className="text-error-500 mb-4">
            <AlertCircle size={48} className="mx-auto" />
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Session Error</h2>
          <p className="text-neutral-400 mb-4">{error}</p>
          <Button variant="primary" onClick={onEndSession}>
            Return to Chat
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-neutral-900">
      <div className="flex-1 flex relative">
        {/* Therapist video */}
        <div className="w-full p-4">
          <div className="relative h-full rounded-2xl overflow-hidden bg-neutral-800">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 z-10">
                <div className="animate-pulse text-neutral-400">Loading therapist...</div>
              </div>
            )}
            <iframe
              src={therapist.videoUrl}
              title={`${therapist.name} - AI Therapist`}
              className="absolute inset-0 w-full h-full border-0 z-0"
              allow="camera; microphone; fullscreen"
              onError={handleVideoError}
              onLoad={handleVideoLoad}
            />
          </div>
        </div>

        {/* User webcam (bottom right corner) */}
        {isCameraOn && hasWebcamPermission && (
          <div className="absolute bottom-28 right-8 w-64 h-48 rounded-xl overflow-hidden shadow-lg z-20">
            <Webcam
              ref={webcamRef}
              audio={false}
              className="w-full h-full object-cover"
              onUserMediaError={(err) => {
                setError('Failed to access webcam. Please check your permissions.');
                console.error('Webcam error:', err);
              }}
            />
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="h-24 bg-neutral-800 border-t border-neutral-700">
        <div className="container mx-auto h-full flex items-center justify-center space-x-4">
          <Button onClick={toggleMic} variant={isMicOn ? 'primary' : 'outline'} className="h-12 w-12 rounded-full">
            {isMicOn ? <Mic size={20} /> : <MicOff size={20} />}
          </Button>
          <Button onClick={toggleCamera} variant={isCameraOn ? 'primary' : 'outline'} className="h-12 w-12 rounded-full">
            {isCameraOn ? <Camera size={20} /> : <CameraOff size={20} />}
          </Button>
          <Button onClick={toggleAudio} variant={isAudioOn ? 'primary' : 'outline'} className="h-12 w-12 rounded-full">
            {isAudioOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </Button>
          <Button onClick={onEndSession} variant="error" className="px-6 rounded-full">
            End Session
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoTherapySession;
