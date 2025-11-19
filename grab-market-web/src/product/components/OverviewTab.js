import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

export default function OverviewTab({ hexagonStats }) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart data={hexagonStats}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis dataKey="stat" tick={{ fill: '#6b7280', fontSize: 14 }} />
          <PolarRadiusAxis domain={[0, 100]} tick={{ fill: '#6b7280' }} />
          <Radar name="Skills" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

