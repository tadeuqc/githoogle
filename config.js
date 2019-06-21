export default {
	app: {
		baseUri: process.env.APP_URL || 'http://localhost:3000',
		maxPages: 5,
		maxRecords: 10
	},
	api: {
		baseUri: process.env.API_URL ||	'https://api.github.com'
	}
};
