// asincronia

// promises
const saludar = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nombre == "Juan") {
        reject("No tenes permitido el acceso");
      } else {
        resolve(`Hola ${nombre}`);
      }
    }, 2000);
  });
};

// Manejo de asincronia con then y catch
// saludar("Juan")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("termino el proceso");
//   });

// async / await
// async con una funcion normal
async function manejarSaludo() {
  try {
    const response = await saludar("Juan");
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("termino el proceso");
  }
}

// async con una funcion flecha
const manejarSaludoConFlecha = async () => {};

manejarSaludo();

console.log(await saludar("Fran"));

console.log("ultimo proceso");

// tres estados de la promesa
// 1. pending
// dos estados finales posibles: Resolve y Reject
