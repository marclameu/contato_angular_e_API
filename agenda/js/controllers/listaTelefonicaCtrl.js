angular.module("listaTelefonica")
	.controller("listaTelefonicaCtrl", function($scope, $http, listaTelefonicaService, serialGenerator){
		$scope.app = "Lista Telefonica";
		$scope.operadoras = [
			{nome: "Oi", codigo: 14, categoria: "celular"},
			{nome: "Vivo", codigo: 15, categoria: "celular"},
			{nome: "Tim", codigo: 41, categoria: "celular"},
			{nome: "GVT", codigo: 44, categoria: "fixo"},
			{nome: "NET", codigo: 88, categoria: "fixo"}					
		];

		var carregarContatos = function(){
			
			listaTelefonicaService.getContatos().then(function success(response){
				$scope.contatos = response.data;				
			}, function error(response){
				$scope.erro = "Não foi possível carregar os dados";
				console.log("Ocorreu o erro: " + response.data + " status "+ response.status);
			});
		};

		$scope.adicionarContato = function(contato){
			contato.serial = serialGenerator.generate();
			listaTelefonicaService.salvarContato(contato).then(function success(response){		
				delete $scope.contato;					
				carregarContatos();						
				$scope.message = 'Cadastro efetuado!';	
			}, function error(response){

				console.log("Ocorreu o erro: " + response.data + " status "+ response.status);
			});			
			$scope.contatoForm.$setPristine();
		}

		$scope.apagarContatos = function(contatos){
			contatosSelecionados = getSelecionados(contatos);
			
			listaTelefonicaService.deletarContatos(contatosSelecionados).success(function(response){
					$scope.message = response["mensagem"] ;
					carregarContatos();
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

		carregarContatos();
		$scope.selecionado = "selecionado";
		$scope.negrito = "negrito";
	});