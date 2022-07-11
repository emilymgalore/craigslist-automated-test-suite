const ONE_THOUSAND = 1000
const TEN = 10

export function pollForElement (
    selector,
    maxRetries = TEN,
    millisecondsPerTry = ONE_THOUSAND
) {
    let retry = 0

    function isElementVisible () {
        const ONE = 1

        // eslint-disable-next-line max-len
        const elementHasBeenFound = Cypress.$(selector).length === ONE

        // Tried to find it but ran out of time finding it
        if (retry >= maxRetries) {
            cy.log(`Failed while polling for an element with this selector: ${selector}`)
            throw new Error(`Failed while polling for an element with this selector: ${selector}`)
        }

        // If we still have retries left, and element hasn't been found, then keep trying
        if (retry < maxRetries && !elementHasBeenFound) {
            // Increment retry
            retry++

            // Wait 30 seconds
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(millisecondsPerTry)

            // Element is not yet visible, Call the recursive function again
            cy.then(isElementVisible)
        }
    }

    // Kick off polling
    return isElementVisible()
}
