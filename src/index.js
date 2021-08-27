import CookieBanner from '../src/GACookieConsent.svelte'

function createGACookieBanner(gaMeasurementId, options = {}) {
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

	const banner = new CookieBanner({
		target: cookieBannerDiv,
		props: {
			gaMeasurementId,
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
