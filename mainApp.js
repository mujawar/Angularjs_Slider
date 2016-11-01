/**
 * Created by arif on 10/4/16.
 */
var mainApp = angular.module("mainApp", []);

mainApp.controller('mySliderController', function($scope) {
    console.log('calling controller')

    $scope.slides = [

                     { img: 'http://res.cloudinary.com/http-arifmujawar-in/image/upload/v1477587246/image1_gyppqn.jpg', text : 'Nature always wears the colors of the spirit'},
                     { img: 'http://res.cloudinary.com/http-arifmujawar-in/image/upload/v1477587255/image2_ooxpnb.jpg', text : 'Float like a butterfly, sting like a bee'},
                     { img: 'http://res.cloudinary.com/http-arifmujawar-in/image/upload/v1477587256/image3_jayakx.jpg', text : 'Sunset is my favorite color, and rainbow is second'},
                     { img: 'http://res.cloudinary.com/http-arifmujawar-in/image/upload/v1477587258/image4_xoommu.jpg', text : 'You affect the world by what you browse'}

                     ]

});