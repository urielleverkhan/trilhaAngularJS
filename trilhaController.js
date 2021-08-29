
(function(){
    var myApp = angular.module('trilhaApp', []);
                
    myApp.controller('TrilhaController', function($scope){
        $scope.teste = 'OLA MUNDÃO';
        $scope.count = 0;
        const modal = document.querySelector(".modal-content");
        const conteudo = document.querySelector(".prosseguir");
        const botaoProsseguir = document.querySelector(".botao-prosseguir");

        $scope.abrir = function(){
            modal.style.display = "flex";
            botaoProsseguir.style.display = "block";
            conteudo.style.display = "none";
        }

        $scope.fechar = function(){
            modal.style.display = "none";
        }

        $scope.prosseguir = function(){
            conteudo.style.display = "flex";
            botaoProsseguir.style.display = "none";
        }
        
    });
})();