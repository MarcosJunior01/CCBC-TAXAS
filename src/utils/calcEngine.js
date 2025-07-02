export function calcularCustos({ valorExportacao, tipoMercadoria, transporte, origem, destino, volumes }) {
  const valor = parseFloat(valorExportacao);
  const vol = parseInt(volumes);

  // Definições fixas
  let distancia = 9000;



  if (origem === 'sao_paulo' && destino === 'toronto') {
  distancia = 8216;
} else if (origem === 'rio_de_janeiro' && destino === 'ottawa') {
  distancia = 8310;
}

  const valorPorKm = transporte === 'aereo' ? 0.35 : 0.15;
  const frete = valorPorKm * distancia * vol;

  const taxasAlfandegarias = {
    industrial: 0.12,
    alimentos: 0.08,
    bebidas: 0.10,
    tecnologia: 0.15
  };

  const taxaAlfandegaria = valor * (taxasAlfandegarias[tipoMercadoria] || 0);
  const taxaCCBC = valor * 0.025;
  const total = frete + taxaAlfandegaria + taxaCCBC;

  return {
    distancia,
    frete,
    taxaAlfandegaria,
    taxaCCBC,
    total
  };
}
