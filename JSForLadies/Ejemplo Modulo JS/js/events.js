App.Events = (function(app){
		$(document).ready(function(){
			$(window).scroll(function(){
	      var windowScrollTop = $(window).scrollTop();
	      if(windowScrollTop >= 720 && windowScrollTop <= 850)
	        app.Animations.animationOne();
	      if(windowScrollTop >= 1520 && windowScrollTop <= 1650)
	        app.Animations.animationTwo();
    	});

	    $('#section4').click(function(){
	      app.Animations.animationThree();
	    });
	});	
})(App)