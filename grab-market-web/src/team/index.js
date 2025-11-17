import React, { useState } from 'react';
import TeamHeader from './components/TeamHeader';
import AvailableDevelopers from './components/AvailableDevelopers';
import TeamSidebar from './components/TeamSidebar';
import { availableDevelopers, maxTeamSize } from './mockData';
import './index.css';

export default function TeamBuilder() {
  const [selectedTeam, setSelectedTeam] = useState([]);

  // 팀에 추가
  const addToTeam = (developer) => {
    if (selectedTeam.length < maxTeamSize && !selectedTeam.find(d => d.id === developer.id)) {
      setSelectedTeam([...selectedTeam, developer]);
    }
  };

  // 팀에서 제거
  const removeFromTeam = (developerId) => {
    setSelectedTeam(selectedTeam.filter(d => d.id !== developerId));
  };

  // 팀 평균 스탯 계산
  const calculateTeamStats = () => {
    if (selectedTeam.length === 0) {
      return [
        { stat: 'Technical', value: 0 },
        { stat: 'Communication', value: 0 },
        { stat: 'Creativity', value: 0 },
        { stat: 'Speed', value: 0 },
        { stat: 'Reliability', value: 0 },
        { stat: 'Innovation', value: 0 }
      ];
    }

    const avgStats = selectedTeam.reduce((acc, dev) => ({
      technical: acc.technical + dev.stats.technical,
      communication: acc.communication + dev.stats.communication,
      creativity: acc.creativity + dev.stats.creativity,
      speed: acc.speed + dev.stats.speed,
      reliability: acc.reliability + dev.stats.reliability,
      innovation: acc.innovation + dev.stats.innovation
    }), { technical: 0, communication: 0, creativity: 0, speed: 0, reliability: 0, innovation: 0 });

    const teamSize = selectedTeam.length;
    return [
      { stat: 'Technical', value: Math.round(avgStats.technical / teamSize) },
      { stat: 'Communication', value: Math.round(avgStats.communication / teamSize) },
      { stat: 'Creativity', value: Math.round(avgStats.creativity / teamSize) },
      { stat: 'Speed', value: Math.round(avgStats.speed / teamSize) },
      { stat: 'Reliability', value: Math.round(avgStats.reliability / teamSize) },
      { stat: 'Innovation', value: Math.round(avgStats.innovation / teamSize) }
    ];
  };

  // 총 가격 계산
  const calculateTotalPrice = () => {
    return selectedTeam.reduce((sum, dev) => sum + dev.price, 0);
  };

  // 시너지 스코어 계산
  const calculateSynergyScore = () => {
    if (selectedTeam.length === 0) return 0;
    
    const teamStats = calculateTeamStats();
    const avgScore = teamStats.reduce((sum, stat) => sum + stat.value, 0) / teamStats.length;
    
    // 팀 크기 보너스
    const sizeBonus = selectedTeam.length * 3;
    
    // 다양성 보너스 (다른 카테고리)
    const categories = new Set(selectedTeam.map(d => d.category));
    const diversityBonus = categories.size * 5;
    
    return Math.round(avgScore + sizeBonus + diversityBonus);
  };

  const teamStats = calculateTeamStats();
  const synergyScore = calculateSynergyScore();
  const totalPrice = calculateTotalPrice();

  return (
    <div className="team-builder">
      <TeamHeader />
      
      <main className="team-main">
        <div className="team-intro">
          <h2 className="team-title">Build Your AI Dream Team</h2>
          <p className="team-subtitle">
            Select up to {maxTeamSize} AI developers to create the perfect team for your project
          </p>
        </div>

        <div className="team-content-grid">
          <AvailableDevelopers
            developers={availableDevelopers}
            selectedTeam={selectedTeam}
            maxTeamSize={maxTeamSize}
            onAddToTeam={addToTeam}
            onRemoveFromTeam={removeFromTeam}
          />

          <TeamSidebar
            selectedTeam={selectedTeam}
            maxTeamSize={maxTeamSize}
            teamStats={teamStats}
            synergyScore={synergyScore}
            totalPrice={totalPrice}
            onRemoveFromTeam={removeFromTeam}
          />
        </div>
      </main>
    </div>
  );
}

