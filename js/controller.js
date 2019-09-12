var app = angular.module("StarWars", []);
app.controller("SkyWalker", function($scope, $http) {
    var url = 'https://swapi.co/api/';
    $scope.paginas = [
        { pagina: "Personajes", url: "personajes.html" },
        { pagina: "Planetas", url: "planetas.html" },
        { pagina: "Peliculas", url: "peliculas.html" },
        { pagina: "Especies", url: "especies.html" },
        { pagina: "Vehiculos", url: "vehiculos.html" },
        { pagina: "Naves", url: "naves.html" }
    ];
    $scope.titulo = "Tienda StarWars";
});
