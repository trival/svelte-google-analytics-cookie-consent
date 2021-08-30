/** @type {import("snowpack").SnowpackUserConfig } */
export default {
	mount: {
		/* ... */
		example: '/',
		src: '/lib',
	},
	plugins: ['@snowpack/plugin-svelte', '@snowpack/plugin-dotenv'],
	routes: [
		/* Enable an SPA Fallback in development: */
		// {"match": "routes", "src": ".*", "dest": "/index.html"},
	],
	optimize: {
		/* Example: Bundle your final build: */
		bundle: true,
		minify: true,
		target: 'es6',
		splitting: true,
		treeshake: true,
		entrypoints: ['./src/cookie-banner.js'],
	},
	packageOptions: {
		/* ... */
	},
	devOptions: {
		/* ... */
	},
	// @ts-ignore
	buildOptions: { out: './dist/' },
}
