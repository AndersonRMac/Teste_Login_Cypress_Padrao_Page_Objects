///<reference types = "Cypress"/>
import { el } from "./elements";
import LoginPage from './index'


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
  
 });