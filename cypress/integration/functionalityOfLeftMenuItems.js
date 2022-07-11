import searchTables from "./common/searchTables"
import visitCraigslist from "./common/visitCraigslist"

const CURRENTLY_SELECTED_DROP_DOWN_BUTTON_SELECTOR = ".search-view .dropdown-item.sel button"
const GALLERY_VIEW_SELECTOR = "button#gridview"
const SEARCH_RESULT_IMAGES_SELECTOR = ".result-row img";
const SEARCH_VIEW_DROPDOWN_LIST_SELECTOR = ".search-view .dropdown-list";
const LIST_VIEW_SELECTOR = "#listview";
const MAP_VIEW_SELECTOR = "#mapview";
const MAP_SELECTOR = "#map";
const THUMBNAIL_VIEW_SELECTOR = "#picview";
const GRID_VIEW_SELECTOR = "#gridview";
const ONE = 1;

before(
    "will get results for Craigslist Fort Myers, using the search term 'tables'",
    () => {
        visitCraigslist()
        searchTables()
    }
)

describe(
    "will validate left side menu items have correct text and operate correctly",
    // eslint-disable-next-line max-lines-per-function
    () => {
        it(
            "will validate that left side menu default view is gallery",
            () => {
                cy.get(GALLERY_VIEW_SELECTOR)
                    .should("be.visible")
            }
        )

        it(
            `will validate left side menu item 'gallery' link works to bring up proper gallery view 
          and contains correct text`,
            () => {
                cy.get(CURRENTLY_SELECTED_DROP_DOWN_BUTTON_SELECTOR).text()
                    .should("equal", "gallery")
                cy.get(SEARCH_RESULT_IMAGES_SELECTOR).eq(ONE).should("be.visible")

                cy.get(SEARCH_RESULT_IMAGES_SELECTOR)
                    .each((postImage) => {
                        cy.wrap(postImage)
                            .should("be.visible")
                    })
            }
        )

        it(
            `will validate left side menu item 'list' link works to bring up proper list view and 
            contains correct text`,
            () => {
                cy.get(SEARCH_VIEW_DROPDOWN_LIST_SELECTOR)
                    .click()
                cy.get(LIST_VIEW_SELECTOR)
                    .click()
                cy.get(CURRENTLY_SELECTED_DROP_DOWN_BUTTON_SELECTOR)
                    .text()
                    .should("equal", "list")

                // Asserting that the first row is ok
                cy.get(SEARCH_RESULT_IMAGES_SELECTOR)
                    .eq(ONE)
                    .should("not.be.visible")

                // Assert that all the rows are cool
                cy.get(SEARCH_RESULT_IMAGES_SELECTOR)
                    .each((postImage) => {
                        cy.wrap(postImage)
                            .should("not.be.visible")
                    })
            }
        )

        it(
            `will validate left side menu item 'map' link works to bring up proper map view 
           and contains correct text`,
            () => {
                const ONE_THOUSAND_FORTY_SEVEN = 1047

                cy.get(SEARCH_VIEW_DROPDOWN_LIST_SELECTOR)
                    .click()
                cy.get(MAP_VIEW_SELECTOR)
                    .click()
                cy.get(CURRENTLY_SELECTED_DROP_DOWN_BUTTON_SELECTOR)
                    .text()
                    .should("equal", "map")

                cy.get(MAP_SELECTOR)
                    .invoke("width")
                    .should("equal", ONE_THOUSAND_FORTY_SEVEN)

            /*
             *Width is used here to validate that we're in the 'map view'.
             *The width of the map is 1042px at the viewport width at which Cypress runs the tests.
             */
            }
        )

        it(
            `will validate left side menu item 'thumb' link works to bring up proper thumbnail view 
          and contains correct text`,
            () => {
                const FIFTY = 50

                cy.get(SEARCH_VIEW_DROPDOWN_LIST_SELECTOR)
                    .click()
                cy.get(THUMBNAIL_VIEW_SELECTOR)
                    .click()
                cy.get(CURRENTLY_SELECTED_DROP_DOWN_BUTTON_SELECTOR)
                    .text()
                    .should("equal", "thumb")

                cy.get(SEARCH_RESULT_IMAGES_SELECTOR)
                    .first()
                    .invoke("width")
                    .should("equal", FIFTY)
            }
        )

        it(
            `will validate left side menu item 'gallery' link works to bring up proper gallery 
          view, when not default setting, and contains correct text`,
            () => {
                const THREE_HUNDRED = 300

                cy.get(SEARCH_VIEW_DROPDOWN_LIST_SELECTOR)
                    .click()
                cy.get(GRID_VIEW_SELECTOR)
                    .click()
                cy.get(CURRENTLY_SELECTED_DROP_DOWN_BUTTON_SELECTOR)
                    .text()
                    .should("equal", "gallery")

                cy.get(SEARCH_RESULT_IMAGES_SELECTOR)
                    .first()
                    .invoke("width")
                    .should("equal", THREE_HUNDRED)

                /*
                 *Note: here 'not default setting' means 'when a different menu option is selected, and then,
                 *later, the "gallery" menu option is selection'.
                 */
            }
        )
    }
)
