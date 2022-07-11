const RIGHT_MENU_SELECTOR = ".dropdown-item.mode.sel a:last-child"

export default function rightMenuClick () {
    cy.get(RIGHT_MENU_SELECTOR)
        .click()
}
