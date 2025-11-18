import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeamHeader from './components/TeamHeader';
import AvailableDevelopers from './components/AvailableDevelopers';
import TeamSidebar from './components/TeamSidebar';
import { API_URL } from '../config/constants';
import './index.css';

export default function TeamBuilder() {
  const [selectedTeam, setSelectedTeam] = useState([]);
  const [availableDevelopers, setAvailableDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const maxTeamSize = 5;

  useEffect(() => {
    axios
      .get(`${API_URL}/products`)
      .then((result) => {
        const products = result.data.products;
        // API 응답을 developer 형식으로 변환
        const developers = products.map(product => ({
          id: product.id,
          name: product.name,
          category: 'NLP', // 기본값
          price: product.price,
          imageUrl: product.imageUrl, // ← 추가!
          stats: {
            technical: 95,
            communication: 90,
            creativity: 88,
            speed: 92,
            reliability: 93,
            innovation: 90
          }
        }));
        setAvailableDevelopers(developers);
        setLoading(false);
      })
      .catch((error) => {
        console.error('エラー発生 : ', error);
        setLoading(false);
      });
  }, []);

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

  if (loading) {
    return (
      <div className="team-builder">
        <TeamHeader />
        <main className="team-main">
          <div className="text-center py-12">
            <div className="text-xl text-gray-600">Loading...</div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="team-builder">
      <TeamHeader />
      
      <main className="team-main">
        <div className="team-intro">
          <h2 className="team-title">あなたの理想のAIチームを構成してみましょう</h2>
          <p className="team-subtitle">
            最大 {maxTeamSize} 人まで選択して、理想的なAIチームを作成しましょう
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