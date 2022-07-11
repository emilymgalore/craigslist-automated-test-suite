import getThenAssertText from "./common/getThenAssertText"
import getThenAssertVisible from "./common/getThenAssertVisible"
import searchTables from "./common/searchTables"
import visitCraigslist from "./common/visitCraigslist"

const RELEVANT_OPTION_SELECTOR = "[data-selection=rel]"
const NEWEST_OPTION_SELECTOR = "[data-selection=date]"
const DESCENDING_PRICE_OPTION_SELECTOR = "[data-selection=pricedsc]"
const PRICE_ASCENDING_SELECTOR = "[data-selection=priceasc]"
const RIGHT_MENU_ARROW_SELECTOR = ".search-sort .dropdown-list"

function getRightMenuArrowThenClick () {
    cy.get(RIGHT_MENU_ARROW_SELECTOR)
        .should("be.visible")
        .click()
}

before(
    "will get results for Craigslist Fort Myers, using the search term 'tables'",
    () => {
        visitCraigslist()
        searchTables()
    }
)

describe(
    `Craigslist search will validate that right side menu items are still visible, 
              before and after selection`,
    // eslint-disable-next-line max-lines-per-function
    () => {
        it(
            "will validate the 'relevant' right side menu item is visible, before selection",
            () => {
                getRightMenuArrowThenClick()
                getThenAssertVisible(RELEVANT_OPTION_SELECTOR)
            }
        )

        it(
            "will validate text is correct for the 'relevant' right side menu item, before selection",
            () => {
                getThenAssertText(
                    RELEVANT_OPTION_SELECTOR,
                    "relevant"
                )
            }
        )

        it(
            "will validate the 'relevant' right side menu item is visible, after selection",
            () => {
                cy.get(RELEVANT_OPTION_SELECTOR)
                    .click()
                getThenAssertVisible(RELEVANT_OPTION_SELECTOR)
            }
        )

        it(
            "will validate text is correct for the 'relevant' right side menu item, after selection",
            () => {
                getThenAssertText(
                    RELEVANT_OPTION_SELECTOR,
                    "relevant"
                )
            }
        )

        it(
            "will validate the 'newest' right side menu item is visible, before selection",
            () => {
                getRightMenuArrowThenClick()
                getThenAssertVisible(NEWEST_OPTION_SELECTOR)
            }
        )

        it(
            "will validate text is correct for the 'newest' right side menu item, before selection",
            () => {
                getThenAssertText(
                    NEWEST_OPTION_SELECTOR,
                    "newest"
                )
            }
        )

        it(
            "will validate the 'newest' right side menu item is visible, after selection",
            () => {
                cy.get(NEWEST_OPTION_SELECTOR)
                    .click()
                getThenAssertVisible(NEWEST_OPTION_SELECTOR)
            }
        )

        it(
            "will validate text is correct for the 'newest' right side menu item, after selection",
            () => {
                getThenAssertText(
                    NEWEST_OPTION_SELECTOR,
                    "newest"
                )
            }
        )

        it(
            "will validate the 'price desc' right side menu item is visible, before selection",
            () => {
                getRightMenuArrowThenClick()
                getThenAssertVisible(DESCENDING_PRICE_OPTION_SELECTOR)
            }
        )

        it(
            "will validate text is correct for the 'price desc' right side menu item, before selection",
            () => {
                getThenAssertText(
                    DESCENDING_PRICE_OPTION_SELECTOR,
                    "price ↓"
                )
            }
        )

        it(
            "will validate the 'price desc' right side menu item is visible, after selection",
            () => {
                cy.get(DESCENDING_PRICE_OPTION_SELECTOR)
                    .click()
                getThenAssertVisible(DESCENDING_PRICE_OPTION_SELECTOR)
            }
        )

        it(
            "will validate text is correct for the 'price desc' right side menu item, after selection",
            () => {
                getThenAssertText(
                    DESCENDING_PRICE_OPTION_SELECTOR,
                    "price ↓"
                )
            }
        )

        it(
            "will validate the 'price asc' right side menu item is visible, before selection",
            () => {
                getRightMenuArrowThenClick()
                getThenAssertVisible(PRICE_ASCENDING_SELECTOR)
            }
        )

        it(
            "will validate text is correct for the 'price asc' right side menu item, before selection",
            () => {
                getThenAssertText(
                    PRICE_ASCENDING_SELECTOR,
                    "price ↑"
                )
            }
        )

        it(
            "will validate the 'price asc' right side menu item is visible, after selection",
            () => {
                cy.get(PRICE_ASCENDING_SELECTOR)
                    .click()
                getThenAssertVisible(PRICE_ASCENDING_SELECTOR)
            }
        )

        it(
            "will validate text is correct for the 'price asc' right side menu item, after selection",
            () => {
                getThenAssertText(
                    PRICE_ASCENDING_SELECTOR,
                    "price ↑"
                )
            }
        )
    }
)
