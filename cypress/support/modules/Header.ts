export class Header {
    getHeader = () => cy.get('#header');

    getCart = () => {
        return this.getHeader().find('a').contains('Cart');
    };

    getLoginSignUp = () => {
        return this.getHeader().find('a').contains('Signup / Login');
    };

    getLogout = () => {
        return this.getHeader().find('a').contains('Logout');
    };

    getContactUs = () => {
        return this.getHeader().find('a').contains('Contact us');
    };

    getLoggedAs = () => {
        return this.getHeader().find('a').contains('Logged in as');
    };

    getDeleteAccount = () => {
        return this.getHeader().find('a').contains('Delete Account');
    };

    getProducts = () => {
        return this.getHeader().find('a').contains('Products');
    };

    clickOnLogOut = () => this.getLogout().click();

    clickOnContactUs = () => this.getContactUs().click();

    clickOnCart = () => this.getCart().click();

    clickOnDeleteAccount = () => this.getDeleteAccount().click();

    clickOnLoginSignUpButton = () => this.getLoginSignUp().click();

    clickOnProductsButton = () => this.getProducts().click();
}

export default new Header();
