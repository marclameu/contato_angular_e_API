//Os serviços do tipo config são utilizados para configurar os serviços providers.
angular.module("listaTelefonica")
	.config(function(serialGeneratorProvider){
		serialGeneratorProvider.setLength(10);		
	});