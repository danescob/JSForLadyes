App.Terminal = (function(app){
  var APIMessenger = app.Messenger

  var board = {};

  function addRoute(name, destination, time){
    board[name] = {
      destination: destination,
      time: time
    }
  }

  function findOption(option){
    if(board[option]){
      findByName(option);
    }else{
      throw "No se encontro una ruta"
    }
  }

  function findByName(name){
    return new Promise(function(done){
      done();
    })
    .then(function(){
      APIMessenger.routeFound(board, option)
      Promise.resolve()
    })
    .catch(function(error){
      APIMessenger.printError(error);
    })
  }

  var findRoute = function(option){
    return new Promise(function(done){
      done();
    })
    .then(function(){
      findOption(option);
    })
    .then(function(){
      APIMessenger.thank(option);
    })
    .catch(function(error){
      APIMessenger.printException(error);
    })
  }

  time = Date(2016,3,5,6,3)
  time1 = Date(2016,3,5,6,3)
  time2 = Date(2016,3,5,6,3)
  addRoute("Ruta A", "Bosa", time)
  addRoute("Ruta B", "Kennedy", time1)
  addRoute("Ruta C", "Chapinero", time2)
  var option = "ta A"
  findRoute(option);

})(App);
