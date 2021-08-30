import createCookieBanner from '../src/cookie-banner'

// @ts-ignore
const gaMeasurementId = import.meta.env.SNOWPACK_PUBLIC_GA_MEASUREMENT_ID
const banner = createCookieBanner(gaMeasurementId)

// @ts-ignore
window.cookieBanner = banner
