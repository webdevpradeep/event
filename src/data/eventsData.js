export const sampleEvents = [
  {
    id: 1,
    title: 'Dev Deepawali Grand Celebration',
    category: 'cultural',
    date: '2025-11-15',
    time: '18:00',
    location: 'All Ghats, Varanasi',
    distance: '1.5 km',
    price: 'Free',
    originalPrice: null,
    attendees: 5000,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    description:
      'Experience the magical Dev Deepawali with thousands of diyas lighting up all 84 ghats.',
    organizer: 'Varanasi Tourism Board',
    trending: true,
    featured: true,
    tags: ['Festival', 'Lights', 'Traditional', 'Photography'],
    highlights: [
      'Live Music',
      'Food Stalls',
      'Boat Rides',
      'Cultural Performances',
    ],
  },
  // Add more events here...
];

export const categories = [
  { id: 'all', name: 'All', icon: '🎯', colors: ['#8b5cf6', '#ec4899'] },
  {
    id: 'cultural',
    name: 'Cultural',
    icon: '🎭',
    colors: ['#f59e0b', '#ef4444'],
  },
  { id: 'music', name: 'Music', icon: '🎵', colors: ['#10b981', '#3b82f6'] },
  { id: 'food', name: 'Food', icon: '🍽️', colors: ['#f59e0b', '#f97316'] },
  {
    id: 'wellness',
    name: 'Wellness',
    icon: '🧘',
    colors: ['#06b6d4', '#10b981'],
  },
  {
    id: 'technology',
    name: 'Tech',
    icon: '💻',
    colors: ['#3b82f6', '#6366f1'],
  },
  { id: 'sports', name: 'Sports', icon: '⚽', colors: ['#ef4444', '#ec4899'] },
];
