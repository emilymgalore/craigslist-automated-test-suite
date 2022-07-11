export default function getThenClick (selector) {
    cy.get(selector)
        .click()
}
