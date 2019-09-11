var app = angular.module("StarWars", []);
app.controller("SkyWalker", function($scope, $http) {
    var url = 'https://swapi.co/api/';
    $scope.paginas = [
        { pagina: "Personajes", url: "personajes.html" },
        { pagina: "Planetas", url: "planetas.html" }
    ];
    $scope.titulo = "Tienda StarWars";
    
});