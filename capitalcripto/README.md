# DCA Tracker App

## Descrição do Projeto
O DCA Tracker é uma aplicação web desenvolvida para permitir que investidores registrem suas compras mensais de ativos.

## Preparação do Ambiente
Para executar a apalicação basta realizar o download do repositório do GitHub e abrir a pasta capitalcripto (cd ./capitalcripto) no terminal do seu editor de texto (recomendado uso do VSCode).
Dentro da pasta capitalcripto executar o comando:

npm install

Em seguida

sudo npm install -g json-server


## Como Executar
Após realizar o download de todos os arquivos e instalar as dependências da aplicação, abra o terminal na pasta no VSCode e execute: 

json-server --watch db.json

Em seguida, abrir outra aba no terminal e executar

npm run dev

Agora basta abrir a página no endereço sugerido pelo comando 'npm run dev'

## O que é DCA - Dollar Cost Average

O DCA, ou Dollar Cost Averaging, representa uma estratégia de investimento na qual o investidor realiza contribuições programadas em um dia específico do mês para todos os seus ativos. A principal vantagem do DCA reside no fato de que, em vez de o investidor buscar o momento exato para se expor ao mercado, ele opta por efetuar compras consistentes todos os meses, visando, a longo prazo, um preço médio mais atrativo. A estratégia de DCA foi mencionada pela primeira vez por Benjamin Graham em sua obra "The Intelligent Investor" de 1949.