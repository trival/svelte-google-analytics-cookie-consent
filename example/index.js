import createCookieBanner from '../src/index'

// @ts-ignore
const gaMeasurementId = import.meta.env.SNOWPACK_PUBLIC_GA_MEASUREMENT_ID
const banner = createCookieBanner(gaMeasurementId)

// @ts-ignore
window.reopenBanner = banner.reopen
