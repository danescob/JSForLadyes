App.Animations = (function(app){
	var animationOne = function() {
    $('#img1').fadeIn(1000);
  };

  var animationTwo = function() {
    $('#img2').slideToggle(1000)
  };

  var animationThree = function() {
    var hue = 0;
    setInterval(function(){
      hue++;
      if(hue >= 360)
        hue = 0;
      $('#section4').css('background-color','hsl('+hue+',60%, 50%)');
    },10);
  };
  
	return {
		animationOne: animationOne,
		animationTwo: animationTwo,
		animationThree: animationThree
	}
})(App);
