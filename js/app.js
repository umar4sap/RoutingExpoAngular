var app=angular.module('enterprise',[])

app.config(function($routeProvider){
    $routeProvider.when("/",{templateUrl:"partials/list.html"})
});

app.controller('AppCtrl',function($scope){
    $scope.crew=[
        {name:"umar",desc:"Tykon this the Umars"},
        {name:"nazeeb",desc:"Showing names"},
        {name:"Salah uddin",desc:"Repeating Information"}
    ]
})