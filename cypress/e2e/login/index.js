import { el } from "../login/elements";

//AONDE DEIXO OS ESCRIPTS DE FUNÇÕES USADAS PARA TESTES
const LoginPage = {
    go: function() {
        cy.visit(el.urlInicial);
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
        cy.wait(3000);
        //Clique no botão confirmar
        cy.get(el.btnConfirmar).contains('Confirmar').click();
    },
    fillSuspenseWindowMedicoVB: function(){

        cy.get(':nth-child(2) > .ng-untouched > .custom-select-container > .custom-select-header > .custom-select-header__icon-container').click();
        cy.get(':nth-child(2) > .ng-untouched > .custom-select-container > .custom-select-options > :nth-child(1) > .custom-select-option > .d-flex').click();
        cy.wait(3000);
    
        //Clique no botão confirmar
        cy.get(el.btnConfirmar).contains('Confirmar').click();
    },
    clicaEsqueceuASenha:()=>{
        cy.get(el.esqueceuASenha).click();
    },
    clicaPerguntasFrequentes:()=>{
        cy.get(el.perguntasFrequentes).click();
    }
}
export default LoginPage