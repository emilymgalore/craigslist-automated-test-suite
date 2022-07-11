export default function getThenAssertText (selector, expectedText) {
    cy.get(selector)
        .text()
        .should(
            "equal",
            expectedText
        )
}
