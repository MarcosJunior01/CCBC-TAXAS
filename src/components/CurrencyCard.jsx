import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/CurrencyCard.css';

const currencyData = [
  { month: 'Janeiro', rate: 4.05 },
  { month: 'Fevereiro', rate: 4.04 },
  { month: 'Março', rate: 4.03 },
  { month: 'Abril', rate: 4.07 },
  { month: 'Maio', rate: 4.16 },
  { month: 'Junho', rate: 4.00 }
];

const CurrencyCard = () => {
  return (
    <div className="currency-card">
      <div className="currency-info">
        <div>
          <strong>CAD/BRL</strong>
          <div className="subtitle">+2.20% mais barato nos últimos 6 meses</div>
        </div>
        <div className="price">R$ 4,00</div>
      </div>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={currencyData}>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="rate"
              stroke="#7b4fe6"
              strokeWidth={2.5}
              fill="url(#colorCad)"
              dot={false}
            />
            <defs>
              <linearGradient id="colorCad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#cdbcf9" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#f5f3ff" stopOpacity={0.2} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CurrencyCard;
