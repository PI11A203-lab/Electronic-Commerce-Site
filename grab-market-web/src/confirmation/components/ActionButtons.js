import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useHistory } from 'react-router-dom';

export default function ActionButtons() {
  const history = useHistory();

  return (
    <div className="confirmation-action-buttons">
      <button
        onClick={() => history.push('/')}
        className="confirmation-action-btn-primary"
      >
        Browse More Developers
        <ArrowRight className="confirmation-action-btn-icon" />
      </button>
      <button
        onClick={() => history.push('/profile')}
        className="confirmation-action-btn-secondary"
      >
        View Purchase History
      </button>
    </div>
  );
}

