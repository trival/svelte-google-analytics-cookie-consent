import * as __SNOWPACK_ENV__ from './_snowpack/env.js';

import createCookieBanner from './_snowpack/link/src/index.js'

// @ts-ignore
const gaMeasurementId = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_GA_MEASUREMENT_ID
const banner = createCookieBanner(gaMeasurementId, {
	anonymizeIPs: true,
	bannerText: 'My custom banner text',
	acceptBtnLabel: 'I Agree',
	rejectBtnLabel: 'I Disagree',
	readMoreLinkUrl: '#',
	readMoreLinkLabel: 'read our privacy regulation',
})

// @ts-ignore
window.reopenBanner = banner.reopen
