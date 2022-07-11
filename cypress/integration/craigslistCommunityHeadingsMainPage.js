import getThenAssertText from "./common/getThenAssertText"
import validateLinkHref from "./common/validateLinkHref"
import visitCraigslist from "./common/visitCraigslist"
const ACTIVITIES_TEXT_SELECTOR = ".act .txt"
const ACTIVITIES_LINK_SELECTOR = ".act"
const ARTISTS_TEXT_SELECTOR = ".ats .txt"
const ARTISTS_LINK_SELECTOR = ".ats"
const CHILDCARE_TEXT_SELECTOR = ".kid .txt"
const CHILDCARE_LINK_SELECTOR = ".kid"
const CLASSES_TEXT_SELECTOR = ".cls .txt"
const CLASSES_LINK_SELECTOR = ".cls"
const EVENTS_TEXT_SELECTOR = ".eve .txt"
const EVENTS_LINK_SELECTOR = ".eve"
const GENERAL_TEXT_SELECTOR = ".com .txt"
const GENERAL_LINK_SELECTOR = ".com"
const GROUPS_TEXT_SELECTOR = ".grp .txt"
const GROUPS_LINK_SELECTOR = ".grp"
const LOCAL_NEWS_TEXT_SELECTOR = ".vnn .txt"
const LOCAL_NEWS_LINK_SELECTOR = ".vnn"
const LOST_AND_FOUND_TEXT_SELECTOR = ".laf .txt"
const LOST_AND_FOUND_LINK_SELECTOR = ".laf"
const MISSED_CONNECTIONS_TEXT_SELECTOR = ".mis .txt"
const MISSED_CONNECTIONS_LINK_SELECTOR = ".mis"
const MUSICIANS_TEXT_SELECTOR = ".muc .txt"
const MUSICIANS_LINK_SELECTOR = ".muc"
const PETS_TEXT_SELECTOR = ".pet .txt"
const PETS_LINK_SELECTOR = ".pet"
const POLITICS_TEXT_SELECTOR = ".pol .txt"
const POLITICS_LINK_SELECTOR = ".pol"
const R_AND_R_TEXT_SELECTOR = ".rnr .txt"
const R_AND_R_LINK_SELECTOR = ".rnr"
const RIDE_SHARE_TEXT_SELECTOR = ".rid .txt"
const RIDE_SHARE_LINK_SELECTOR = ".rid"
const VOLUNTEERS_TEXT_SELECTOR = ".vol .txt"
const VOLUNTEERS_LINK_SELECTOR = ".vol"

before(
    "will visit Fort Myers Craigslist",
    () => {
        visitCraigslist()
    }
)

