//Provider => Agrega funções que podem ser utilizadas em comum, mas não acessam a api, como a função abaixo
//Somente serviços do tipo Provider podem ser configurados, como o length abaixo.
//É obrigatório this.$get.
angular.module("listaTelefonica")	
	.provider("serialGenerator", function(){
		var _lentgh = 10;
		this.getLength = function(){
			return _lentgh;
		};

		this.setLength = function(length){
			_lentgh = length;
		};

		this.$get = function(){
			return {
				generate: function(){
						var serial = "";
						while(serial.length < _lentgh){
							serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
						}
						return serial;
				}
			};
		};
	});