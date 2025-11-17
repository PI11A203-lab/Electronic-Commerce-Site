import React, { useState } from 'react';
import { Mail, Copy } from 'lucide-react';

export default function EmailNotification({ userEmail, onCopyEmail }) {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopy = () => {
    onCopyEmail(userEmail);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <div className="confirmation-email-card">
      <div className="confirmation-email-content">
        <div className="confirmation-email-icon-wrapper">
          <Mail className="confirmation-email-icon" />
        </div>
        <div className="confirmation-email-main">
          <h3 className="confirmation-email-title">📧 Check Your Email!</h3>
          <p className="confirmation-email-description">
            We've sent activation codes and setup instructions to:
          </p>
          <div className="confirmation-email-box">
            <div className="confirmation-email-box-content">
              <span className="confirmation-email-address">{userEmail}</span>
              <button
                onClick={handleCopy}
                className="confirmation-email-copy-btn"
              >
                <Copy className="confirmation-email-copy-icon" />
                {emailCopied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
          <div className="confirmation-email-steps">
            <p className="confirmation-email-steps-title">⚡ Next Steps:</p>
            <ol className="confirmation-email-steps-list">
              <li className="confirmation-email-step-item">
                <span className="confirmation-email-step-number">1.</span>
                <span>Open the email from AIDE Market</span>
              </li>
              <li className="confirmation-email-step-item">
                <span className="confirmation-email-step-number">2.</span>
                <span>Copy your activation codes below</span>
              </li>
              <li className="confirmation-email-step-item">
                <span className="confirmation-email-step-number">3.</span>
                <span>Register the codes in your AIDE Program</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

