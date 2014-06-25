angular.module("corpapp.module.fullpage", [])

.run(function(){
	$(document).ready(function() {
	    $('#fullpage').fullpage();
	});
});