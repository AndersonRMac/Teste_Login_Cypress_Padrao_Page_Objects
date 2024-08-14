///<reference types = "Cypress"/>
import { el } from "./elements";
import LoginPage from '../login/index'

 describe('Teste Funcional de Login', () =>{

  beforeEach(() =>{
    LoginPage.go();
  })
  it('Teste de Login com credenciais de Login inválidas', () => {
    LoginPage.fillFormLoginError();
    LoginPage.submit();
    //Assert para validação
    cy.get('.error-title').should('be.visible');
  });
  it('Teste de Login com Senha inválida', () => {
    LoginPage.fillFormPasswordError();
    LoginPage.submit();
    cy.get('.error-title').should('be.visible');
  });
  it('Teste de Login com credenciais válidas', ()=>{
    LoginPage.fillForm();
    LoginPage.submit();
    LoginPage.fillSuspenseWindow();
    cy.url().should('eq', el.urlLogada);    

  })
 });