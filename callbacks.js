/**
 * 1< Pedir informes
 * 2- Entrevista
 * 3- Pagar
 * 4- Inscripcion
 */

const pastel = {
  recetaLeida: false,
  ingredientesConseguidos: false,
  masaPreparada: false,
  pastelHorneado: false,
  pastelDecorado: false,
};

const leerReceta = (recetaALeer, callback) => {
  let error = null;
  setTimeout(() => {
    recetaALeer.recetaLeida = true;

    if (!recetaALeer.recetaLeida) {
      error = "No se ha leido la receta";
    }
    callback(error, recetaALeer);
  }, 3000);
};

const ingredientes = (ingedientesAConseguir, callback) => {
  let error = null;
  setTimeout(() => {
    ingedientesAConseguir.ingredientesConseguidos = true;
    if (!ingedientesAConseguir.ingredientesConseguidos) {
      error = "No se han conseguido los ingredientes";
    }
    callback(error, ingedientesAConseguir);
  }, 2000);
};
const masa = (masaPastel, callback) => {
  let error = null;
  setTimeout(() => {
    masaPastel.masaPreparada = true;
    if (!masaPastel.masaPreparada) {
      error = "no esta la masa";
    }
    callback(error, masaPastel);
  }, 1000);
};

const hornearPastel = (hornear, callback) => {
  let error = null;
  setTimeout(() => {
    hornear.pastelHorneado = true;
    if (!hornear.pastelHorneado) {
      error = "No se ha horneado";
    }
    callback(error, hornear);
  }, 2000);
};

const decorar = (decorarPastel, callback) => {
  let error = null;
  setTimeout(() => {
    decorarPastel.pastelDecorado = true;
    if (!decorarPastel.pastelDecorado) {
      error = "No se ha decorado";
    }
    callback(error, decorarPastel);
  }, 1000);
};

leerReceta({ ...pastel }, (error, recetaLeiaTotal) => {
  if (error) {
    console.log("error", error);
    return;
  }
  console.log(recetaLeiaTotal);
  ingredientes({ ...pastel }, (error, ingredientesListos) => {
    if (error) {
      console.log("error", error);
      return;
    }
    masa({ ...pastel }, (error, masaLista) => {
      if (error) {
        console.log("error", error);
        return;
      }
      hornearPastel({ ...pastel }, (error, masaLista) => {
        if (error) {
          console.log("error", error);
          return;
        }
        decorar({ ...pastel }, (error, decoradoListo) => {
          if (error) {
            console.log("error", error);
            return;
          }
          console.log("exito");
        });
      });
    });
  });
});
