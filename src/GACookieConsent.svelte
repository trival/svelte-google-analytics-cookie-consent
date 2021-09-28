<script>
	import { onMount } from 'svelte'
	import {
		eraseCookie,
		getCookie,
		getGoogleCookies,
		setCookie,
	} from './cookies'

	// === props ===

	export let gaMeasurementIds = []
	export let anonymizeIPs = true
	export let bannerText = 'This site uses cookies!'
	export let acceptBtnLabel = 'Accept'
	export let rejectBtnLabel = 'Reject'
	export let readMoreLinkUrl = ''
	export let readMoreLinkLabel = 'read more'

	// === external API ===

	export function reopen() {
		consentSelected = false
	}
	export const accept = enableGA
	export const reject = disableGA

	// === cookie state ===
	const gaIds =
		typeof gaMeasurementIds === 'string' ? [gaMeasurementIds] : gaMeasurementIds

	const consentCookieName = 'consent_given'
	const consentCookieValueAccepted = 'true'
	const consentCookieValueRejected = 'false'
	const isConsentCookieSet = () => Boolean(getCookie(consentCookieName))
	const isConsentCookieAccepted = () =>
		getCookie(consentCookieName) === consentCookieValueAccepted
	const isConsentCookieRejected = () =>
		getCookie(consentCookieName) === consentCookieValueRejected
	let consentSelected = isConsentCookieSet()

	function setConsentCookieAccepted() {
		setCookie(consentCookieName, consentCookieValueAccepted, 30)
		consentSelected = true
	}
	function setConsentCookieRejected() {
		setCookie(consentCookieName, consentCookieValueRejected, 30)
		consentSelected = true
	}

	// === helper functions ===

	function enableGA() {
		if (gaIds.length && typeof window.dataLayer === 'undefined') {
			for (const gaId of gaIds) {
				window[`ga-disable-${gaId}`] = undefined
			}

			const script = document.createElement('script')

			script.onload = function () {
				window.dataLayer = window.dataLayer || []
				function gtag() {
					window.dataLayer.push(arguments)
				}
				gtag('js', new Date())
				for (const gaId of gaIds) {
					gtag('config', gaId, { anonymize_ip: anonymizeIPs })
				}
			}

			script.src = `https://www.googletagmanager.com/gtag/js?id=${gaIds[0]}`
			document.body.appendChild(script)
		}

		setConsentCookieAccepted()
	}

	function disableGA() {
		for (const gaId of gaIds) {
			window[`ga-disable-${gaId}`] = true
		}
		window.dataLayer = undefined
		getGoogleCookies().forEach(eraseCookie)
		setConsentCookieRejected()
	}

	onMount(() => {
		if (isConsentCookieAccepted()) {
			enableGA()
		} else if (isConsentCookieRejected()) {
			disableGA()
		}
	})
</script>

{#if !consentSelected}
	<div class="ga-cookie-banner">
		<span class="ga-cookie-banner-text">{bannerText}</span>
		<span class="ga-cookie-banner-btns">
			<button
				type="button"
				class="ga-cookie-banner-accept-btn ga-cookie-banner-btn"
				on:click={enableGA}>{acceptBtnLabel}</button
			>
			<button
				type="button"
				class="ga-cookie-banner-reject-btn ga-cookie-banner-btn"
				on:click={disableGA}>{rejectBtnLabel}</button
			>
		</span>
		{#if readMoreLinkUrl}
			<a href={readMoreLinkUrl} class="ga-cookie-banner-read-more-link"
				>{readMoreLinkLabel}</a
			>
		{/if}
	</div>
{/if}

<style>
	.ga-cookie-banner {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 1em;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		border-top: 1px solid rgba(0, 0, 0, 0.5);
		background: white;
		box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.1);
	}

	.ga-cookie-banner-text {
		display: inline-block;
		margin-top: 1em;
	}

	.ga-cookie-banner-btns {
		display: inline-block;
		white-space: nowrap;
		margin: 1em;
	}

	.ga-cookie-banner-btn {
		white-space: nowrap;
		margin-top: 1em;
		margin-bottom: 1em;
		padding: 0.5em 2.5em;
		border: 2px solid rgba(0, 0, 0, 0.2);
		border-radius: 5px;
		font-size: 1.1em;
		cursor: pointer;
	}
	.ga-cookie-banner-btn + .ga-cookie-banner-btn {
		margin-left: 1em;
	}

	@media screen and (max-width: 480px) {
		.ga-cookie-banner-btns {
			white-space: normal;
		}
		.ga-cookie-banner-btn {
			margin: 1em 1em 0;
		}
	}

	.ga-cookie-banner-accept-btn {
		background-color: rgb(0, 192, 102);
		border-color: rgb(0, 192, 102);
		border-bottom-color: rgb(2, 141, 76);
		border-bottom-width: 2px;
		color: white;
		font-weight: bold;
	}
	.ga-cookie-banner-accept-btn:hover,
	.ga-cookie-banner-accept-btn:focus {
		background-color: rgb(2, 141, 76);
		border-color: rgb(2, 141, 76);
	}

	.ga-cookie-banner-reject-btn {
		background-color: white;
		color: rgba(0, 0, 0, 0.5);
	}
	.ga-cookie-banner-reject-btn:hover,
	.ga-cookie-banner-reject-btn:focus {
		background-color: rgba(0, 0, 0, 0.1);
		border-color: rgba(0, 0, 0, 0.1);
	}

	.ga-cookie-banner-read-more-link {
		display: inline-block;
		white-space: nowrap;
		margin-bottom: 1em;
	}
	/* css will go here */
</style>
