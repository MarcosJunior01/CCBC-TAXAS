import React from 'react';
import '../styles/TopProductsCard.css';

const produtos = [
  { nome: 'Metais Preciosos', percentual: 28, cor: '#6f42c1' },
  { nome: 'Alumina', percentual: 24, cor: '#fd7e14' },
  { nome: 'Aeronaves e Partes', percentual: 11, cor: '#20c997' },
  { nome: 'Açúcares e Melaços', percentual: 9.5, cor: '#17a2b8' },
  { nome: 'Minério de Ferro', percentual: 8, cor: '#ffc107' }
];

const TopProductsCard = () => {
  return (
    <div className="products-card">
      <h4>Top 5 Exportações (Brasil → Canadá)</h4>
      <ul>
        {produtos.map((item, idx) => (
          <li key={idx}>
            <span className="product-label">{item.nome}</span>
            <div className="bar-wrapper">
              <div className="bar" style={{ width: `${item.percentual}%`, backgroundColor: item.cor }}></div>
              <span className="percent">{item.percentual}%</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopProductsCard;
