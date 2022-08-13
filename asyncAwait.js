const pastel = {
    recetaLeida: false,
    ingredientesConseguidos: false,
    masaPreparada: false,
    pastelHorneado: false,
    pastelDecorado: false,
  };

  /**
 * Va a cambiar la forma de ejecutar la forma de ejecutarse nuestras promesas
 * Async Await
 * 
 * Async -> Cuando vamos a hacer una funcion asyncrona
 * Await -> Va a ESPERAR una promesas. -> 5 segundos
 * 
 * Reglas:
 * Async va en la declaracion de la funcion, se esta declarando como asincrona
 * Await va dentro de esa funcion que se declaro como asincrona
 * 
 * No puedo usar await sin el async.
 * siempre que se use async await usar catch
 * Sintaxis:
 */


  const leerReceta = (recetaALeer) => {
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
          recetaALeer.recetaLeida = true;
      
          if (!recetaALeer.recetaLeida) {
           reject = "No se ha leido la receta";
          }
          resolve(recetaALeer)
        }, 3000);
    })
  };
  const ingredientes = (ingedientesAConseguir) => {
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            ingedientesAConseguir.ingredientesConseguidos = true;
      
          if (!ingedientesAConseguir.ingredientesConseguidos) {
           reject = "No se han conseguido los ingredientes";
          }
          resolve(ingedientesAConseguir)
        }, 3000);
    })
  };
  const masa = (masaPastel) => {
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            masaPastel.masaPreparada = true;
      
          if (!masaPastel.masaPreparada) {
           reject = "no esta la masa";
          }
          resolve(masaPastel)
        }, 3000);
    })
  };

  const hornearPastel = (hornear) => {
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            hornear.pastelHorneado = true;
      
          if (hornear.pastelHorneado) {
           reject = "No se ha horneado";
          }
          resolve(hornear)
        }, 3000);
    })
  };

  const decorar = (decorarPastel) => {
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            decorarPastel.pastelDecorado = true;
      
          if (decorarPastel.pastelDecorado) {
           reject = "No se ha decorado";
          }
          resolve(decorarPastel)
        }, 3000);
    })
  };

  // Async - Await

   const pastelPreparado = async () => {
    try{

        const recetaLeida = await leerReceta({...pastel})
        // console.log("recetaLeida", recetaLeida)
    
        const ingredientesListos = await ingredientes({...recetaLeida})
        // console.log("ingredientesListos", ingredientesListos)
    
        const masaLista = await masa({...ingredientesListos})
        // console.log("masaLista", masaLista)
    
        const pastelHorneado = await hornearPastel({...masaLista})
        // console.log("pastelHorneado", pastelHorneado)
    
        const pastelDecorado= await decorar({...pastelHorneado})
    
        console.log("Pastel listo!", pastelDecorado)

        return pastelDecorado
    } 
    catch(err) {
        console.log("No esta listo el pastel", err)
    }
}
  pastelPreparado()
  .then((pastelDecorado)=>{
      console.log("pastel Terminado", pastelDecorado)
    
  })
  .catch((err)=>{
    console.log("Hubo un error", err)
  })

  /**
   * FileSystem
   * Callbacks
   * Promises
   * Async Await
   * Http
   * 
   * -> prender un servidor 
   * 
   */