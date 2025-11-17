import React from 'react';
import { Star, Heart, Share2 } from 'lucide-react';

export default function ProfileHeader({ developer, isLiked, onLikeToggle }) {
  return (
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
                onClick={onLikeToggle}
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
  );
}

