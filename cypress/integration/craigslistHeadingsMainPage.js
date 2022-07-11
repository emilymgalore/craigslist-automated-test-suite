import visitCraigslist from "./common/visitCraigslist"

const CRAIGSLIST_HEADING_SELECTOR = "#leftbar #logo a"
const FT_MYERS_HEADING_SELECTOR = "#topban .location-picker-link"
const COMMUNITY_HEADING_SELECTOR = ".ccc .txt"
const COMMUNITY_HEADING_LINK_SELECTOR = ".ccc"
const HOUSING_HEADING_SELECTOR = ".hhh .txt"
const HOUSING_HEADING_LINK_SELECTOR = ".hhh"
const JOBS_HEADING_SELECTOR = ".jjj .txt"
const JOBS_HEADING_LINK_SELECTOR = ".jjj"
const SERVICES_HEADING_SELECTOR = ".bbb .txt"
const SERVICES_HEADING_LINK_SELECTOR = ".bbb"
const FOR_SALE_HEADING_SELECTOR = ".sss .txt"
const FOR_SALE_HEADING_LINK_SELECTOR = ".sss"
const GIGS_HEADING_SELECTOR = ".ggg .txt"
const GIGS_HEADING_LINK_SELECTOR = ".ggg"
const RESUMES_HEADING_SELECTOR = ".rrr .txt"
const RESUMES_HEADING_LINK_SELECTOR = ".rrr"
const DISCUSSION_FORUMS_HEADING_SELECTOR = ".forums .txt"
const DISCUSSION_FORUMS_HEADING_LINK_SELECTOR = ".forums"

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
        it(
            "validates main 'Craigslist' heading has the correct text",
            () => {
                cy.get(CRAIGSLIST_HEADING_SELECTOR).text()
                    .should("equal", "craigslist")
            }
        )

        it(
            "will validate main 'ft.myers/SW Florida' heading has the correct text",
            () => {
                cy.get(FT_MYERS_HEADING_SELECTOR).text()
                    .should("equal", "ft myers / SW florida")
            }
        )

        it(
            "will validate 'communities' heading has the correct text and the correct link",
            () => {
                cy.get(COMMUNITY_HEADING_SELECTOR).text()
                    .should("equal", "community")
                cy.get(COMMUNITY_HEADING_LINK_SELECTOR).should("have.attr", "href")
                    .then((href) => {
                        expect(href).to.equal("/search/ccc")
                    })
            }
        )

        it(
            "will validate 'housing' heading has the correct text and the correct link",
            () => {
                cy.get(HOUSING_HEADING_SELECTOR).text()
                    .should("equal", "housing")
                cy.get(HOUSING_HEADING_LINK_SELECTOR).should("have.attr", "href")
                    .then((href) => {
                        expect(href).to.equal("/search/hhh")
                    })
            }
        )

        it(
            "will validate 'jobs' heading has the correct text and the correct link",
            () => {
                cy.get(JOBS_HEADING_SELECTOR).text()
                    .should("equal", "jobs")
                cy.get(JOBS_HEADING_LINK_SELECTOR).should("have.attr", "href")
                    .then((href) => {
                        expect(href).to.equal("/search/jjj")
                    })
            }
        )

        it(
            "will validate 'services' heading has the correct text and the correct link",
            () => {
                cy.get(SERVICES_HEADING_SELECTOR).text()
                    .should("equal", "services")
                cy.get(SERVICES_HEADING_LINK_SELECTOR).should("have.attr", "href")
                    .then((href) => {
                        expect(href).to.equal("/search/bbb")
                    })
            }
        )

        it(
            "will validate 'for sale' heading has the correct text and the correct link",
            () => {
                cy.get(FOR_SALE_HEADING_SELECTOR).text()
                    .should("equal", "for sale")
                cy.get(FOR_SALE_HEADING_LINK_SELECTOR).should("have.attr", "href")
                    .then((href) => {
                        expect(href).to.equal("/search/sss")
                    })
            }
        )

        it(
            "will validate 'gigs' heading has the correct text and the correct link",
            () => {
                cy.get(GIGS_HEADING_SELECTOR).text()
                    .should("equal", "gigs")
                cy.get(GIGS_HEADING_LINK_SELECTOR).should("have.attr", "href")
                    .then((href) => {
                        expect(href).to.equal("/search/ggg")
                    })
            }
        )

        it(
            "will validate 'resumes' heading has the correct text and the correct link",
            () => {
                cy.get(RESUMES_HEADING_SELECTOR).text()
                    .should("equal", "resumes")
                cy.get(RESUMES_HEADING_LINK_SELECTOR).should("have.attr", "href")
                    .then((href) => {
                        expect(href).to.equal("/search/rrr")
                    })
            }
        )

        it(
            "will validate 'discussion forums' heading has the correct text and the correct link",
            () => {
                cy.get(DISCUSSION_FORUMS_HEADING_SELECTOR).text()
                    .should("equal", "discussion forums")
                cy.get(DISCUSSION_FORUMS_HEADING_LINK_SELECTOR).should("have.attr", "href")
                    .then((href) => {
                        expect(href).to.equal("https://forums.craigslist.org/?areaID=125")
                    })
            }
        )
    }
)
