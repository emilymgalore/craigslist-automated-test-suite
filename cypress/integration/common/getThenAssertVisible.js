export default function getThenAssertVisible (selector) {
    cy.get(selector)
        .should("be.visible")
}
