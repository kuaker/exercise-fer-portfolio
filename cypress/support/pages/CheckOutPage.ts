import { getRandomText240Char } from "../utils/data-generators";

const MESSAGE = 'message'

export class CheckOutPage {

    setMessage = () => cy.getByName(MESSAGE).scrollIntoView().clear().type(getRandomText240Char());

    clickOnPlaceOrderButton = () => cy.contains('a', 'Place Order').click();
}

export default new CheckOutPage();
