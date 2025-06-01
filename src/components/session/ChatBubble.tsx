import React from 'react';
import { Bot, User } from 'lucide-react';

export type MessageType = 'user' | 'ai';

interface ChatBubbleProps {
  type: MessageType;
  message: string;
  timestamp: Date;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ type, message, timestamp }) => {
  const isUser = type === 'user';
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 h-9 w-9 rounded-full flex items-center justify-center ${
          isUser 
            ? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300 ml-2' 
            : 'bg-accent-100 text-accent-600 dark:bg-accent-900 dark:text-accent-300 mr-2'
        }`}>
          {isUser ? <User size={18} /> : <Bot size={18} />}
        </div>
        
        {/* Message content */}
        <div className={`
          py-3 px-4 rounded-2xl shadow-sm 
          ${isUser 
            ? 'bg-primary-500 dark:bg-primary-600 text-white rounded-tr-none' 
            : 'bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-tl-none border border-neutral-100 dark:border-neutral-700'
          }
        `}>
          <p className="text-sm md:text-base whitespace-pre-wrap">{message}</p>
          <span className={`text-xs block mt-1 ${
            isUser ? 'text-primary-200' : 'text-neutral-500 dark:text-neutral-500'
          }`}>
            {formatTime(timestamp)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;