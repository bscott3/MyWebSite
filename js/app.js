
var app = angular.module('myApp', ['ui.router']);
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


app.controller('AppCtrl', function($scope){
    $scope.MovieApiMethods = [
        {
            api_path:"listMovies",
            type:"get",
            api_version: "1"
        },
        {
            api_path:"postMovie",
            type:"post",
            api_version: "1"
        }
    ];

    $scope.clock = {};
    var updateClock = function(){
        $scope.clock.now = new Date();
    }
    setInterval(function(){
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();

    $scope.favoriteMovies = [];
    $scope.addMovie = function(){
        var title = $scope.m_title;
        var main_char = $scope.main_char;
        var genre = $scope.genre;
        //We can use this data object to post the data to a server
      var data;
        data={};
        data["title"] = title;
        data["main_char"] = main_char;
        data["genre"] = genre;
        console.log(data)
        $scope.favoriteMovies.push(data)
    }

});

app.controller('PictureCtrl', function($scope){
    console.log("Picture controller loaded")
});

app.controller('SampleCodeCtrl', function($scope){
    console.log("SampleCode controller loaded")
});

app.controller('RedsCtrl', function($scope){
    console.log("Reds controller loaded")
});
