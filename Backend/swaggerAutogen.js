"use strict"
/* -------------------------------------------------------
	EXPRESS - Personnel API
------------------------------------------------------- */
require('dotenv').config()
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000
/* ------------------------------------------------------- */
const swaggerAutogen = require('swagger-autogen')()
const packageJson = require('./package.json')

const document = {
	info: {
		version: packageJson.version,
		title: packageJson.title,
		description: packageJson.description,
		termsOfService: "http://www.clarusway.com/#",
		contact: { name: packageJson.author, email: "qadir@clarusway.com" },
		license: { name: packageJson.license, },
	},
	host: `${HOST}:${PORT}`,
	basePath: '/',
	schemes: ['http', 'https'],
	securityDefinitions: {
		Token: {
			type: 'apiKey',
			in: 'header',
			name: 'Authorization',
			description: 'SimpleToken Auth * Example: <b>Token <i>...tokenKey...<i></b>'
		},
	},
	security: [{ Token: true }],
	definition: {
		// Models:
		"Admin": require('./src/models/admin').schema.obj,
		"Appointment": require('./src/models/appointment').schema.obj,
		"Branch": require('./src/models/branch').schema.obj,
		"City": require('./src/models/city').schema.obj,
		"Complaint": require('./src/models/complaint').schema.obj,
		"Content": require('./src/models/content').schema.obj,
		"ContentCategory": require('./src/models/contentCategory').schema.obj,
		"Doctor": require('./src/models/doctor').schema.obj,
		"File": require('./src/models/file').schema.obj,
		"Message": require('./src/models/message').schema.obj,
		"Patient": require('./src/models/patient').schema.obj,
		
	}
}

const routes = ['./index.js']
const outputFile = './src/configs/swagger.json'

// Create JSON file:
swaggerAutogen(outputFile, routes, document)