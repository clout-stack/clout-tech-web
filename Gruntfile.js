/**
 * Gruntfile
 */

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

    grunt.initConfig({
    	// Mocha config
        mochaTest: {
            test: {
                src: ['test/**/*.js']
            }
        },
	    // Nodemon
		nodemon: {
			dev: {
				script: 'app.js',
				options: {
					ignore: ['Gruntfile.js', 'test/**', 'public/**', 'logs/**', 'views/**']
				}
			}
		}
    });

    grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-nodemon');

	grunt.registerTask('test', 'mochaTest');
	grunt.registerTask('start', ['nodemon']);
};
