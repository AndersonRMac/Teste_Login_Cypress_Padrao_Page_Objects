import { el, cr, login } from "./elements";




//AONDE DEIXO OS ESCRIPTS DE FUNÇÕES USADAS PARA TESTES
const LoginPage = {
    go: function() {
        cy.visit(el.urlInicial)
    },
    fillEnfLogin: () => {
        cy.get(el.login).type(cr.userVbEnf);
        cy.get(el.password).type(cr.passVbEnf);
    },
    fillFormPasswordError: ()=>{
    // Preenche o campo Login inválido
    cy.get(el.login).type(cr.userMfMed);
    // Preenche o campo de Senha
    cy.get(el.password).type('Teste');
    },
    fillFormLoginError: () =>{
        // Preenche o campo Login inválido
        cy.get(el.login).type('Teste');
        // Preenche o campo de Senha
        cy.get(el.password).type(cr.passMfMed);
    },

    fillForm: function (){
        // Preenche o campo de Login
        cy.get(el.login).type(cr.userMfMed);
        // Preenche o campo de Senha
        cy.get(el.password).type(cr.passMfMed);
    },
    submit: function(){
        //Clica em Entrar
        cy.get(el.btnEnter).click();
    },
    fillSuspenseWindow: function(){
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