///<reference types = "Cypress"/>
import { el } from "./elements";
import LoginPage from '../login/index'

 describe('Teste Funcional de Login', () =>{
      it('Deve realizar o login com sucesso', () => {
        LoginPage.go();
        LoginPage.filForm();
        LoginPage.submit();
        LoginPage.fillSuspenseWindow();
        //Assert para validar que o Login deu certo
        cy.url().should('eq', el.urlLogada);    
  })
 });