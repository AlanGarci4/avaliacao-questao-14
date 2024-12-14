# Desafio Técnico com Cypress SENAI-AL, Questão 14.

👋 Seja bem vindo(a)!

## O que será demonstrado no código?

Questão 14. Desenvolva com Cypress um dos planos de teste criados para aplicação web de Prova Online.

- Foram abordados os cenários de: Iniciar Prova, Sumissão da Prova, Resultado da Prova e Tempo Máximo para Conclusão da Prova.
- A simulação dos teste criados a partir da questão proposta, não houve encaminhamento de base para ser tomada como parâmetro incial
  portanto, foi criado um modelo com dados fictos, mas encadeando so fluxos e seus processos decorrentes, para tal, então teremos o fluxo:
  - Inciar a Prova. Onde: Após login, será verificado se o aluno conseguiu acessar a prova;
  - Submissão da Prova (Envio do Gabarito). Onde: Se após login o aluno conseguiu submeter a prova com o envio de questões minímas 
    propostas;
  - Resultado da Prova: Onde: Se após login, e envio da prova, foi possível obter o resultado;
  - Tempo da Prova: Onde: Se após login, e a expiração do tempo proposto como simulação, se o botão de submeter foi bloueado e não 
    mais possível envio das questões, gabarito.

## O que fazer para baixar em minha máquina esse projeto exemplo da questão 14?  

Execute os comandos abaixo:

- git clone (coloque aqui o link do repositório sem os parenteses)
- cd nome do projeto (Ou seja, você deverá entrar no diretório o projeto e estar dentro da pasta)
- npm install
- Dentro do projeto com o VScode, abra o terminal com o comando: CTRL+SHIFT+'
- npx cypress open

## E se preferir entre em contato comigo no [LinkedIn](https://www.linkedin.com/in/alan-garcia-santos/).

 
