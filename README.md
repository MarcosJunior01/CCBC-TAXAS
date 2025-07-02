# Simulador de Exportação Brasil-Canadá

Este é um projeto de portfólio desenvolvido para simular e visualizar dados relevantes sobre as exportações entre o Brasil e o Canadá. O objetivo é demonstrar habilidades em desenvolvimento web, análise de dados e criação de interfaces interativas, oferecendo uma ferramenta prática para explorar o cenário do comércio bilateral.

## Visão Geral do Projeto

O Simulador de Exportação Brasil-Canadá permite aos usuários:

* **Simular Custos de Exportação:** Calcule estimativas de frete, taxas alfandegárias e ICMS com base em detalhes da mercadoria, modal de transporte e rotas específicas.
* **Visualizar Tendências de Mercado:** Acesse informações atualizadas sobre a taxa de câmbio CAD/BRL e o crescimento das exportações.
* **Explorar Top 5 Produtos Exportados:** Veja os principais produtos que o Brasil exporta para o Canadá, com seus respectivos percentuais de representatividade.
* **Analisar Histórico de Exportações:** Visualize o volume de exportações anuais entre 2021 e 2024.

## Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

* **React.js:** Biblioteca JavaScript para construção da interface do usuário.
* **Charts.js:** Biblioteca JavaScript para a criação dos gráficos interativos e visualização de dados.
* **HTML/CSS:** Estrutura e estilização da aplicação.
* **JavaScript:** Lógica de programação e manipulação de dados.

## Funcionalidades Detalhadas

### Formulário de Simulação

* **Valor da Exportação:** Campo para inserir o valor total da mercadoria em Reais (R$).
* **Tipo de Mercadoria:** Seleção entre diferentes categorias de produtos (e.g., Industrial).
* **Modal de Transporte:** Escolha entre modalidades como Aéreo, Marítimo, etc.
* **Cidades de Origem e Destino:** Seleção de cidades brasileiras (origem) e canadenses (destino), com exemplos como São Paulo (GRU) e Toronto (YYZ).
* **Quantidade de Volumes:** Definição do número de volumes a serem exportados.
* **Botão "Calcular Custos":** Aciona o cálculo e exibe o resumo dos custos.

### Resumo de Custos

Após a simulação, são exibidos os detalhes de custo:

* **Distância Estimada:** Em quilômetros.
* **Frete Estimado:** Valor aproximado do transporte.
* **Taxa Alfandegária:** Valor da taxa aduaneira.
* **Taxa ICMS:** Imposto sobre Circulação de Mercadorias e Serviços.
* **Total Estimado:** Custo total aproximado da exportação.

### Dados de Mercado

* **Cotação CAD/BRL:** Exibe a cotação atual e a variação percentual da moeda canadense em relação ao real brasileiro nos últimos 6 meses.
* **Exportações 2025 (Primeiro Trimestre):** Valor total das exportações brasileiras para o Canadá no primeiro trimestre de 2025 e seu crescimento percentual em relação ao ano anterior.
* **Top 5 Exportações Brasil-Canadá:** Gráfico de barras detalhando os 5 principais produtos exportados por valor percentual.
* **Histórico de Exportações (2021-2024):** Gráfico de barras mostrando a evolução anual das exportações em bilhões de USD.

## Como Executar o Projeto Localmente

Para rodar este projeto em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [ccbc-tax-calculator]
    cd [ccbc-tax-calculator]
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```
3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    # ou
    yarn start
    ```
    O aplicativo será aberto automaticamente no seu navegador em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias, novas funcionalidades ou correção de bugs.

