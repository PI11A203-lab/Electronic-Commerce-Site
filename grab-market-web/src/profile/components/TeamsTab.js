import React from 'react';
import { Users, Award } from 'lucide-react';

export default function TeamsTab({ teams }) {
  return (
    <div className="teams-grid">
      {teams.map((team) => (
        <div key={team.id} className="team-card">
          <div className="team-header">
            <Users className="team-icon" />
            <h3 className="team-name">{team.name}</h3>
          </div>
          <div className="team-members">
            {team.members.map((member, idx) => (
              <div key={idx} className="team-member-badge">
                {member}
              </div>
            ))}
          </div>
          <div className="team-synergy">
            <Award className="synergy-icon" />
            <span className="synergy-label">Synergy Score</span>
            <span className="synergy-score">{team.synergyScore}</span>
          </div>
          <div className="team-date">Created: {team.createdDate}</div>
        </div>
      ))}
    </div>
  );
}

