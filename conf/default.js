/**
 * Default Application Configuration
 */
module.exports = {
	session: {
		secret: '<SESSION_SECRET>'
	},
	partners: {
		mailjet: {
			public_key: '',
			private_key: '',
			defaultEmail: '',
			defaultName: 'Clout Tech'
		},
	},
};
