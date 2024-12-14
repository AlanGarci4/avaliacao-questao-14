describe('Iniciar Prova', () => {

  it('Deverá Permitir o Aluno Iniciar a Prova', () => {

    //Usando o comando customizado de login
    
    cy.login();
    
    //Inicia a prova

    cy.get('button').contains('Iniciar Prova').click();
    
    //Verifica se a página da prova foi carregada

    cy.url().should('include', '/prova');
    cy.contains('Início da Prova').should('be.visible');
  });

});


