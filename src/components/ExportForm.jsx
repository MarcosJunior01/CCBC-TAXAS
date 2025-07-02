import React, { useState } from 'react';
import { calcularCustos } from '../utils/calcEngine';
import '../styles/form.css';

const ExportForm = () => {
    const [form, setForm] = useState({
        valorExportacao: '',
        tipoMercadoria: '',
        transporte: '',
        origem: '',
        destino: '',
        volumes: '',
        prazo: ''
    });

    const [resultado, setResultado] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const res = calcularCustos(form);
        setResultado(res);
    };

    return (
        <div>
            <form className="export-form" onSubmit={handleSubmit}>
                <label>
                    Valor da Exportação (R$):
                    <input type="number" name="valorExportacao" value={form.valorExportacao} onChange={handleChange} required />
                </label>

                <label>
                    Tipo de Mercadoria:
                    <select name="tipoMercadoria" value={form.tipoMercadoria} onChange={handleChange} required>
                        <option value="">Selecione</option>
                        <option value="industrial">Industrial</option>
                        <option value="alimentos">Alimentos</option>
                        <option value="bebidas">Minérios</option>
                        <option value="tecnologia">Tecnologia</option>
                    </select>
                </label>

                <label>
                    Modal de Transporte:
                    <select name="transporte" value={form.transporte} onChange={handleChange} required>
                        <option value="">Selecione</option>
                        <option value="aereo">Aéreo</option>
                        <option value="maritimo">Marítimo</option>
                    </select>
                </label>

                <label>
                    Cidade de Origem (Brasil):
                    <select name="origem" value={form.origem} onChange={handleChange} required>
                        <option value="">Selecione</option>
                        <option value="sao_paulo">São Paulo (GRU)</option>
                        <option value="rio_de_janeiro">Rio de Janeiro (GIG)</option>
                    </select>
                </label>

                <label>
                    Cidade de Destino (Canadá):
                    <select name="destino" value={form.destino} onChange={handleChange} required>
                        <option value="">Selecione</option>
                        <option value="toronto">Toronto (YYZ)</option>
                        <option value="ottawa">Ottawa (YOW)</option>
                    </select>
                </label>

                <label>
                    Quantidade de Volumes:
                    <input type="number" name="volumes" value={form.volumes} onChange={handleChange} required />
                </label>

               

                <button type="submit">Calcular Custos</button>
            </form>

            {resultado && (
                <div className="resultado">
                    <h3>Resumo de Custos</h3>
                    <p><strong>Distância estimada:</strong> {resultado.distancia} km</p>
                    <p><strong>Frete Estimado:</strong> R$ {resultado.frete.toFixed(2)}</p>
                    <p><strong>Taxa Alfandegária:</strong> R$ {resultado.taxaAlfandegaria.toFixed(2)}</p>
                    <p><strong>Taxa CCBC:</strong> R$ {resultado.taxaCCBC.toFixed(2)}</p>
                    <hr />
                    <p><strong>Total Estimado:</strong> R$ {resultado.total.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
};

export default ExportForm;
