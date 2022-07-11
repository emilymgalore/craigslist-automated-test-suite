export default function validateLinkHref (selector, expectedHref) {
    cy.get(selector)
        .should(
            "have.attr",
            "href"
        )
        .then((href) => {
            expect(href).to.equal(expectedHref)
        })
}