describe(
    "will validate Craigslist community heading's subheadings have links and have proper text",
    // eslint-disable-next-line max-lines-per-function
    () => {
        it(
            "will validate subheading 'activities' has correct text and correct link",
            () => {
                getThenAssertText(
                    ACTIVITIES_TEXT_SELECTOR,
                    "activities"
                )
                validateLinkHref(
                    ACTIVITIES_LINK_SELECTOR,
                    "/search/act"
                )
            }
        )

        it(
            "will validate subheading 'artists' has correct text and correct link",
            () => {
                getThenAssertText(
                    ARTISTS_TEXT_SELECTOR,
                    "artists"
                )
                validateLinkHref(
                    ARTISTS_LINK_SELECTOR,
                    "/search/ats"
                )
            }
        )

        it(
            "will validate subheading 'childcare' has correct text and correct link",
            () => {
                getThenAssertText(
                    CHILDCARE_TEXT_SELECTOR,
                    "childcare"
                )
                validateLinkHref(
                    CHILDCARE_LINK_SELECTOR,
                    "/search/kid"
                )
            }
        )

        it(
            "will validate subheading 'classes' has correct text and correct link",
            () => {
                getThenAssertText(
                    CLASSES_TEXT_SELECTOR,
                    "classes"
                )
                validateLinkHref(
                    CLASSES_LINK_SELECTOR,
                    "/search/cls"
                )
            }
        )

        it(
            "will validate subheading 'events' has correct text and correct link",
            () => {
                getThenAssertText(
                    EVENTS_TEXT_SELECTOR,
                    "events"
                )
                validateLinkHref(
                    EVENTS_LINK_SELECTOR,
                    "/search/eve"
                )
            }
        )

        it(
            "will validate subheading 'general' has correct text and correct link ",
            () => {
                getThenAssertText(
                    GENERAL_TEXT_SELECTOR,
                    "general"
                )
                validateLinkHref(
                    GENERAL_LINK_SELECTOR,
                    "/search/com"
                )
            }
        )

        it(
            "will validate subheading 'groups' has correct text and correct link",
            () => {
                getThenAssertText(
                    GROUPS_TEXT_SELECTOR,
                    "groups"
                )
                validateLinkHref(
                    GROUPS_LINK_SELECTOR,
                    "/search/grp"
                )
            }
        )

        it(
            "will validate subheading 'local news' has correct text and correct link",
            () => {

                /*
                 * There is a non-breaking space (&nbsp;) between the word 'local' and the word 'news',
                 * on the actual web page, for this subheading
                 */
                cy.get(LOCAL_NEWS_TEXT_SELECTOR).contains("local news")
                validateLinkHref(
                    LOCAL_NEWS_LINK_SELECTOR,
                    "/search/vnn"
                )
            }
        )

        it(
            "will validate subheading 'lost+found' has correct text and correct link",
            () => {
                getThenAssertText(
                    LOST_AND_FOUND_TEXT_SELECTOR,
                    "lost+found"
                )
                validateLinkHref(
                    LOST_AND_FOUND_LINK_SELECTOR,
                    "/search/laf"
                )
            }
        )

        it(
            "will validate subheading 'missed connections' has correct text and correct link",
            () => {
                getThenAssertText(
                    MISSED_CONNECTIONS_TEXT_SELECTOR,
                    "missed connections"
                )
                validateLinkHref(
                    MISSED_CONNECTIONS_LINK_SELECTOR,
                    "/search/mis"
                )
            }
        )

        it(
            "will validate subheading 'musicians' has correct text and correct link",
            () => {
                getThenAssertText(
                    MUSICIANS_TEXT_SELECTOR,
                    "musicians"
                )
                validateLinkHref(
                    MUSICIANS_LINK_SELECTOR,
                    "/search/muc"
                )
            }
        )

        it(
            "will validate subheading 'pets' has correct text and correct link",
            () => {
                getThenAssertText(
                    PETS_TEXT_SELECTOR,
                    "pets"
                )
                validateLinkHref(
                    PETS_LINK_SELECTOR,
                    "/search/pet"
                )
            }
        )

        it(
            "will validate subheading 'politics' has correct text and correct link",
            () => {
                getThenAssertText(
                    POLITICS_TEXT_SELECTOR,
                    "politics"
                )
                validateLinkHref(
                    POLITICS_LINK_SELECTOR,
                    "/search/pol"
                )
            }
        )

        it(
            "will validate subheading 'rants & raves' has correct text and correct link",
            () => {
                getThenAssertText(
                    R_AND_R_TEXT_SELECTOR,
                    "rants & raves"
                )
                validateLinkHref(
                    R_AND_R_LINK_SELECTOR,
                    "/search/rnr"
                )
            }
        )

        it(
            "will validate subheading 'rideshare' has correct text and correct link",
            () => {
                getThenAssertText(
                    RIDE_SHARE_TEXT_SELECTOR,
                    "rideshare"
                )
                validateLinkHref(
                    RIDE_SHARE_LINK_SELECTOR,
                    "/search/rid"
                )
            }
        )

        it(
            "will validate subheading 'volunteers' has correct text and correct link",
            () => {
                getThenAssertText(
                    VOLUNTEERS_TEXT_SELECTOR,
                    "volunteers"
                )
                validateLinkHref(
                    VOLUNTEERS_LINK_SELECTOR,
                    "/search/vol"
                )
            }
        )
    }
)
