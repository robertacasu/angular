angular.module('app')
    .controller('dueController', function ($scope) {
        // se non sono conncatenati variabili possono avere lo stesso nome 
        $scope.utentedue = {
            nome: "michele",
            cognome: "domesi"
        }
        $scope.utenti = [{
            nome: "paolo",
            cognome: "calvaresi"
        },
        {
            nome: "michele",
            cognome: "domesi"
        },
        {
            nome: "roberta",
            cognome: "casu"
        },
        {
            nome: "martina",
            cognome: "bruschi"
        }]

        $scope.cancella = function(index) {
            $scope.utenti.splice (index, 1)
        }
        $scope.inserisci = function() {
            $scope.utenti.splice (0,0, {...$scope.nuovo})
        }

    })