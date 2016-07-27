App.Messenger = (function(app){

  function noRoutesAvailable(route){
    console.log("La ruta " + route + "no está disponible");
  }

  function noRoutesFound(route){
    console.log("La ruta " + route + "no existe");
  }

  function printException(error){
    console.log(error);
  }

  function printError(error){
    console.log(error);
  }

  function routeFound(route, name){
    console.log("La ruta encontrada es: " + name + " - " +route[name].destination);
  }

  function thank(option){
    console.log("Muchas Gracias!", option);
  }
  return {
    noRoutesAvailable,
    noRoutesFound,
    printException,
    printError,
    routeFound,
    thank
  }
})(App);
