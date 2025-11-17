import React from 'react';
import { Mail } from 'lucide-react';

export default function SupportInfo() {
  return (
    <div className="confirmation-support">
      <p className="confirmation-support-text">
        Need help? Our support team is here for you 24/7
      </p>
      <div className="confirmation-support-links">
        <a href="#" className="confirmation-support-link">
          <Mail className="confirmation-support-link-icon" />
          support@aidemarket.com
        </a>
        <span className="confirmation-support-separator">•</span>
        <a href="#" className="confirmation-support-link">
          Help Center
        </a>
        <span className="confirmation-support-separator">•</span>
        <a href="#" className="confirmation-support-link">
          Live Chat
        </a>
      </div>
    </div>
  );
}

