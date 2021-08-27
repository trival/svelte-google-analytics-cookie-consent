import createCookieBanner from '../src/index'

// @ts-ignore
const gaMeasurementId = import.meta.env.SNOWPACK_PUBLIC_GA_MEASUREMENT_ID
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
