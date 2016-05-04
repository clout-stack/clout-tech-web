/**
 * Subscriber Model
 */

const
	Promise = require('promise'),
	clout = require('clout-js');

var Subscriber = module.exports = {};

/**
 * Create a new subscriber
 * @param  {[type]}   email subscriber email
 * @param  {Function} cb    callback
 * @return {Promise}        promise
 */
Subscriber.create = function create(email, cb) {
	return Promise(function (reject, resolve) {
		// support both callback and promise
		!cb && (cb = function (a, b) {if (a) { return reject(a); } return resolve(b);});
	});
};
