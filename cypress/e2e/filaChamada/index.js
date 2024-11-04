import LoginPage from "../login";
import { el, cr } from "../login/elements";

const FilaPage = {
    
    go: function () {
        cy.visit(el.urlInicial);
        FilaPage.fillLogin(cr.userVbMed,cr.passVbMed);
        FilaPage.submit();
        FilaPage.fillSuspenseWindowMedicoVB();

        
    },
    fillLogin: function (_login, _pass) {
        cy.get(el.login).type(_login);
        cy.get(el.password).type(_pass);
    },
    submit: function(){
        //Clica em Entrar
        cy.get(el.btnEnter).click();
    },
    fillSuspenseWindowEnfermeiroVB: function(){
        cy.get(':nth-child(2) > .ng-untouched > .custom-select-container > .custom-select-header').click();
        cy.get(':nth-child(2) > .ng-untouched > .custom-select-container > .custom-select-options > :nth-child(3) > .custom-select-option > .d-flex')
        .click();
        cy.wait(1000);
        //Clique no botão confirmar
        cy.get(el.btnConfirmar).contains('Confirmar').click();
    },
    fillSuspenseWindowMedicoVB: function(){

        cy.get(':nth-child(2) > .ng-untouched > .custom-select-container > .custom-select-header > .custom-select-header__icon-container').click();
        cy.get(':nth-child(2) > .ng-untouched > .custom-select-container > .custom-select-options > :nth-child(1) > .custom-select-option > .d-flex').click();
        cy.wait(1000);
    
        //Clique no botão confirmar
        cy.get(el.btnConfirmar).contains('Confirmar').click();
    },
    
}
export default FilaPage;