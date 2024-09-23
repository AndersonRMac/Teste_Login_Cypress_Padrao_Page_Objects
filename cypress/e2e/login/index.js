import { el, login } from "./elements";
const { username, password } = login['Medico da Familia'];



//AONDE DEIXO OS ESCRIPTS DE FUNÇÕES USADAS PARA TESTES
const LoginPage = {
    go: function() {
        cy.visit(el.urlInicial)
    },
    fillFormPasswordError: ()=>{
    // Preenche o campo Login inválido
    cy.get(el.login).type(username);
    // Preenche o campo de Senha
    cy.get(el.password).type('Teste');
    },
    fillFormLoginError: () =>{
        // Preenche o campo Login inválido
        cy.get(el.login).type('Teste');
        // Preenche o campo de Senha
        cy.get(el.password).type(password);
    },

    fillForm: function (){
        // Preenche o campo de Login
        cy.get(el.login).type(username);
        // Preenche o campo de Senha
        cy.get(el.password).type(password);
    },
    submit: function(){
        //Clica em Entrar
        cy.get(el.btnEnter).click();
    },
    fillSuspenseWindow: function(){
        //Selecionar o dropdown de agendas
        //cy.get(el.dropdownAgendas).click();
        // Selecione o dropdown de horários
        //cy.get(el.dropdownHorarios).click();
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