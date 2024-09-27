///<reference types = "Cypress"/>
import { el } from "./elements";
import LoginPage from "./index"


 describe('Teste Funcional de Login', () =>{

  beforeEach(() =>{
    LoginPage.go();
  });

  it('Teste de Login: Credenciais de Login inválidas', () => {
    LoginPage.fillFormLoginError();
    LoginPage.submit();
    //Assert para validação
    cy.get('.error-title').should('be.visible');
  });

  it('Teste de Login: Senha inválida', () => {
    LoginPage.fillFormPasswordError();
    LoginPage.submit();
    //Assert para validação
    cy.get('.error-title').should('be.visible');
  });

  it('Teste de Login: Campos de Login e Senha vazios', () => {
    cy.get(el.btnEnter).should('be.disabled');
  });

  it('Teste de Login: Credenciais válidas', ()=>{
    LoginPage.fillForm();
    LoginPage.submit();
    LoginPage.fillSuspenseWindow();
    cy.url().should('eq', el.urlLogada);    

  });
  it('Teste de Login: Valida link "Perguntas Frequentes"',()=>{

  // Intercepta a chamada de abertura da nova aba antes de clicar no botão
  cy.window().then((win) => {
    cy.stub(win, 'open').callsFake((url) => {
        // Completa a URL relativa, se necessário
        const fullUrl = url.startsWith('http') ? url : `${el.urlInicial}/${url}`;
        // Assegura que a URL completa foi chamada
        expect(fullUrl).to.equal(el.perguntasFrequentesUrl);
    }).as('open');
});
    LoginPage.clicaPerguntasFrequentes();
    // Verifica se a função 'open' foi chamada com a URL correta
    cy.get('@open').should('have.been.called');
    
  }); 
  
  it.only('Teste de Login: Valida link "Esqueceu a senha"', () =>{
    // Verifica se o href do link está correto
    cy.get(el.esqueceuASenha)
    .should('have.attr', 'href', el.esqueceuASenhaUrl)
    .click();
 });
});





