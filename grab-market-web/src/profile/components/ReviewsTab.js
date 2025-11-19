import React from 'react';
import { Star } from 'lucide-react';

export default function ReviewsTab({ reviews }) {
  return (
    <div className="reviews-list">
      {reviews.map((review) => (
        <div key={review.id} className="review-card">
          <div className="review-header">
            <h3 className="review-ai-name">{review.aiName}</h3>
            <div className="review-rating">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`review-star ${i < review.rating ? 'filled' : ''}`}
                />
              ))}
            </div>
          </div>
          <p className="review-comment">{review.comment}</p>
          <span className="review-date">{review.date}</span>
        </div>
      ))}
    </div>
  );
}

