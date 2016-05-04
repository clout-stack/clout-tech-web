/**
 * Eat Homely
 */
const
	partials = require('express-partials'),
	_ = require('lodash'),
	package = require('./package.json')

var clout = require('clout-js');

clout.on('started', function () {
	if (clout.server.https) {
		clout.logger.info('https server started on port %s', clout.server.https.address().port);
	}
	if (clout.server.http) {
		clout.logger.info('http server started on port %s', clout.server.http.address().port);
	}
});

!clout.app.locals && (clout.app.locals = {});
clout.app.locals.navigation = {
	home: { icon: 'fa fa-home', title: 'Home', href: '/' },
	docs: { icon: 'fa fa-book', title: 'Docs', href: '/docs' },
	showcase: { icon: 'fa fa-cloud', title: 'Showcase', href: '/showcase' },
	changelog: { icon: 'fa fa-file-text-o', title: 'Changelog', href: '/changelog' },
	issues: { icon: 'fa fa-exclamation-triangle', title: 'Issues', href: 'https://github.com/muhammaddadu/eat-homely/issues' },
	github: { icon: 'fa fa-github', title: 'Github', href: 'https://github.com/clout-stack/clout-js' },
};
clout.app.locals.package = package;

// add express-partials
clout.logger.debug('middleware', 'append partials');
clout.app.use(partials()); // partials

clout.start();