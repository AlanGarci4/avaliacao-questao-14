//Comando Customizado Simulando Login para Acessar uma Aplicação Web de Prova Online. Para executar em cada teste isoladamente,
//ou seja, a cada teste será efetuando um login, para simular o cruso dos testes a partir de cada login.

Cypress.Commands.add('login', () => {
    //Criamos variáveis dentro de um array constante, que apontam os valores "REAIS", que deverão estar contidos 
    //no arquivo cypress.env.json. Afim de utilizar os valores pra preenchimento dos campos dos dados de login.

    const { baseUrl, username, password } = Cypress.env();
    
    //Visita a URL de login, que neste caso foi crido de forma ficta para simular um exemplo de código inserido em Cypress,
    //em ambiente real o caminho pode ser diferente, mas no geral seria netes curso: VISITAR A PÁGINA PRINCIPAL + ENDPOINT DA AÇÃO.
    cy.visit(`${baseUrl}/login`); 
  
    //Inserção dos Dados nos campos da tela para se efetuar um login.

    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
    
    //Efetua a validação se o usuário foi logado ao tempo que ele deve ter sido direcionado para o ENDPOINT adequado relativo ao LOGIN,
    //ou seja, se ele está logado na página de fato.
    
    cy.url().should('include', '/provas');
  });
