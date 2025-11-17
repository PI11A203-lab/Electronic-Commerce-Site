import React from 'react';
import { Users, X, Award } from 'lucide-react';
import TeamStatsChart from './TeamStatsChart';
import SynergyScore from './SynergyScore';

export default function TeamSidebar({ 
  selectedTeam, 
  maxTeamSize, 
  teamStats, 
  synergyScore, 
  totalPrice, 
  onRemoveFromTeam 
}) {
  return (
    <div className="team-sidebar">
      <div className="sidebar-card">
        <h3 className="sidebar-title">
          <span>Your Team</span>
          <span className="team-count">
            {selectedTeam.length}/{maxTeamSize}
          </span>
        </h3>
        
        {selectedTeam.length === 0 ? (
          <div className="empty-team">
            <Users className="empty-icon" />
            <p>No developers selected</p>
            <p className="empty-subtitle">Start building your team!</p>
          </div>
        ) : (
          <>
            {/* 선택된 팀원 */}
            <div className="selected-team-list">
              {selectedTeam.map((dev) => (
                <div key={dev.id} className="team-member-item">
                  <div className="team-member-avatar">
                    {dev.name.substring(0, 2)}
                  </div>
                  <div className="team-member-info">
                    <h4 className="team-member-name">{dev.name}</h4>
                    <p className="team-member-price">${dev.price.toLocaleString()}</p>
                  </div>
                  <button
                    onClick={() => onRemoveFromTeam(dev.id)}
                    className="team-member-remove"
                  >
                    <X className="remove-icon" />
                  </button>
                </div>
              ))}
            </div>

            {/* 팀 스탯 레이더 차트 */}
            <TeamStatsChart teamStats={teamStats} />

            {/* 시너지 스코어 */}
            <SynergyScore score={synergyScore} />

            {/* 총 가격 */}
            <div className="team-price-section">
              <div className="price-row">
                <span className="price-label">Team Total</span>
                <span className="price-value">${totalPrice.toLocaleString()}</span>
              </div>
              <div className="price-average">
                Average: ${selectedTeam.length > 0 ? Math.round(totalPrice / selectedTeam.length).toLocaleString() : 0} per developer
              </div>
            </div>

            {/* 확정 버튼 */}
            <button className="btn-confirm">
              Confirm Team & Proceed
            </button>
          </>
        )}
      </div>

      {/* 팁 */}
      {selectedTeam.length > 0 && (
        <div className="team-tip">
          <div className="tip-content">
            <Award className="tip-icon" />
            <div className="tip-text">
              <p className="tip-title">💡 Pro Tip</p>
              <p className="tip-description">
                Diversify your team with different specialties to maximize synergy and get the best results!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

