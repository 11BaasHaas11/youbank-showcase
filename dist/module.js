angular
    .module("youbank-showcase", [
    ])
    .run(function(){
        $(document).ready(function() {
            $('#fullpage').fullpage({
                paddingTop: '0px',
                paddingBottom: '0px',
                easing				: 'easeOutQuart',
                scrollingSpeed		: 900,
                touchSensitivity	: 15,
                css3: false,
                resize:false,
                menu: '#menu',
                anchors: ['slide1', 'slide3', 'slide4']
            });
        });

        $(document).ready(function () {
            $('[data-toggle=offcanvas]').click(function () {
                $('.row-offcanvas').toggleClass('active');
                $('#menuBtn').toggleClass('active');
            });

            $('#fade').cycle({
                fx:      'scrollRight'
            });

            $('#fade2').cycle({
                fx:      'scrollRight'
            });

            $('#launchPega').click(function(){
                window.location.href = 'http://youb.cloudapp.net:8080';
            });

            $('#gotoSlide2').click(function() {
                location.hash = "#" + 'slide3';
            });
        });
    });

angular.module('youbank-showcase').controller('IndexCtrl', function($scope, $location, $http) {

    console.log('Wizard controller');

});