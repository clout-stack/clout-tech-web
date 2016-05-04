/**
 * Subscribe APIs
 */
module.exports = {
	subscribe: {
		method: 'POST',
		path: '/subscribe',
		description: 'user subscription',
		fn: function (req, res) {
			req.models.Subscriber
				.create(req.params.email)
				.then(res.ok, res.error)
		}
	}
};