angular.module("listaTelefonica")
	.factory("listaTelefonicaService", function($http, config){		
		var _getContatos = function(){
			return $http.get(config.baseUrl);
		};

		var _salvarContato = function(contato){
			return $http.post(config.baseUrl, contato);
		};

		var _deletarContatos = function(contatos){
			ids = [];
			angular.forEach(contatos, function(contato, index){
				ids[index] = contato.id;
			});

			console.log(ids);

			//Náo consegui utiilzar o $http.delete() por problemas com o CORS.
			return $http.post(config.baseUrl + '/delete', ids);

			/*
			return $http({
							method: 'DELETE',
							url: config.baseUrl,
							data: ids	
					})
*/

		};

		return {
			getContatos: _getContatos,
			salvarContato: _salvarContato,
			deletarContatos: _deletarContatos
		};
	});