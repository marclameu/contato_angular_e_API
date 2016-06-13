angular.module("listaTelefonica").config(function($routeProvider){
	$routeProvider.when("/contatos", {
		templateUrl: "view/contatos.html",
		controller: "listaTelefonicaCtrl",
		resolve: {
			contatosList: function(listaTelefonicaService){
				return listaTelefonicaService.getContatos();
			}
		}		
	})
	.when("/detalhesContato/:id", {
		templateUrl: "view/detalhesContato.html",
		controller: "detalhesContatoCtrl",
		resolve: {
			contato: function(listaTelefonicaService, $route){
				return listaTelefonicaService.getContato($route.current.params.id);
			}
		}
	})	
	.when("/novoContato", {
		templateUrl: "view/novoContato.html",
		controller: "novoContatoCtrl",
		resolve: {
			operadorasList: function(OperadoraService){
				return OperadoraService.getOperadoras();
			}
		}	
	})
	.when("/error", {
		templateUrl: "view/error.html",	
	})	
	.otherwise({redirectTo: "/contatos"});
});