// 구매한 AI 개발자 목 데이터
export const purchasedAIs = [
  {
    id: 1,
    name: 'GPT-Master',
    category: 'NLP',
    price: 8900,
    avatar: 'GM',
    activationCode: 'GPT-MASTER-X9K2L-7H4M9-Q3P8R',
    documentUrl: '#'
  },
  {
    id: 2,
    name: 'VisionPro',
    category: 'Computer Vision',
    price: 7500,
    avatar: 'VP',
    activationCode: 'VISION-PRO-M3N7K-2F9L4-W8Q5T',
    documentUrl: '#'
  },
  {
    id: 3,
    name: 'AudioWizard',
    category: 'Audio Processing',
    price: 6800,
    avatar: 'AW',
    activationCode: 'AUDIO-WIZ-R6T3H-9K2P7-L4M8N',
    documentUrl: '#'
  }
];

// 사용자 이메일
export const userEmail = 'user@example.com';

// 주문 상세 정보 생성 함수
export const generateOrderDetails = () => {
  return {
    orderNumber: 'AIDE-2025-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    orderDate: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    total: purchasedAIs.reduce((sum, ai) => sum + ai.price, 0)
  };
};

