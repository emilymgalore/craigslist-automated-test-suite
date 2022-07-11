import getThenAssertText from "./common/getThenAssertText"
import getThenAssertVisible from "./common/getThenAssertVisible"
import searchTables from "./common/searchTables"
import visitCraigslist from "./common/visitCraigslist"

const GALLERY_VIEW_SELECTOR = "button#gridview"
const LIST_VIEW_SELECTOR = "#listview"
const THUMB_VIEW_SELECTOR = "#picview"
const MAP_VIEW_SELECTOR = "#mapview"
const LEFT_MENU_ARROW_SELECTOR = ".dropdown-item.mode.sel span:nth-child(2)"

function getLeftMenuArrowThenClick () {
    cy.get(LEFT_MENU_ARROW_SELECTOR)
        .should("be.visible")
        .click()
}

before(
    "will get results for craigslist Fort Myers search term 'tables'",
    () => {
        visitCraigslist()
        searchTables()
    }
)

describe(
    `Craigslist search will validate that left side menu items are still visible 
              before and after selection`,
    // eslint-disable-next-line max-lines-per-function
    () => {
        it(
            "will validate the 'gallery' left side menu item is visible, before selection",
            () => {
                getLeftMenuArrowThenClick()
                getThenAssertVisible(GALLERY_VIEW_SELECTOR)
            }
        )

        it(
            "will validate text is correct for the 'gallery' left side menu item, before selection",
            () => {
                getThenAssertText(
                    GALLERY_VIEW_SELECTOR,
                    "gallery"
                )
            }
        )

        it(
            "will validate the 'gallery' left side menu item is visible, after selection",
            () => {
                cy.get(GALLERY_VIEW_SELECTOR)
                    .click()
                getThenAssertVisible(GALLERY_VIEW_SELECTOR)
            }
        )

        it(
            "will validate text is correct for the 'gallery' right side menu item, after selection",
            () => {
                getThenAssertText(
                    GALLERY_VIEW_SELECTOR,
                    "gallery"
                )
            }
        )

        it(
            "will validate the 'list' left side menu item is visible, before selection",
            () => {
                getLeftMenuArrowThenClick()
                getThenAssertVisible(LIST_VIEW_SELECTOR)
            }
        )

        it(
            "will validate text is correct for the 'list' left side menu item, before selection",
            () => {
                getThenAssertText(
                    LIST_VIEW_SELECTOR,
                    "list"
                )
            }
        )

        it(
            "will validate the 'list' left side menu item is visible, after selection",
            () => {
                cy.get(LIST_VIEW_SELECTOR)
                    .click()
                getThenAssertVisible(LIST_VIEW_SELECTOR)
            }
        )

        it(
            "will validate text is correct for the 'list' left side menu item, after selection",
            () => {
                getThenAssertText(
                    LIST_VIEW_SELECTOR,
                    "list"
                )
            }
        )

        it(
            "will validate the 'map' left side menu item is visible, before selection",
            () => {
                getLeftMenuArrowThenClick()
                getThenAssertVisible(MAP_VIEW_SELECTOR)
            }
        )

        it(
            "will validate text is correct for the 'map' left side menu item, before selection",
            () => {
                getThenAssertText(
                    MAP_VIEW_SELECTOR,
                    "map"
                )
            }
        )

        it(
            "will validate the 'map' left side menu item is visible, after selection",
            () => {
                cy.get(MAP_VIEW_SELECTOR)
                    .click()
                getThenAssertVisible(MAP_VIEW_SELECTOR)
            }
        )

        it(
            "will validate text is correct for the 'map' left side menu item, after selection",
            () => {
                getThenAssertText(
                    MAP_VIEW_SELECTOR,
                    "map"
                )
            }
        )

        it(
            "will validate the 'thumb' left side menu item is visible, before selection",
            () => {
                getLeftMenuArrowThenClick()
                getThenAssertVisible(THUMB_VIEW_SELECTOR)
            }
        )

        it(
            "will validate text is correct for the 'thumb' left side menu item, before selection",
            () => {
                getThenAssertText(
                    THUMB_VIEW_SELECTOR,
                    "thumb"
                )
            }
        )

        it(
            "will validate the 'thumb' left side menu item is visible, after selection",
            () => {
                cy.get(THUMB_VIEW_SELECTOR)
                    .click()
                getThenAssertVisible(THUMB_VIEW_SELECTOR)
            }
        )

        it(
            "will validate text is correct for the 'thumb' left side menu item, after selection",
            () => {
                getThenAssertText(
                    THUMB_VIEW_SELECTOR,
                    "thumb"
                )
            }
        )
    }
)
