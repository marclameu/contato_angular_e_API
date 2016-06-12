angular.module("listaTelefonica")
	.controller("listaTelefonicaCtrl", function($scope, $http, $location, listaTelefonicaService, serialGenerator, contatosList){
		$scope.app = "Lista Telefonica";	
		$scope.contato = {
			data: 417754800000
		};	

		console.log(contatosList);

		$scope.contatos = contatosList.data;


		$scope.apagarContatos = function(contatos){
			contatosSelecionados = getSelecionados(contatos);
			
			listaTelefonicaService.deletarContatos(contatosSelecionados).success(function(response){
					$scope.message = response["mensagem"] ;
					$location.path("/contatos");
			}).error(function(response){
					$scope.message = response["mensagem"];
			});
		}

		var getSelecionados = function(contatos){ 
			return contatos.filter(function(contato){
				if(contato.selecionado) 
					return contato;
			});
		}

		$scope.isContatoSelecionado = function(contatos){
			if(contatos == undefined)
				return false;
			return contatos.some(function(contato){
					return contato.selecionado;
			});					
		}		

		//carregarContatos();
		$scope.selecionado = "selecionado";
		$scope.negrito = "negrito";
	});