import { el, cr} from "../login/elements";
import { pageSiga } from "./elementsSB";

const ProntuarioSB_Page = {
    
    go: function () {
        cy.visit(el.urlSIGA);
        ProntuarioSB_Page.fillLoginSB();
        ProntuarioSB_Page.submit();
        ProntuarioSB_Page.fillSuspenseWindowMedicoSB();
    },
    prechimentoTelaSiga: ()=>{
        cy.get(pageSiga.CampoAnamnese).type("Teste automação Anamnese!");
        cy.wait(1000);
        cy.get(pageSiga.CampoConduta).type("Teste automação conduta!");
        cy.wait(5000);
        cy.get(pageSiga.BotaoProntuario).click();
    },
    fillLoginSB: function () {
        cy.get(el.login).type(cr.login_medicoSB);
        cy.get(el.password).type(cr.senh_medicoSB);
    },
    submit: function(){
        //Clica em Entrar
        cy.get(el.btnEnter).click();
    },
    fillSuspenseWindowEnfermeiroSB: function(){
        cy.get(':nth-child(2) > .ng-untouched > .custom-select-container > .custom-select-header').click();
        cy.get(':nth-child(2) > .ng-untouched > .custom-select-container > .custom-select-options > :nth-child(3) > .custom-select-option > .d-flex')
        .click();
        cy.wait(1000);
        //Clique no botão confirmar
        cy.get(el.btnConfirmar).contains('Confirmar').click();
    },
    fillSuspenseWindowMedicoSB: function(){

        cy.get(':nth-child(2) > .ng-untouched > .custom-select-container > .custom-select-header > .custom-select-header__icon-container').click();
        cy.get(':nth-child(2) > .ng-untouched > .custom-select-container > .custom-select-options > :nth-child(1) > .custom-select-option > .d-flex').click();
        cy.wait(1000);
    
        //Clique no botão confirmar
        cy.get(el.btnConfirmar).contains('Confirmar').click();
    },
    
}
export default ProntuarioSB_Page;