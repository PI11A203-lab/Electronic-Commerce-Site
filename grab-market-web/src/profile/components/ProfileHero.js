import React from 'react';
import { Github, Calendar } from 'lucide-react';
import StatsSection from './StatsSection';

export default function ProfileHero({ user }) {
  return (
    <div className="profile-hero">
      <div className="profile-hero-content">
        <div className="profile-avatar-section">
          <div className="profile-avatar-large">
            {user.avatar}
          </div>
          <div className="profile-info">
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-email">{user.email}</p>
            <div className="profile-tags">
              {user.tags.map((tag, idx) => (
                <span key={idx} className="profile-tag">#{tag}</span>
              ))}
            </div>
            <div className="profile-links">
              <a 
                href={`https://github.com/${user.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-github"
              >
                <Github className="w-5 h-5" />
                @{user.github}
              </a>
              <div className="profile-join">
                <Calendar className="w-5 h-5" />
                Joined {user.joinDate}
              </div>
            </div>
          </div>
        </div>

        <StatsSection stats={user.stats} />
      </div>
    </div>
  );
}

