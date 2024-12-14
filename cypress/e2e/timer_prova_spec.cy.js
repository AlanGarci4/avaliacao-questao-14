describe('Validação de Tempo de Prova', () => {

  it('Deverá Exibir um Tempo e Bloquear Quando for Expirado.', () => {
    
    //Usando o comando customizado de login

    cy.login();
    
    //Iniciando a prova

    cy.get('button').contains('Iniciar Prova').click();
    
    //Verificando a presença do timer. E SUPONDO QUE O TIMER, TENHA UMA CLASSE .TIMER. Caso contrário poderíamos explorar
    //outras formas a depender da aplicação e condições de aplicação da prova online.

    cy.get('.timer').should('be.visible'); 
    
    //Simulando a espera até o tempo expirar. Supondo-se 1 minuto para efetuar uma simulçaão desse cenário, provavelmente o tempo
    //deverá ser maior, e esse esboço pode ser usado em tempo para questões da prova online.

    cy.wait(60000);
    
    //Verificando se a prova foi bloqueada após o tempo e se o botão de finlização está desabilitado após expiração do tempo de prova.

    cy.contains('Tempo Expirado').should('be.visible');
    cy.get('button').contains('Finalizar Prova').should('be.disabled'); 

 });
});