import React from 'react';
import { MapPin, Calendar, Clock, Award } from 'lucide-react';

export default function PriceSidebar({ developer }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24">
      <div className="mb-6">
        <div className="text-sm text-gray-600 mb-2">Starting from</div>
        <div className="text-5xl font-bold text-gray-900 mb-1">
          ¥{developer.price.toLocaleString()}
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
  );
}

