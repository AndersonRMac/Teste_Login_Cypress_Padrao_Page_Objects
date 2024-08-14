import { el, login } from "./elements";


//AONDE DEIXO OS ESCRIPTS DE FUNÇÕES USADAS PARA TESTES
const LoginPage = {
    go: function() {
        cy.visit(el.urlInicial)
    },
    fillFormPasswordError: ()=>{
    // Preenche o campo Login inválido
    cy.get(el.login).type(login["Médico da Familia"].username);
    // Preenche o campo de Senha
    cy.get(el.password).type('Teste');
    },
    fillFormLoginError: () =>{
        // Preenche o campo Login inválido
        cy.get(el.login).type('Teste');
        // Preenche o campo de Senha
        cy.get(el.password).type(login["Médico da Familia"].password);
    },

    fillForm: function (){
        // Preenche o campo de Login
        cy.get(el.login).type(login["Médico da Familia"].username);
        // Preenche o campo de Senha
        cy.get(el.password).type(login["Médico da Familia"].password);
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
    }
}
export default LoginPage