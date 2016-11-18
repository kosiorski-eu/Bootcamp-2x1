(function($) {

    $(document).ready(function() {
		
		var button = $(".button"),
			text = $(".text"),
			ul = $("<ul>").addClass("list");
		
		$("#container").append(ul);
		
		button.on("click", function(e){
			
			e.preventDefault();
			
			if(text.val().length === 0){
				alert("Wpisz imię!");
			} else {
				var name = $("<li>").text(text.val());
				ul.append(name);
				text.val("");
 				
			}
		})
    });

})(jQuery);


















