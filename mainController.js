angular.module('app')
    .controller('mainController', function ($scope) {
        var esempio = "stringa di esempio"
        $scope.titolo = "La mia applicazione"
        $scope.utente = {
            nome: "paolo",
            cognome: "calvaresi"
        }
    })