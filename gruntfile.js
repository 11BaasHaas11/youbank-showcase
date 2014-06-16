module.exports = function(grunt) {

	require('corpapp-grunt')(grunt);
	
	grunt.registerTask('default', [
		'jshint:all', 
		'concat:all',
		'concat_css:all',
		'htmlbuild',
		'connect',
		'watch'
	]);
};