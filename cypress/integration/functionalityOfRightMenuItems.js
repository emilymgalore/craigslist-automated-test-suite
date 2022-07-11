import getThenClick from "./common/getThenClick"
import rightMenuClick from "./common/rightMenuClick"
import searchTables from "./common/searchTables"
import visitCraigslist from "./common/visitCraigslist"

const RELEVANT_SELECTOR = "[data-selection=rel]"
const NEWEST_SELECTOR = "[data-selection=date]"
const PRICE_DESCENDING_SELECTOR = "[data-selection=pricedsc]"
const PRICE_ASCENDING_SELECTOR = "[data-selection=priceasc]"
const RESULT_ROW_FIRST_TIME_SELECTOR = ".result-row:nth-child(1) .result-info time"
const RESULT_ROW_LAST_TIME_SELECTOR = ".result-row:nth-child(1) .result-info time"
const RESULT_ROW_FIRST_RESULT_PRICE_SELECTOR = ".result-row:nth-child(1) .result-info .result-price"
const RESULT_ROW_LAST_RESULT_PRICE_SELECTOR = ".result-row:last-child .result-info .result-price"
const TOP_TOTAL_COUNT_SELECTOR = ".search-legend:not(.bottom) .totalcount"
const RESULTS_HEADING_TEXTS_SELECTOR = ".result-heading a"

function validateFirstVersusLastPrice (expectedAscending) {
    cy.get(RESULT_ROW_FIRST_RESULT_PRICE_SELECTOR).then(($elem) => {
        // eslint-disable-next-line radix
        const firstPrice = parseInt($elem.text().replace(
            // eslint-disable-next-line require-unicode-regexp
            /[\\$,]/,
            ""
        ))

        // eslint-disable-next-line no-shadow
        cy.get(RESULT_ROW_LAST_RESULT_PRICE_SELECTOR).then(($elem) => {
            // eslint-disable-next-line radix
            const lastPrice = parseInt($elem.text().replace(
                // eslint-disable-next-line require-unicode-regexp
                /[\\$,]/,
                ""
            ))

            if (expectedAscending) {
                expect(firstPrice <= lastPrice).to.be.true
            } else {
                expect(firstPrice >= lastPrice).to.be.true
            }
        })
    })
}

function validateNewestDate () {
    cy.get(RESULT_ROW_FIRST_TIME_SELECTOR).then(($elem) => {
        const firstDate = $elem.attr("datetime")

        // eslint-disable-next-line no-shadow
        cy.get(RESULT_ROW_LAST_TIME_SELECTOR).then(($elem) => {
            const lastDate = $elem.attr("datetime")

            const firstDateAsDateObject = new Date(firstDate)
            const lastDateAsDateObject = new Date(lastDate)

            const firstDateTime = firstDateAsDateObject.getTime()
            const lastDateTime = lastDateAsDateObject.getTime()

            expect(firstDateTime >= lastDateTime).to.be.true
        })
    })
}

function validateResultsCountGreaterThanZero () {
    const ZERO = 0

    cy.get(TOP_TOTAL_COUNT_SELECTOR)
        .text()
        .then((totalCount) => {
            // eslint-disable-next-line radix
            const totalCountAsInteger = parseInt(totalCount)

            expect(totalCountAsInteger > ZERO).to.be.true
        })
}

function containsAtLeastOneTablesHeading () {
    cy.get(RESULTS_HEADING_TEXTS_SELECTOR)
        .text()
        .then((headingTexts) => {
            const foundATable = headingTexts.some((title) => title.includes("tables"))

            expect(foundATable).to.be.true
        })
}

before(
    "will get results for Craigslist Fort Myers, using the search term 'tables'",
    () => {
        visitCraigslist()
        searchTables()
    }
)

describe(
    "will validate the Craigslist right menu items work correctly",
    // eslint-disable-next-line max-lines-per-function
    () => {
        it(
            "will select 'relevant' from right side menu",
            () => {
                rightMenuClick()
                cy.get(RELEVANT_SELECTOR).click()
            }
        )

        it(
            "will validate that there exist results, upon selection of 'relevant' from  right side menu",
            () => {
                validateResultsCountGreaterThanZero()
            }
        )

        it(
            "validates that the results for 'relevant' are actually relevant",
            () => {
                containsAtLeastOneTablesHeading()
            }
        )

        it(
            "will select 'newest' from right side menu",
            () => {
                rightMenuClick()
                getThenClick(NEWEST_SELECTOR)
            }
        )

        it(
            "will validate there exist results, upon selection of 'newest' from right side menu",
            () => {
                validateResultsCountGreaterThanZero()
            }
        )

        it(
            `will validate that the results shown upon selection of 'newest', are actually 
          in newest ordering`,
            () => {
                validateNewestDate()
            }
        )

        it(
            "will select right side 'price desc' selection",
            () => {
                rightMenuClick()
                getThenClick(PRICE_DESCENDING_SELECTOR)
            }
        )

        it(
            "will validate there exist results, upon selection of 'price desc' from right side menu",
            () => {
                validateResultsCountGreaterThanZero()
            }
        )

        it(
            `will validate the 'price desc' right side menu selection actually returns results in 
        descending order`,
            () => {
                validateFirstVersusLastPrice(false)
            }
        )

        it(
            "will select right side 'price asc' selection\"",
            () => {
                rightMenuClick()
                getThenClick(PRICE_ASCENDING_SELECTOR)
            }
        )

        it(
            "will validate there exist results, upon selection of 'price asc' from right side menu",
            () => {
                validateResultsCountGreaterThanZero()
            }
        )

        it(
            "will check the  'price asc' results are actually in ascending order",
            () => {
                validateFirstVersusLastPrice(true)
            }
        )
    }
)
