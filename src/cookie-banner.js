import CookieBanner from './GACookieConsent.svelte'

function createGACookieBanner(gaMeasurementIds, options = {}) {
	const {
		anonymizeIPs,
		bannerText,
		acceptBtnLabel,
		rejectBtnLabel,
		readMoreLinkUrl,
		readMoreLinkLabel,
	} = options
	const cookieBannerDiv = document.createElement('div')
	document.body.appendChild(cookieBannerDiv)

	// @ts-ignore
	const banner = new CookieBanner({
		target: cookieBannerDiv,
		props: {
			gaMeasurementIds,
			anonymizeIPs,
			bannerText,
			acceptBtnLabel,
			rejectBtnLabel,
			readMoreLinkUrl,
			readMoreLinkLabel,
		},
	})

	return {
		reopen: banner.reopen,
		accept: banner.accept,
		reject: banner.reject,
	}
}

export default createGACookieBanner
