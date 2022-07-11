import getThenClick from "./common/getThenClick"
import rightMenuClick from "./common/rightMenuClick"
import visitCraigslist from "./common/visitCraigslist"

const BODY_SELECTOR = "body"
const SEARCH_FIELD_SELECTOR = "#query"
const PRICE_ASCENDING_OPTION_SELECTOR = "[data-selection=priceasc]"
const RELEVANCE_OPTION_SELECTOR = "[data-selection=\"rel\"]"
const PRICE_DESCENDING_OPTION_SELECTOR = "[data-selection=pricedsc]"
const NEWEST_OPTION_SELECTOR = "[data-selection=date]"
const TOP_PAGE_RANGE_SECTION = ".buttons .pagenum:nth-of-type(1)"

function validateContainsVisible (selector, word) {
    cy.get(selector)
        .contains(word)
        .should("be.visible")
}

function validateNoResultsFound () {
    const ZERO = 0

    cy.get(BODY_SELECTOR).then((body) => {
        // eslint-disable-next-line init-declarations
        let searchResultsFound

        if (body.find(".rangeFrom").length === ZERO) {
            searchResultsFound = false
        }

        expect(searchResultsFound).to.be.false
    })
}

before(() => {
    visitCraigslist()
    cy.get(SEARCH_FIELD_SELECTOR)
        .type("lkhargiohNRKGLreag{enter}")
})

describe(
    "Searching Craigslist for a term that should not return results, returns no results",
    // eslint-disable-next-line max-lines-per-function
    () => {
        it(
            "will check that the page range area confirms no results",
            () => {
                validateContainsVisible(
                    TOP_PAGE_RANGE_SECTION,
                    "no results"
                )
            }
        )

        it(
            "will select descending price ordering option from right side menu",
            () => {
                rightMenuClick()
                getThenClick(PRICE_DESCENDING_OPTION_SELECTOR)
            }
        )

        it(
            "will check that descending price ordering option is visible",
            () => {
                validateContainsVisible(
                    PRICE_DESCENDING_OPTION_SELECTOR,
                    "price ↓"
                )
            }
        )

        it(
            "will check there are no results found when selecting ordering by price, descending",
            () => {
                validateNoResultsFound()
            }
        )

        it(
            "will select ordering by ascending price, from right side menu",
            () => {
                rightMenuClick()
                getThenClick(PRICE_ASCENDING_OPTION_SELECTOR)
            }
        )

        it(
            "will check that ascending price ordering option is visible ",
            () => {
                validateContainsVisible(
                    PRICE_ASCENDING_OPTION_SELECTOR,
                    "price ↑"
                )
            }
        )

        it(
            "will check that there are no results found when selecting ordering by price, ascending",
            () => {
                validateNoResultsFound()
            }
        )

        it(
            "will select ordering by relevant, from the right side menu",
            () => {
                rightMenuClick()
                getThenClick(RELEVANCE_OPTION_SELECTOR)
            }
        )

        it(
            "will check that option for ordering by relevant, is visible",
            () => {
                validateContainsVisible(
                    RELEVANCE_OPTION_SELECTOR,
                    "relevant"
                )
            }
        )

        it(
            "will check that there are no results, when ordering by relevant is selected",
            () => {
                validateNoResultsFound()
            }
        )

        it(
            "will select newest ordering, from the right side menu",
            () => {
                rightMenuClick()
                getThenClick(NEWEST_OPTION_SELECTOR)
            }
        )

        it(
            "will check that option for ordering by newest, is visible",
            () => {
                validateContainsVisible(
                    NEWEST_OPTION_SELECTOR,
                    "newest"
                )
            }
        )

        it(
            "will check there are no results, when ordering by newest",
            () => {
                validateNoResultsFound()
            }
        )
    }
)
