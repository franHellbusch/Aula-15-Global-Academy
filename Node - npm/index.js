// require (forma mas antigua de requerir informacion de otros archivos js)
// const { sumar, restar } = require("./functions/operaciones");

// import from (forma de traernos informacion de otros archivos js mas actual)
import operacionPorDefecto, { sumar, restar } from "./functions/operaciones.js";

console.log(sumar(10, 6));
console.log(restar(10, 6));
console.log(operacionPorDefecto(40, 5));

// desestructurar objetos
const user = {
  name: "Nombre",
  apellido: "Apellido",
  edad: 18,
};

// const name = user.name;
// const apellido = user.apellido;

const { name, apellido, edad } = user;
