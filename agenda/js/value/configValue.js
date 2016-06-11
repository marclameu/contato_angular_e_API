//Value => Serviços, na maioria das vezes, utilizado para configuração.
//Utilizado para armazenar as constantes, tanto que no lugar de .value pode ser utilizado .constant
//A diferença é que .constant pode ser injetado nos serviços do tipo providers, já o .value não.
angular.module("listaTelefonica")
	.value("config", {
		 baseUrl: "http://localhost/contato"
	});