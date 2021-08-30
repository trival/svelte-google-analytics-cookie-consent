import * as __SNOWPACK_ENV__ from './_snowpack/env.js';

import createCookieBanner from './lib/cookie-banner.js'

// @ts-ignore
const gaMeasurementId = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_GA_MEASUREMENT_ID
const banner = createCookieBanner(gaMeasurementId)

// @ts-ignore
window.cookieBanner = banner
