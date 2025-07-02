import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/GrowthCard.css';

const data = [
  { month: 'Janeiro', value: 400 },
  { year: 'Fevereiro', value: 650 },
  { year: 'Março', value: 700 },
];

const GrowthCard = () => {
  return (
    <div className="growth-card">
      <div className="growth-info">
        <strong>Exportações 2025.</strong>
        <span className="growth-value">+44%</span>
      </div>
      <p>US$ 1,8 bilhão no Primeiro Trimeste</p>

      <div className="growth-chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#1c7e63"
              fill="url(#growthGradient)"
              strokeWidth={2}
              dot={false}
            />
            <defs>
              <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#c8f3df" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#f0fef7" stopOpacity={0.3} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GrowthCard;
