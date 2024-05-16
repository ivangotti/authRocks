const defaultAuthConfig = {
	cacheLocation: 'localstorage',
	authorizationParams: {
		scope: 'openid profile email',
	},
};

const config = {
	auth: {
		...defaultAuthConfig,
		domain: 'idmotors-external.cic-demo-platform.auth0app.com',
		clientId: 'vT7oTuKOlHLCnWzwfIiSLKF35kDEMC6F',
		// UNCOMMENT the following line to test the private API
		// audience: ['api://authrocks/'],
	},
	app: {
		enableSilentAuth: false,
		port: 3000,
	},
	server: {
		permissions: ['authRocks'],
	},
};

export default config;
