
var app = angular.module('myApp', ['ui.router', 'app.controllers']);
app.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window){
     $rootScope
        .$on('$stateChangeSuccess',
            function(event){

                if (!$window.ga)
                    return;

                $window.ga('send', 'pageview', { page: $location.path() });
        });
    }]);
app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "home.html",
      controller: "AppCtrl"
    })
    .state('pictures', {
      url: "/pictures",
      templateUrl: "pictures.html",
      controller: "PictureCtrl"
    })
    .state('sampleCode', {
      url: "/sampleCode",
      templateUrl: "sampleCode.html",
      controller: "SampleCodeCtrl"
    })
    .state('reds', {
      url: "/reds",
      templateUrl: "reds.html",
      controller: "RedsCtrl"
    });

});


