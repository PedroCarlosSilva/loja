(function($){	
	$("#carrinho li form a").click(function(event){
		$(this).closest("li").remove();
		event.preventDefault();
	});
})(jQuery);

//var $link = document.querySelector("#carrinho li form a");
//$link.addEventListener("click", function(event){
	//var $li = this.parentNode.parentNode.parentNode;
	//$li.remove();
	//event.preventDefault();
//});