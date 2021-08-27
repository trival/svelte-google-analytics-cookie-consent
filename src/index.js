import CookieBanner from '../src/GACookieConsent.svelte'

function createGACookieBanner() {
	const cookieBannerDiv = document.createElement('div')
	document.body.appendChild(cookieBannerDiv)

	new CookieBanner({
		target: cookieBannerDiv,
	})
}

export default createGACookieBanner
