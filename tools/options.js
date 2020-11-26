/* eslint-disable no-undef */
/**
 * Get client options.
 * @param {Boolean} headless
 * @param {Function} start
 */
module.exports = options = (headless, start) => {
    const options = {
        headless: headless,
        qrRefreshS: 20,
        qrTimeout: 0,
        authTimeout: 0,
        autoRefresh: true,
        restartOnCrash: start,
        cacheEnabled: false,
        useChrome: true,
        killProcessOnBrowserClose: true,
        throwErrorOnTosBlock: false,
        chromiumArgs: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--aggressive-cache-discard',
            '--disable-cache',
            '--disable-application-cache',
            '--disable-offline-load-stale-cache',
            '--disk-cache-size=0'
        ]
    }
    return options
}