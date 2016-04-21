App.Events = (function(app){
	$(document).ready(function() {
		$('#add-btn').on('click', function(){
			var numberA = Number($('#number-a').val());
			var numberB = Number($('#number-b').val());
			var result = app.Logic.sum(numberA, numberB);
			$('#result').text(result);
		});	
	});
})(App)