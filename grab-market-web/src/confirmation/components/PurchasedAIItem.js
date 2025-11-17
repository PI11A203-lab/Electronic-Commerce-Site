import React from 'react';
import { Download, ExternalLink, Copy } from 'lucide-react';

export default function PurchasedAIItem({ ai, index, onCopyCode }) {
  return (
    <div className="confirmation-ai-item">
      <div className="confirmation-ai-item-content">
        <div className="confirmation-ai-avatar-wrapper">
          <div className="confirmation-ai-avatar">
            {ai.avatar}
          </div>
          <div className="confirmation-ai-number-badge">
            {index + 1}
          </div>
        </div>
        <div className="confirmation-ai-info">
          <div className="confirmation-ai-header">
            <div>
              <h4 className="confirmation-ai-name">{ai.name}</h4>
              <p className="confirmation-ai-category">{ai.category}</p>
            </div>
            <div className="confirmation-ai-price">
              ${ai.price.toLocaleString()}
            </div>
          </div>
          <div className="confirmation-ai-code-box">
            <div className="confirmation-ai-code-header">
              <span className="confirmation-ai-code-label">🔑 Activation Code</span>
              <button
                onClick={() => onCopyCode(ai.activationCode)}
                className="confirmation-ai-code-copy-btn"
              >
                <Copy className="confirmation-ai-code-copy-icon" />
                Copy
              </button>
            </div>
            <code className="confirmation-ai-code">
              {ai.activationCode}
            </code>
          </div>
          <div className="confirmation-ai-actions">
            <button className="confirmation-ai-download-btn">
              <Download className="confirmation-ai-download-icon" />
              Download Documentation
            </button>
            <button className="confirmation-ai-guide-btn">
              <ExternalLink className="confirmation-ai-guide-icon" />
              View Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

