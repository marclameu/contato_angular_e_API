angular.module("listaTelefonica").controller("detalhesContatoCtrl", function($scope, $routeParams, listaTelefonicaService){
	listaTelefonicaService.getContato($routeParams.id).success(function(response){
		$scope.contato = response		
	}).error(function(){
		console.log("Erro ao carregar contato");
	});
});