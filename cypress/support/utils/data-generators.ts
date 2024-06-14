import * as chance from 'chance';
export const CHANCE = new chance.Chance();

export function getId() {
    return Cypress._.random(0, 1e6);
}

export function generateNewEmail() {
    let id = getId();
    return `automationuser+${id}@testferautomation.com`;
}

export function getFirstName() {
    return CHANCE.first({ nationality: 'en' });
}

export function getLastName() {
    return CHANCE.last({ nationality: 'en' });
}

export function getRandomDay() {
    return Cypress._.random(1, 28);
}

export function getRandomMonth() {
    let randomMonth = Cypress._.random(0, 13);
    return randomMonth ? 0 : randomMonth + 1
}

export function getRandomYear() {
    return Cypress._.random(1900, 2021);
}


export function getRandomCountries() {
    const countries = ["India", "United States", "Canada", "Australia", "Israel", "New Zealand", "Singapore"];
    const randomCountries = Math.floor(Math.random() * countries.length);

    return countries[randomCountries]
}

export function getRandomText240Char() {
    return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet arcu odio. Phasellus facilisis id odio at laoreet. Quisque lacinia eros justo, quis rhoncus nunc scelerisque eget. Suspendisse et augue mauris. Ut tincidunt convall `
}

export function getCreditCard() {
    const CCARD = {
        nameOnCard: 'Bruno Diaz',
        cardNumber: '4442444255567776',
        cvc: '43568',
        month: '03',
        year: '2028'
    }
    return CCARD;
}
