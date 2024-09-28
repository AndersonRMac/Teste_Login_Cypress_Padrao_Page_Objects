///<reference types = "Cypress"/>
import { el } from "./elements";
import LoginPage from "./index"


 describe('Teste Funcional de Login', () =>{

  beforeEach(() =>{
    LoginPage.go();
  });

  it('LOGIN SIGA - CT01 - Credenciais de Login inválidas', () => {
    LoginPage.fillFormLoginError();
    LoginPage.submit();
    //Assert para validação
    cy.get('.error-title').should('be.visible');
  });

  it('LOGIN SIGA - CT02 - Senha inválida', () => {
    LoginPage.fillFormPasswordError();
    LoginPage.submit();
    //Assert para validação
    cy.get('.error-title').should('be.visible');
  });

  it('LOGIN SIGA - CT03 - Campos de Login e Senha vazios', () => {
    cy.get(el.btnEnter).should('be.disabled');
  });

  it('LOGIN SIGA - CT04 - Credenciais válidas de médico', ()=>{
    LoginPage.fillForm();
    LoginPage.submit();
    LoginPage.fillSuspenseWindow();
    cy.url().should('eq', el.urlLogada);    

  });
  it('LOGIN SIGA - CT05 - Valida link "Perguntas Frequentes"',()=>{

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
  
  it('LOGIN SIGA - CT06 - Valida link "Esqueceu a senha"', () =>{
    // Verifica se o href do link está correto
    cy.get(el.esqueceuASenha)
    .should('have.attr', 'href', el.esqueceuASenhaUrl)
    .click();
 });

  it.only('LOGIN SIGA - CT07 - Valida login enfermeiro"', () =>{
    LoginPage.fillEnfLogin();
    LoginPage.submit();
    LoginPage.fillSuspenseWindow();
    //Fazer lógia de validação do enfermeiro
  });
});





