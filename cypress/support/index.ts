export { }

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Logs in E2E user
             * @returns void
             */
            getByDataTestId(id: string): Chainable<JQuery<HTMLElement>>;
            getByName(name: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}