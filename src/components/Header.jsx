
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo-area">
        <div className="circle-icon">🌎</div>
        <h1>Simulador de Exportação</h1>
      </div>
      <p className="subtitle">Brasil → Canadá | Estimativas de custos, distâncias e tendências de mercado</p>
    </header>
  );
};

export default Header;
