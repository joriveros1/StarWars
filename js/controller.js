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
    $scope.carruso = [
        { src: "https://wallpapercave.com/wp/wp3357495.jpg", contenido: "", status: "no" },
        { src: "https://wallpapercave.com/wp/wp3390444.jpg", contenido: "", status: "no" },
        { src: "https://wallpapercave.com/wp/wp3614448.jpg", contenido: "", status: "no" },
        { src: "https://wallpapercave.com/wp/wp3614454.jpg", contenido: "", status: "no" },
        { src: "https://wallpapercave.com/wp/wp3614456.jpg", contenido: "", status: "no" },
        { src: "https://wallpapercave.com/wp/wp3614483.jpg", contenido: "", status: "no" },
        { src: "https://wallpapercave.com/wp/wp3614485.jpg", contenido: "", status: "no" },
        { src: "https://wallpapercave.com/wp/wp2670943.jpg", contenido: "", status: "no" }
    ];
});
