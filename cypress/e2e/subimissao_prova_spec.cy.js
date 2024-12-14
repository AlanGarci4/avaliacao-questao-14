describe('Submissão de Prova', () => {

  it('Deverá Permitir que o Aluno Submeta a Prova, Enviar Gabarito.', () => {
    
    //Usando o comando customizado de login

    cy.login();
    
    //Iniciando a prova

    cy.get('button').contains('Iniciar Prova').click();
    
    //Respondendo as questões

    cy.get('input[name="questao1"]').check('alternativa1');
    cy.get('input[name="questao2"]').check('alternativa2');
    
    //Submetendo a prova

    cy.get('button').contains('Submeter Prova').click();
    
    //Verifica se a prova foi enviada corretamente
    
    cy.url().should('include', '/resultado');
    cy.contains('Prova Enviada').should('be.visible');
  });

});
