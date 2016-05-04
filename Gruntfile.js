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
	    // Watch task config
	    watch: {
	      sass: {
	        files: "public/scss/*.scss",
	        tasks: ['sass']
	      }
	    },
	    // SASS task config
	    sass: {
	        dev: {
	            files: {
	                "public/css/default.css" : "public/scss/default.scss",
	                "public/css/home.css" : "public/scss/home.scss"
	            }
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
		},
		concurrent: {
	        dev: ['watch', 'nodemon'],
            options: {
                logConcurrentOutput: true
            }
	    }
    });

    grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-nodemon');

	grunt.registerTask('test', 'mochaTest');
	grunt.registerTask('start', ['concurrent:dev']);
};
