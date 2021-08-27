/** @type {import("snowpack").SnowpackUserConfig } */
export default {
	root: './example',
	workspaceRoot: '.',

	mount: {
		/* ... */
	},
	plugins: ['@snowpack/plugin-svelte', '@snowpack/plugin-dotenv'],
	routes: [
		/* Enable an SPA Fallback in development: */
		// {"match": "routes", "src": ".*", "dest": "/index.html"},
	],
	optimize: {
		/* Example: Bundle your final build: */
		// "bundle": true,
		bundle: true,
		minify: true,
		target: 'es6',
		splitting: true,
		treeshake: true,
		entrypoints: [
			'./src/index.js',
			// './example/index.html',
			// './example/index_custom.html',
		],
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
