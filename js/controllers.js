/**
 * Created by bscott3 on 5/16/2015.
 */
var app_controllers = angular.module('app.controllers', []);
app_controllers.controller('AppCtrl', function($scope,$http){
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
    $http.get('https://random-development.appspot.com/_ah/api/movie/v1/listMovies').then(function(resp){
        $scope.favoriteMovies = resp.data.items;
    },function(err){
        console.log(err)
    })

    $scope.addMovie = function(isValid){
        var title = $scope.m_title;
        var main_char = $scope.main_char;
        var genre = $scope.genre;
        //We can use this data object to post the data to a server
      var data;
        data={};
        data["movie_title"] = title;
        data["main_char"] = main_char;
        data["genre"] = genre;
        console.log(data)
        if(isValid) {
            $http.post('https://random-development.appspot.com/_ah/api/movie/v1/postMovie', data).then(function (resp) {
                console.log(resp)
                $scope.m_title = '';
                $scope.main_char = '';
                $scope.genre = '';
            }, function (err) {
                console.log(err)
            });
            $scope.favoriteMovies.push(data)
        }else{
            console.log("Form invalid")
        }
    }


});

app_controllers.controller('PictureCtrl', function($scope){
    console.log("Picture controller loaded")
});

app_controllers.controller('SampleCodeCtrl', function($scope){
    console.log("SampleCode controller loaded")
});

app_controllers.controller('RedsCtrl', function($scope){
    console.log("Reds controller loaded")
});
