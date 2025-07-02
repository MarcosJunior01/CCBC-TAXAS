// src/components/ExportChart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/ExportChart.css';

const data = [
  { year: '2021', value: 4.922 },
  { year: '2022', value: 5.382 },
  { year: '2023', value: 5.777 },
  { year: '2024', value: 6.311 }
];

const ExportChart = () => {
  return (
    <div className="chart-container">
      <h3>Exportações Brasil → Canadá (em bilhões USD)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#0057a3" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExportChart;
