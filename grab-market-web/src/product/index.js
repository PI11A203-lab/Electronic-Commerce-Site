import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Star, Heart, Share2, Award, Clock, MapPin, Calendar, TrendingUp, ThumbsUp } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import "./index.css";

export default function ProductPage() {
  const { id } = useParams();
  const history = useHistory();
  const [activeTab, setActiveTab] = useState('overview');
  const [isLiked, setIsLiked] = useState(false);

  const developer = {
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
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-3xl">🤖</span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AIDE Market
              </span>
            </h1>
            <button 
              onClick={() => history.push('/')}
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              ← Back to search
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-8 py-12">
        <div className="grid grid-cols-3 gap-8">
          {/* 메인 컨텐츠 */}
          <div className="col-span-2">
            {/* 프로필 헤더 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6">
              <div className="flex items-start gap-6 mb-6">
                {/* 아바타 & 랭킹 */}
                <div className="relative">
                  <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-4xl">
                    {developer.avatar}
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    #{developer.rank}
                  </div>
                </div>
                {/* 기본 정보 */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h2 className="text-4xl font-bold mb-2">{developer.name}</h2>
                      <p className="text-gray-600 text-lg">@{developer.username}</p>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setIsLiked(!isLiked)}
                        className={`p-3 rounded-xl transition ${isLiked ? 'bg-red-50 text-red-500' : 'bg-gray-100 hover:bg-gray-200'}`}
                      >
                        <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
                      </button>
                      <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition">
                        <Share2 className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                  {/* 평점 */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="font-bold text-xl">{developer.rating}</span>
                    </div>
                    <span className="text-gray-600">({developer.reviewCount.toLocaleString()} reviews)</span>
                  </div>
                  {/* 태그 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {developer.tags.map((tag, idx) => (
                      <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-xl text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{developer.bio}</p>
                </div>
              </div>
              {/* 통계 */}
              <div className="grid grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{developer.downloads}</div>
                  <div className="text-sm text-gray-600">Total Hires</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{developer.completionRate}</div>
                  <div className="text-sm text-gray-600">Completion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{developer.responseTime}</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{developer.skill}%</div>
                  <div className="text-sm text-gray-600">Skill Level</div>
                </div>
              </div>
            </div>

            {/* 탭 네비게이션 */}
            <div className="bg-white rounded-2xl border border-gray-200 mb-6">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`flex-1 py-4 font-semibold transition ${
                    activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`flex-1 py-4 font-semibold transition ${
                    activeTab === 'projects' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`flex-1 py-4 font-semibold transition ${
                    activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Reviews ({developer.reviewCount})
                </button>
              </div>
              <div className="p-8">
                {/* Overview 탭 */}
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
                    <ResponsiveContainer width="100%" height={400}>
                      <RadarChart data={developer.hexagonStats}>
                        <PolarGrid stroke="#e5e7eb" />
                        <PolarAngleAxis dataKey="stat" tick={{ fill: '#6b7280', fontSize: 14 }} />
                        <PolarRadiusAxis domain={[0, 100]} tick={{ fill: '#6b7280' }} />
                        <Radar name="Skills" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                )}

                {/* Projects 탭 */}
                {activeTab === 'projects' && (
                  <div className="space-y-6">
                    {developer.projects.map((project, idx) => (
                      <div key={idx} className="border-l-4 border-blue-500 pl-6 py-4 bg-gray-50 rounded-r-xl">
                        <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                        <p className="text-gray-700 mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-green-600 font-semibold">
                          <TrendingUp className="w-4 h-4" />
                          <span>{project.result}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Reviews 탭 */}
                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    {developer.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-white font-bold">
                            {review.avatar}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h4 className="font-bold">{review.author}</h4>
                                <p className="text-sm text-gray-600">{review.date}</p>
                              </div>
                              <div className="flex items-center gap-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <div className="mb-2">
                              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                                {review.project}
                              </span>
                            </div>
                            <p className="text-gray-700 mb-3">{review.text}</p>
                            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                              <ThumbsUp className="w-4 h-4" />
                              Helpful ({review.helpful})
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 사이드바 */}
          <div className="space-y-6">
            {/* 가격 & 구매 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24">
              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-2">Starting from</div>
                <div className="text-5xl font-bold text-gray-900 mb-1">
                  ${developer.price.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">per project</div>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition mb-3">
                Hire Now
              </button>
              
              <button className="w-full py-4 border-2 border-gray-300 rounded-xl font-bold hover:border-gray-400 hover:bg-gray-50 transition">
                Schedule Consultation
              </button>
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span>{developer.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span>Joined {developer.joined}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span>Responds in {developer.responseTime}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Award className="w-5 h-5 text-gray-400" />
                  <span>Top 1% Developer</span>
                </div>
              </div>
            </div>

            {/* 신뢰 배지 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h4 className="font-bold mb-4">Verified & Trusted</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-sm">Identity Verified</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm">Top Rated Developer</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-sm">156k+ Successful Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
