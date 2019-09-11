var app = angular.module("StarWars", []);
app.controller("SkyWalker", function($scope, $http) {
    $scope.paginas = {};
    $scope.titulo = "Tienda StarWars";
    $http.get("https://swapi.co/api/people/?format=json")
        .success(function(data) {
            $scope.data = data;
            angular.forEach($scope.data, function(persona) {
                $scope.paginas[persona] = '';
            });
        })
        .error(function(err) {

        });
});