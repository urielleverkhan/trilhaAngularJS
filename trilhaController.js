
(function(){
    var myApp = angular.module('trilhaApp', []);
                
    myApp.controller('TrilhaController', function($scope){
        $scope.teste = 'OLA MUNDÃO';
        $scope.count = 0;
    
        const modal = document.querySelector(".modal-content");
        const conteudo = document.querySelector(".prosseguir");
        const botaoProsseguir = document.querySelector(".botao-prosseguir");
        const imgParado = document.querySelector(".imgParado");
        const imgQuase = document.querySelector(".imgQuase");
        const atchim = document.querySelector(".atchim")
        const imgParadoAtchim = document.querySelector(".imgParadoAtchim")

        $scope.atchim = function(){
            modal.style.display = "flex";
            botaoProsseguir.style.display = "block";
            conteudo.style.display = "none";
            pararAtchim();
        }

        $scope.fechar = function(){
            modal.style.display = "none";
            imgParadoAtchim.style.display="none"; 
            atchim.style.display = "flex";
        }

        $scope.prosseguir = function(){
            conteudo.style.display = "flex";
            botaoProsseguir.style.display = "none";
        }
        $scope.cocegas = function(){
            imgParado.style.display = "none";
            imgQuase.style.display = "flex";
        }
        $scope.semCocegas = function(){
            imgParado.style.display = "flex";
            imgQuase.style.display = "none";
        }

        function pararAtchim(){
            setTimeout(function(){ 
                imgParadoAtchim.style.display="flex"; 
                atchim.style.display = "none";
             }, 600);
        }
    });
})();