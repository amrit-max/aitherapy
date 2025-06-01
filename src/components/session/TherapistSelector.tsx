import React from 'react';
import { TherapistType, THERAPIST_PROFILES } from '../../types/therapist';
import { User } from 'lucide-react';

interface TherapistSelectorProps {
  selectedType: TherapistType | null;
  onSelect: (type: TherapistType) => void;
}

const TherapistSelector: React.FC<TherapistSelectorProps> = ({ selectedType, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {(Object.keys(THERAPIST_PROFILES) as TherapistType[]).map((type) => {
        const profile = THERAPIST_PROFILES[type];
        const isSelected = selectedType === type;
        
        return (
          <button
            key={type}
            onClick={() => onSelect(type)}
            className={`
              flex items-start p-4 rounded-xl border transition-all duration-200
              ${isSelected 
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' 
                : 'border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600'
              }
            `}
          >
            <div className="flex-shrink-0 mr-4">
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center
                ${isSelected 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400'
                }
              `}>
                <User size={24} />
              </div>
            </div>
            
            <div className="flex-grow text-left">
              <h3 className="font-medium text-neutral-900 dark:text-white mb-1">
                {profile.name}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {profile.description}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default TherapistSelector;