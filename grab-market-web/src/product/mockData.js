// Mock 개발자 데이터
export const mockDevelopers = [
  {
    id: '1',
    name: 'GPT-Master',
    username: 'gpt_master_ai',
    avatar: 'GM',
    rank: 1,
    skill: 98,
    price: 8900,
    downloads: '156k',
    likes: 3421,
    rating: 4.9,
    reviewCount: 1234,
    category: 'NLP',
    tags: ['GPT-4', 'Fine-tuning', 'Prompt Engineering', 'RAG', 'LangChain', 'OpenAI API'],
    location: 'San Francisco, CA',
    joined: 'January 2023',
    responseTime: '< 2 hours',
    completionRate: '99%',
    bio: 'Specialized in building production-ready NLP systems with cutting-edge language models. Experienced in fine-tuning GPT models, building RAG systems, and implementing AI chatbots for enterprise clients.',
    
    // 육각형 그래프 데이터
    hexagonStats: [
      { stat: 'Technical', value: 98 },
      { stat: 'Communication', value: 95 },
      { stat: 'Creativity', value: 92 },
      { stat: 'Speed', value: 96 },
      { stat: 'Reliability', value: 99 },
      { stat: 'Innovation', value: 94 }
    ],
    // 프로젝트
    projects: [
      {
        title: 'Enterprise Chatbot System',
        description: 'Built a multi-lingual customer service chatbot handling 50k+ queries/day',
        tech: ['GPT-4', 'LangChain', 'Pinecone'],
        result: '40% reduction in support costs'
      },
      {
        title: 'Document Analysis Platform',
        description: 'AI-powered document processing and insights generation system',
        tech: ['GPT-4', 'RAG', 'ChromaDB'],
        result: '10x faster document processing'
      },
      {
        title: 'Code Assistant Integration',
        description: 'Custom AI coding assistant for internal development team',
        tech: ['Codex', 'Fine-tuning', 'VSCode API'],
        result: '30% boost in developer productivity'
      }
    ],
    // 리뷰
    reviews: [
      {
        id: 1,
        author: 'Sarah Johnson',
        avatar: 'SJ',
        rating: 5,
        date: '2 weeks ago',
        text: 'Absolutely amazing work! GPT-Master delivered a sophisticated chatbot that exceeded our expectations. The implementation was flawless and well-documented.',
        helpful: 45,
        project: 'Enterprise Chatbot'
      },
      {
        id: 2,
        author: 'Michael Chen',
        avatar: 'MC',
        rating: 5,
        date: '1 month ago',
        text: 'Highly professional and skilled developer. The RAG system was implemented perfectly and the performance is outstanding. Communication was excellent throughout.',
        helpful: 38,
        project: 'Document Analysis'
      },
      {
        id: 3,
        author: 'Emma Williams',
        avatar: 'EW',
        rating: 4,
        date: '2 months ago',
        text: 'Great experience working with this developer. Very knowledgeable about GPT models and delivered quality code. Minor delays but overall excellent work.',
        helpful: 29,
        project: 'Code Assistant'
      },
      {
        id: 4,
        author: 'David Park',
        avatar: 'DP',
        rating: 5,
        date: '2 months ago',
        text: 'Outstanding expertise in NLP and prompt engineering. The results were phenomenal and the developer was very responsive to feedback.',
        helpful: 52,
        project: 'Custom Fine-tuning'
      }
    ]
  }
];

// ID로 개발자 데이터 가져오기
export const getDeveloperById = (id) => {
  const developer = mockDevelopers.find(dev => dev.id === id);
  return developer || mockDevelopers[0]; // 기본값으로 첫 번째 개발자 반환
};

