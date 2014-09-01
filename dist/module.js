angular
    .module("youbank-showcase", [
    ])
    .run(function(){
        $(document).ready(function() {
            $('#fullpage').fullpage();
        });
    });

angular.module('youbank-showcase').controller('IndexCtrl', function($scope, $location, $http) {

    console.log('Wizard controller');
});