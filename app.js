const clout = require('clout-js');

clout.on('started', () => {
    ['http', 'https'].forEach((key) => {
        let server = clout.server[key];

        if (server) {
            console.log(`http server started on port ${server.address().port}`)
        }
    });
});

clout.start();
