App.Events = (function(app){

	$(document).ready(function() {
		$('#load_btn').change(function () {
			$('#pre_loader').show();
			setTimeout(function() {
				app.Load.loadImages();
			}, 3000);
		});
	});

})(App);