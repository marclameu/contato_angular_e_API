angular.module("listaTelefonica").factory("OperadoraService", function($http, config){
	var _getOperadoras = function(){
		return $http.get(config.baseApiUrl + "/operadora");
	};

	return {
		getOperadoras : _getOperadoras
	};
});