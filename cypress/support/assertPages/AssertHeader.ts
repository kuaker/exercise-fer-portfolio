import Header from '../modules/Header';

export class AssertHeader {
    checkLoggedAsUsernameIsVisible = () => {
        cy.log('*** checkLoggedAsUsermaneIsVisible ***');
        Header.getLoggedAs().should('be.visible');
    };
}

export default new AssertHeader();
