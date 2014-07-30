module.exports = function(grunt) {

	require('corpapp-grunt-module')(grunt);
	
	grunt.registerTask('default', [
		'build',
		'connect',
		'watch'
	]);
};