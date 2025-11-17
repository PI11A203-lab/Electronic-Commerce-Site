import React from 'react';
import { Users } from 'lucide-react';
import DeveloperCard from './DeveloperCard';

export default function AvailableDevelopers({ 
  developers, 
  selectedTeam, 
  maxTeamSize, 
  onAddToTeam, 
  onRemoveFromTeam 
}) {
  return (
    <div className="available-developers-section">
      <div className="section-card">
        <h3 className="section-title">
          <Users className="section-icon" />
          Available AI Developers
        </h3>
        <div className="developers-grid">
          {developers.map((dev) => {
            const isSelected = selectedTeam.find(d => d.id === dev.id);
            const isFull = selectedTeam.length >= maxTeamSize;
            return (
              <DeveloperCard
                key={dev.id}
                developer={dev}
                isSelected={!!isSelected}
                isFull={isFull}
                onAdd={onAddToTeam}
                onRemove={onRemoveFromTeam}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

