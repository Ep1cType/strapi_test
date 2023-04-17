module.exports =  ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 3306),
			database: env('DATABASE_NAME', 'strapi_db'),
			user: env('DATABASE_USERNAME', 'epictype'),
			password: env('DATABASE_PASSWORD', '53779e4c'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
