import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Camera } from 'lucide-react';
import ChatBubble, { MessageType } from './ChatBubble';
import Button from '../common/Button';
import TherapistSelector from './TherapistSelector';
import { TherapistType, TherapistResponse, THERAPIST_PROFILES } from '../../types/therapist';

interface Message {
  id: string;
  type: MessageType;
  content: string;
  timestamp: Date;
  insight?: TherapistResponse['insight'];
}

interface ChatInterfaceProps {
  onTherapistSelect?: (type: TherapistType) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onTherapistSelect }) => {
  const [therapistType, setTherapistType] = useState<TherapistType | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [exchangeCount, setExchangeCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleTherapistSelect = (type: TherapistType) => {
    setTherapistType(type);
    if (onTherapistSelect) {
      onTherapistSelect(type);
      return;
    }
    
    const profile = THERAPIST_PROFILES[type];
    setMessages([{
      id: '1',
      type: 'ai',
      content: `Hello, I'm ${profile.name}. I'm here to listen and support you. How are you feeling today?`,
      timestamp: new Date(),
    }]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const simulateTherapistResponse = (userMessage: string): TherapistResponse => {
    const isEndSession = userMessage.toLowerCase().includes('end session');
    const profile = therapistType ? THERAPIST_PROFILES[therapistType] : THERAPIST_PROFILES['female-therapist-1'];
    
    if (isEndSession || exchangeCount >= 10) {
      return {
        reply: "Thank you for sharing with me today. I've prepared a summary of our session.",
        insight: {
          mood: "reflective and open",
          topics: ["emotional awareness", "personal growth"],
          nextSteps: [
            "Practice deep breathing exercises",
            "Write down your thoughts before bed",
            "Take a mindful walk tomorrow"
          ]
        },
        avatar: profile.avatar
      };
    }
    
    const responses = [
      "I understand how you're feeling. Could you tell me more about what led to these thoughts?",
      "That sounds challenging. How has this been affecting your daily life?",
      "I hear you. What emotions come up when you think about this situation?",
      "Thank you for sharing that. Let's explore these feelings together.",
      "Your awareness is really valuable. How would you like to approach this?"
    ];
    
    return {
      reply: responses[Math.floor(Math.random() * responses.length)],
      insight: null,
      avatar: profile.avatar
    };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isProcessing || !therapistType) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsProcessing(true);
    setExchangeCount(prev => prev + 1);

    // Simulate AI response after a delay
    setTimeout(() => {
      const response = simulateTherapistResponse(userMessage.content);
      
      const aiMessage: Message = {
        id: Date.now().toString(),
        type: 'ai',
        content: response.reply,
        timestamp: new Date(),
        insight: response.insight
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsProcessing(false);
      inputRef.current?.focus();
      
      if (response.insight || exchangeCount >= 10) {
        setExchangeCount(0);
        setTimeout(() => setTherapistType(null), 2000);
      }
    }, 1500);
  };

  if (!therapistType) {
    return (
      <div className="flex flex-col h-full">
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            Choose Your Therapist
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Select the type of therapeutic approach that resonates with you
          </p>
        </div>
        <TherapistSelector
          selectedType={therapistType}
          onSelect={handleTherapistSelect}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <ChatBubble
            key={msg.id}
            type={msg.type}
            message={msg.content}
            timestamp={msg.timestamp}
          />
        ))}
        
        {isProcessing && (
          <div className="flex items-center space-x-2 text-neutral-500 dark:text-neutral-400 p-2">
            <div className="animate-pulse">Processing...</div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-4">
        <div className="flex items-end space-x-2">
          <div className="flex-grow relative">
            <textarea
              ref={inputRef}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              rows={1}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:focus:ring-primary-400 resize-none"
              style={{ 
                minHeight: '50px',
                maxHeight: '150px',
              }}
            />
          </div>

          <div className="flex space-x-2">
            <Button 
              variant="ghost" 
              className="h-10 w-10 rounded-full flex items-center justify-center" 
              aria-label="Voice input"
            >
              <Mic size={20} />
            </Button>
            
            <Button 
              variant="ghost" 
              className="h-10 w-10 rounded-full flex items-center justify-center" 
              aria-label="Camera"
            >
              <Camera size={20} />
            </Button>
            
            <Button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isProcessing}
              variant="primary" 
              className="h-10 w-10 rounded-full flex items-center justify-center"
              aria-label="Send message"
            >
              <Send size={20} />
            </Button>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-2 text-xs text-neutral-500 dark:text-neutral-400 px-1">
          <span>Shift + Enter to add a new line</span>
          <span>{inputValue.length} characters</span>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;