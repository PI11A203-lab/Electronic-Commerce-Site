import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';

export default function ReviewsTab({ reviews }) {
  return (
    <div className="space-y-6">
      {reviews.map((review) => (
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
  );
}

