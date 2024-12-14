describe('Verificação de Resultado', () => {

  it('Deverá Exibir o Resultado da Prova Após Submeter, Evniar o Gabarito', () => {

    //Usando o comando customizado de login

    cy.login();
    
    //Iniciando a prova

    cy.get('button').contains('Iniciar Prova').click();
    
    //Respondendo as questões

    cy.get('input[name="questao1"]').check('alternativa1');
    cy.get('input[name="questao2"]').check('alternativa2');
    
    //Submetendo a prova

    cy.get('button').contains('Submeter Prova').click();
    
    //Aguardando o carregamento da página de resultado
    
    cy.url().should('include', '/resultado');
    cy.contains('Resultado da Prova').should('be.visible');
    cy.contains('Nota:').should('be.visible');
  });

});
