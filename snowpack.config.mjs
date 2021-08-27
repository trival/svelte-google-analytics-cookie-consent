/** @type {import("snowpack").SnowpackUserConfig } */
export default {
	root: './example',
	workspaceRoot: '.',

	mount: {
		/* ... */
	},
	plugins: ['@snowpack/plugin-svelte'],
	routes: [
		/* Enable an SPA Fallback in development: */
		// {"match": "routes", "src": ".*", "dest": "/index.html"},
	],
	optimize: {
		/* Example: Bundle your final build: */
		// "bundle": true,
	},
	packageOptions: {
		/* ... */
	},
	devOptions: {
		/* ... */
	},
	// @ts-ignore
	buildOptions: { out: './dist' },
}
