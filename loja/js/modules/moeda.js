var formatadorMoeda = (function(){
	"use strict";
	var _simbolo = "R$ ";

	return{
		numberParaReal:function(number){
			return this._simbolo+ number.toFixed(2).replace(".", ",");
		},
		realParaNumber: function(texto){
			return parseFloat(texto.replace("R$ ", "").replace(",", "."));
		}
	};
})();