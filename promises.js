/**
 * promesas -> El Resultado de un proceso asincrono
 * 
 * Reglas -> 
 * tiene 3 estados
 * 1- Pending
 * 2- Rejected -> si ocurrio un error -> si fuera recahzada
 * 3- Accepted -> si se resolvio -> si fue aceptada 
 * 
 * Al momento de hacer la promesa, decalracionnde la promesa 
 * Las promesas se resuelven o se rechazan
 *      - Resolverla  = Resolve -> Funcition que se ejecuta
 *      - Rechazarla  = Reject -> Function que se ejecuta 
 * 
 *  Al momento de ejecutarlas 
 * Es Recibir el rechazo o la respuesta resuelta 
 * 
 * .then -> es para recibir lo recuelto 
 * 
 * 
 * .catch -> para recibir lo rechazado -> el error 
 * 
 * 
 * -----------------------------------
 * 
 */

 const pastel = {
    recetaLeida: false,
    ingredientesConseguidos: false,
    masaPreparada: false,
    pastelHorneado: false,
    pastelDecorado: false,
  };

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

  const pastelPreparado = leerReceta ({ ...pastel });
  pastelPreparado
  .then((pastelPreparado)=>{
    console.log(pastelPreparado);

    ingredientes({...pastelPreparado})
    .then((ingredientesConseguidos)=>{
        console.log("IngredientesConseguidos", ingredientesConseguidos)

        masa({...ingredientesConseguidos})
        .then((masaPreparada)=>{
            console.log("masaPreparada", masaPreparada)

            hornearPastel({...masaPreparada})
            .then((pastelHorneado)=>{
                console.log("pastelHorneado", pastelHorneado)
                
                decorar({...pastelHorneado})
                .then((pastelDecorado)=>{
                    console.log("pastelDecorado", pastelDecorado)
                })
                .catch((error) => {
                    console.log("error", error);}) 
            })
            .catch((error) => {
                console.log("error", error);}) 
        })
        .catch((error) => {
            console.log("error", error);}) 
    })
    .catch((error) => {
        console.log("error", error);})
  })
  .catch((error) => {
    console.log("error", error);})