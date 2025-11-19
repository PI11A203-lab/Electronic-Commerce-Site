import React from 'react';
import { Award, Star, TrendingUp } from 'lucide-react';

export default function TrustBadges() {
  return (
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
  );
}

