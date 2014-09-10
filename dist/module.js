angular
    .module("youbank-showcase", [
    ])
    .run(function(){
        $(document).ready(function() {
            $('#fullpage').fullpage({
                paddingTop: '0px',
                paddingBottom: '0px',
                css3: false,
                menu: '#menu',
                anchors: ['slide1', 'slide2', 'slide3', 'slide4']
            });
        });

        $(document).ready(function () {
            $('[data-toggle=offcanvas]').click(function () {
                $('.row-offcanvas').toggleClass('active');
                $('#menuBtn').toggleClass('active');
            });
        });
    });

angular.module('youbank-showcase').controller('IndexCtrl', function($scope, $location, $http) {

    console.log('Wizard controller');

});