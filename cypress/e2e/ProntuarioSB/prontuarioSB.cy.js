import ProntuarioSB_Page from "../ProntuarioSB/indexSB"

describe('Teste funcional da tela de chamada de pacientes', () => {

    beforeEach(() =>{
        ProntuarioSB_Page.go();
        cy.wait(5000);
        ProntuarioSB_Page.prechimentoTelaSiga();

    });

    it('ProntuarioSB - CT 01 - Validar Login válido de médico no prontuário SB', () => {
        cy.get('span.app-title.mat-subheading-2')
        .should('be.visible')              // garante que o elemento está visível
        .and('have.text', 'sinta-se bem')  // valida o texto exato
    });

});
