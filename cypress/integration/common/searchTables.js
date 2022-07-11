const SEARCH_FIELD_SELECTOR = "#query"

export default function searchTables () {
    cy.get(SEARCH_FIELD_SELECTOR)
        .type("tables{enter}")
}
