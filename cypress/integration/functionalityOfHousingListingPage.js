import {pollForElement} from "./common/pollForElement"

import visitCraigslist from "./common/visitCraigslist"

const MIN_BEDROOM_SELECTOR = "select[name=min_bedrooms]"
const MAX_BEDROOM_SELECTOR = "select[name=max_bedrooms]"
const MIN_PRICE_SELECTOR = ".input-fields [placeholder=min]"
const MAX_PRICE_SELECTOR = ".input-fields [placeholder=max]"
const RESULT_ROWS_SELECTOR = ".result-row"
const UPDATE_SEARCH_SELECTOR = ".searchlink"
const HOUSING_TYPE_SELECTOR = ".search-attribute:first-of-type .title"
const HOUSE_OPTION_SELECTOR = ".search-attribute:first-of-type .list .checkbox:nth-of-type(6) [type=checkbox]"
const PRICE_FIRST_HOUSE_SELECTOR = ".result-row:first-of-type .result-info .result-price"
const PRICE_ALL_HOUSES_SELECTOR = ".result-row .result-info .result-price"
const FIRST_SEARCH_RESULT_SELECTOR = ".result-row:first-of-type";
const LAST_ATTRIBUTE_GROUP_SELECTOR = ".attrgroup:last-of-type";
const LAST_SEARCH_RESULT_SELECTOR = ".result-row:last-of-type";
const TEXT_SEARCH_INPUT_FIELD_SELECTOR = "[name=query]";
const SEARCH_BUTTON_SELECTOR = ".searchbtn";
const POSTING_BODY_SELECTOR = "#postingbody";

before(
    "will visit Fort Myers Craigslist",
    () => {
        visitCraigslist()
    }
)

describe(
    "will validate main headings have correct text",
    // eslint-disable-next-line max-lines-per-function
    () => {
        it("validates 2br min and max search works, validating first card", () => {
            cy.get(".rea")
                .click()
            cy.get(MIN_BEDROOM_SELECTOR)
                .select("2")
            cy.get(MAX_BEDROOM_SELECTOR)
                .select("2")

            const FIRST_CARD_HOME_DETAILS_SELECTOR = ".result-row:first-of-type .housing"

            pollForElement(FIRST_CARD_HOME_DETAILS_SELECTOR)

            cy.get(FIRST_CARD_HOME_DETAILS_SELECTOR)
                .contains("2br")
        })

        it("validates through all 2br cards", () => {
            cy.get(RESULT_ROWS_SELECTOR)
                .each((houseCard) => {
                    cy.wrap(houseCard)
                        .find(".housing")
                        .contains("2br")
                })
        })

        it("validates the minimum and maximum price", () => {
            const MINIMUM_HOME_PRICE_FOR_SEARCH = 120000
            const MAXIMUM_HOME_PRICE_FOR_SEARCH = 250000

            cy.get(MIN_PRICE_SELECTOR).type(MINIMUM_HOME_PRICE_FOR_SEARCH)
            cy.get(MAX_PRICE_SELECTOR).type(MAXIMUM_HOME_PRICE_FOR_SEARCH)
            cy.get(UPDATE_SEARCH_SELECTOR)
                .click()
            cy.get(PRICE_FIRST_HOUSE_SELECTOR)
                .invoke("text")
                .then((price) => {
                    const cleanedPrice = price.replace("$", "").replace(",", "")
                    const cleanedPriceAsNumber = parseInt(cleanedPrice, 10)

                    expect(cleanedPriceAsNumber).to.be
                        .within(MINIMUM_HOME_PRICE_FOR_SEARCH, MAXIMUM_HOME_PRICE_FOR_SEARCH)
                })
        })

        it("validates through all 120-250k homes", () => {
            const MINIMUM_HOME_PRICE_FOR_SEARCH = 120000
            const MAXIMUM_HOME_PRICE_FOR_SEARCH = 250000

            cy.get(PRICE_ALL_HOUSES_SELECTOR)
                .each((price) => {
                    cy.wrap(price)
                        .invoke("text")
                        .then((priceText) => {
                            const cleanedPrice = priceText.replace("$", "").replace(",", "")
                            const cleanedPriceAsNumber = parseInt(cleanedPrice, 10)

                            expect(cleanedPriceAsNumber).to.be
                                .within(MINIMUM_HOME_PRICE_FOR_SEARCH, MAXIMUM_HOME_PRICE_FOR_SEARCH)
                        })
                })
        })

        it("validates the housing type is a house", () => {
            cy.get(HOUSING_TYPE_SELECTOR)
                .click()
            cy.get(HOUSE_OPTION_SELECTOR)
                .click()
            cy.get(UPDATE_SEARCH_SELECTOR)
                .click()
            cy.get(FIRST_SEARCH_RESULT_SELECTOR)
                .click()
            cy.get(LAST_ATTRIBUTE_GROUP_SELECTOR)
                .contains("house")
            cy.go("back")
        })

        it("validates all the cards are a house when searching for a house,", () => {
            const housingSampleSize = 3
            // 1. click into the card

            cy.get(FIRST_SEARCH_RESULT_SELECTOR)
                .click()
            for (let currentCardNumber = 1; currentCardNumber < housingSampleSize; currentCardNumber++) {
                cy.get(LAST_ATTRIBUTE_GROUP_SELECTOR)
                    .contains("house")
                cy.get(".next")
                    .click()
            }
            const numberOfNavigateBacksToDo = 4

            for (let currentCardNumber = 1; currentCardNumber < numberOfNavigateBacksToDo; currentCardNumber++) {
                cy.go("back")
            }
            cy.get(LAST_SEARCH_RESULT_SELECTOR)
                .click()
            for (let currentCardNumber = 1; currentCardNumber < housingSampleSize; currentCardNumber++) {
                cy.get(LAST_ATTRIBUTE_GROUP_SELECTOR)
                    .contains("house")
                cy.get(".prev")
                    .click()
            }
            for (let currentCardNumber = 1; currentCardNumber < numberOfNavigateBacksToDo; currentCardNumber++) {
                cy.go("back")
            }
        })

        it("validates text box searches for 'TLC' and shows in each listing", () => {
            // Cy.get('a[href*="/search/lee/rea?purveyor=dealer"]')
            //     .click()
            const housingSampleSize = 4

            cy.get(TEXT_SEARCH_INPUT_FIELD_SELECTOR).type("TLC")
            cy.get(SEARCH_BUTTON_SELECTOR)
                .click()
            cy.get(FIRST_SEARCH_RESULT_SELECTOR)
                .click()
            for (let housingCardNumber = 1; housingCardNumber < housingSampleSize; housingCardNumber++) {
                cy.get(POSTING_BODY_SELECTOR)
                    .invoke("text")
                    .then((descriptionText) => {
                        expect(descriptionText.toLowerCase()).to.contain("tlc")
                        cy.get(".next")
                            .click()
                    })
            }
        })
    }
)
