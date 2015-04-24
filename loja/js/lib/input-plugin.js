(function($){
	"use strict";
	$.fn.inputNumerico = function(){
		return this.on("input", function(){
			var naoNumeros = /\D/g;
			if(naoNumero.test(value)){
				this.value = this.value.replace(naoNumeros, "");
			}
		});

	};	
})(jQuery);