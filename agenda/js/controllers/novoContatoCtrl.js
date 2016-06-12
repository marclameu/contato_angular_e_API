angular.module("listaTelefonica").controller("novoContatoCtrl", function($scope, $http, listaTelefonicaService, serialGenerator, $location, operadorasList){
	$scope.app = "Lista Telefonica";	
	
	console.log(operadorasList);
	$scope.operadoras = operadorasList.data;

	$scope.adicionarContato = function(contato){
		contato.serial = serialGenerator.generate();
		listaTelefonicaService.salvarContato(contato).then(function success(response){		
			delete $scope.contato;													
			$scope.message = 'Cadastro efetuado!';	
			$location.path("/contatos");
		}, function error(response){

			console.log("Ocorreu o erro: " + response.data + " status "+ response.status);
		});			
		$scope.contatoForm.$setPristine();
	}
		
});