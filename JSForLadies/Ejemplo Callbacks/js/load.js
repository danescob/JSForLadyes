App.Load = (function(app){

	function loadImages() {
	  var files = $('#load_btn')[0].files;
	  if (files.length > 0) {
		  for (var i = 0; i < files.length; i++) {
		  	loadImage(files[i]);
		  }
		$('#pre_loader').hide();
	  }
	}

	function loadImage(image){
		var reader = new FileReader();
	  	reader.addEventListener("load", function () {
	      var img = new Image;
	      img.addEventListener("load", function () {
	      	img.width = 300;
	        img.height = 300;
					var imgContainer = $('<div></div>').append(img);
					imgContainer.addClass('img-ctn');
					$('#container').append(imgContainer);
	      });
	      img.src = reader.result;
	  	});
		reader.readAsDataURL(image);
	}

	return {
		loadImages: loadImages
	}

})(App);