import React from 'react';
import { Sparkles } from 'lucide-react';
import PurchasedAIItem from './PurchasedAIItem';

export default function PurchasedAIList({ purchasedAIs, onCopyCode }) {
  return (
    <div className="confirmation-ai-list">
      <div className="confirmation-ai-list-header">
        <Sparkles className="confirmation-ai-list-icon" />
        <h3 className="confirmation-ai-list-title">Your AI Developers</h3>
      </div>
      <div className="confirmation-ai-list-items">
        {purchasedAIs.map((ai, index) => (
          <PurchasedAIItem
            key={ai.id}
            ai={ai}
            index={index}
            onCopyCode={onCopyCode}
          />
        ))}
      </div>
    </div>
  );
}

