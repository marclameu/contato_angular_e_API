angular.module("listaTelefonica")
	.directive("uiAlert", function(){
		return{
			templateUrl: "view/alert.html",
			scope: {
				title: "@", //Se o nome aqui fosse diferente do nome em alert.html, teria que colocar o nome completo com @. Ex.: titulo: @titulo
				message: "="// o sinal "=" faz o two way databinding
			},
			transclude: true // Permite que a mensagem seja carregada dentro da diretiva (dentro da div, por exemplo)

			//restrict: "A",
			//replace: true	
		};
	});