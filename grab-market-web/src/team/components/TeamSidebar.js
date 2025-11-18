import React from 'react';
import { Users, X, Award } from 'lucide-react';
import { API_URL } from '../../config/constants';
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
          <span>AIチーム</span>
          <span className="team-count">
            {selectedTeam.length}/{maxTeamSize}
          </span>
        </h3>
        
        {selectedTeam.length === 0 ? (
          <div className="empty-team">
            <Users className="empty-icon" />
            <p>開発者が選択されていません</p>
            <p className="empty-subtitle">開発者を選択してください</p>
          </div>
        ) : (
          <>
            {/* 선택된 팀원 */}
            <div className="selected-team-list">
              {selectedTeam.map((dev) => (
                <div key={dev.id} className="team-member-item">
                  <div className="team-member-avatar">
                    {dev.imageUrl ? (
                      <img 
                        src={`${API_URL}/${dev.imageUrl}`} 
                        alt={dev.name}
                      />
                    ) : (
                      dev.name.substring(0, 2)
                    )}
                  </div>
                  <div className="team-member-info">
                    <h4 className="team-member-name">{dev.name}</h4>
                    <p className="team-member-price">¥{dev.price.toLocaleString()}</p>
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
                <span className="price-label">チーム合計</span>
                <span className="price-value">¥{totalPrice.toLocaleString()}</span>
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
              <p className="tip-title">💡 プロダクトドキュメント</p>
              <p className="tip-description">
              異なる専門分野を持つチームを作り、最大限活用して最高の結果を得てください！
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}