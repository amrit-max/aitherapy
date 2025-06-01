export type TherapistType = 'female-therapist-1' | 'female-therapist-2' | 'male-therapist-1' | 'male-therapist-2';

export type AvatarType = 'female-avatar-1' | 'female-avatar-2' | 'male-avatar-1' | 'male-avatar-2';

export interface TherapistProfile {
  type: TherapistType;
  avatar: AvatarType;
  name: string;
  description: string;
  agentId: string;
}

export interface TherapistResponse {
  reply: string;
  insight: {
    mood?: string;
    topics?: string[];
    nextSteps?: string[];
  } | null;
  avatar: AvatarType;
}

export const THERAPIST_PROFILES: Record<TherapistType, TherapistProfile> = {
  'female-therapist-1': {
    type: 'female-therapist-1',
    avatar: 'female-avatar-1',
    name: 'Dr. Sarah Chen',
    description: 'A compassionate listener who creates a safe space for open dialogue',
    agentId: import.meta.env.VITE_TAVUS_AGENT_ID_FEMALE_1
  },
  'female-therapist-2': {
    type: 'female-therapist-2',
    avatar: 'female-avatar-2',
    name: 'Dr. Emily Rodriguez',
    description: 'An empathetic guide specializing in anxiety and stress management',
    agentId: import.meta.env.VITE_TAVUS_AGENT_ID_FEMALE_2
  },
  'male-therapist-1': {
    type: 'male-therapist-1',
    avatar: 'male-avatar-1',
    name: 'Dr. Michael Brooks',
    description: 'A warm and encouraging therapist focused on personal growth',
    agentId: import.meta.env.VITE_TAVUS_AGENT_ID_MALE_1
  },
  'male-therapist-2': {
    type: 'male-therapist-2',
    avatar: 'male-avatar-2',
    name: 'Dr. James Carter',
    description: 'A seasoned counselor with expertise in cognitive behavioral therapy',
    agentId: import.meta.env.VITE_TAVUS_AGENT_ID_MALE_2
  }
};