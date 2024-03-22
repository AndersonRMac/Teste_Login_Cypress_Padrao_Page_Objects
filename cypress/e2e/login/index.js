import { el } from "./elements";


//AONDE DEIXO OS ESCRIPTS DE FUNÇÕES USADAS PARA TESTES
const LoginPage = {
    go: function() {
        cy.visit(el.urlInicial)
    },
    filForm: function (user){
        // Preenche o campo de Login
        cy.get(el.login).type(/*dado sensível*/);
        // Preenche o campo de Senha
        cy.get(el.password).type(/*dado sensível*/);
    },
    submit: function(){
        //Clica em Entrar
        cy.get(el.btnEnter).click();
    },
    fillSuspenseWindow: function(){
        //Selecionar o dropdown de agendas
        cy.get(el.dropdownAgendas).click();
        // Selecione o dropdown de horários
        cy.get(el.dropdownHorarios).click();
        cy.wait(3000);
        //Clique no botão confirmar
        cy.get(el.btnConfirmar).contains('Confirmar').click();
    }
}
export default LoginPage