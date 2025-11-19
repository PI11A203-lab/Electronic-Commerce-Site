import React from 'react';
import { Target } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

export default function TeamStatsChart({ teamStats }) {
  return (
    <div className="team-stats-chart">
      <h4 className="chart-title">
        <Target className="chart-icon" />
        Team Stats
      </h4>
      <ResponsiveContainer width="100%" height={200}>
        <RadarChart data={teamStats}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis dataKey="stat" tick={{ fill: '#6b7280', fontSize: 10 }} />
          <PolarRadiusAxis domain={[0, 100]} tick={false} />
          <Radar name="Team" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

