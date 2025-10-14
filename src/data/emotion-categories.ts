import { TimelineEvent } from '@/lib/types';

// Mapping of emotion timeline events to their STEEP categories
export const emotionCategoryMapping: Record<string, string[]> = {
  // Cultural: Hugot culture, emotional expression through arts and media
  'cultural': [
    'OPM Hugot Era',
    'Teleserye Shared Experiences',
    'Texting Poetry & Digital Hugot'
  ],
  
  // Social: Community emotions, shared experiences, social validation
  'social': [
    'Teleserye Shared Experiences',
    'Texting Poetry & Digital Hugot'
  ],
  
  // Political: National pride, collective emotions, political unity
  'political': [
    'Pacquiao Fights: National Unity'
  ],
  
  // Economic: Entertainment industry, monetization of emotions
  'economic': [
    'OPM Hugot Era'
  ],
  
  // Environmental: (No direct mapping in current timeline data)
  'environmental': []
};

// Helper function to get timeline events for a specific emotion category
export function getTimelineEventsForEmotionCategory(
  events: TimelineEvent[], 
  category: string
): TimelineEvent[] {
  const eventTitles = emotionCategoryMapping[category] || [];
  return events.filter(event => 
    eventTitles.includes(event.title) && event.category === 'emotions'
  );
}

// Get all emotion timeline events
export function getAllEmotionEvents(events: TimelineEvent[]): TimelineEvent[] {
  return events.filter(event => event.category === 'emotions');
}
