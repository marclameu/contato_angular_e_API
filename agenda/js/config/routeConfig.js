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
		controller: "detalhesContatoCtrl"
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
	.otherwise({redirectTo: "/contatos"});
});