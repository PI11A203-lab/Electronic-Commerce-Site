// 유저 정보
export const user = {
  name: 'NyaNya',
  avatar: 'NN',
  email: 'nyanyan@example.com',
  joinDate: 'January 2025',
  tags: ['React', 'Node.js', 'Python', 'AI/ML'],
  github: 'nyanyanyan',
  bio: 'Full-stack developer passionate about AI and web technologies',
  stats: {
    purchases: 12,
    reviews: 8,
    teams: 3,
    favorites: 15
  }
};

// 구매한 AI
export const purchases = [
  { id: 1, name: 'GPT-Master', category: 'NLP', price: 8900, purchaseDate: '2025-01-15', avatar: 'GM', code: 'GPT-MASTER-X9K2L' },
  { id: 2, name: 'VisionPro', category: 'Computer Vision', price: 7500, purchaseDate: '2025-01-10', avatar: 'VP', code: 'VISION-PRO-M3N7K' },
  { id: 3, name: 'AudioWizard', category: 'Audio', price: 6800, purchaseDate: '2025-01-08', avatar: 'AW', code: 'AUDIO-WIZ-R6T3H' },
];

// 작성한 리뷰
export const reviews = [
  { id: 1, aiName: 'GPT-Master', rating: 5, date: '2025-01-16', comment: 'Absolutely amazing work! The implementation was flawless and well-documented.' },
  { id: 2, aiName: 'VisionPro', rating: 4, date: '2025-01-12', comment: 'Great quality but delivery took longer than expected. Overall satisfied.' },
  { id: 3, aiName: 'AudioWizard', rating: 5, date: '2025-01-09', comment: 'Perfect for our audio processing needs. Highly recommend!' },
];

// 팀 구성
export const teams = [
  { 
    id: 1, 
    name: 'E-commerce Project Team', 
    members: ['GPT-Master', 'VisionPro', 'DataScientist'], 
    createdDate: '2025-01-15',
    synergyScore: 95 
  },
  { 
    id: 2, 
    name: 'Content Creation Squad', 
    members: ['AudioWizard', 'ImageGenius'], 
    createdDate: '2025-01-10',
    synergyScore: 88 
  },
];

// 찜 목록
export const favorites = [
  { id: 4, name: 'DeepChat', category: 'NLP', price: 5200, rating: 4.7, avatar: 'DC' },
  { id: 5, name: 'ImageGenius', category: 'CV', price: 4800, rating: 4.8, avatar: 'IG' },
  { id: 6, name: 'DataScientist', category: 'Tabular', price: 4500, rating: 4.6, avatar: 'DS' },
];

