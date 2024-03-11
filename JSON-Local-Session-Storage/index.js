const traerJson = async () => {
  const response = await fetch("./almacenamiento.json");
  const data = await response.json();
  console.log(data);
};

// MANEJO DE JSON (JavaScript Object Notation)
const users = [
  {
    name: "Nombre",
  },
];

console.log(users);
// stringify (de objeto js a json)
const usersJson = JSON.stringify(users);
console.log(usersJson);

// parse (pasar de json a objeto js)
const usersParsed = JSON.parse(usersJson);
console.log(usersParsed);

// Storage (almacenamiento en el navegador)

// session (nos permiten guardar informacion como clave valor hasta que cerremos la pestaña)
// guardar datos
sessionStorage.setItem("nombre", "Juan");

// obtener datos
console.log(sessionStorage.getItem("nombre"));

// eliminar datos
sessionStorage.removeItem("nombre");

// eliminar todos los datos
sessionStorage.clear();

// localStorage (guarda informacion hasta que nosotros lo borremos)
localStorage.setItem("apellido", "Perez");

console.log(localStorage.getItem("apellido"));

localStorage.removeItem("apellido");

localStorage.clear();

// ejemplo de carrito (con session)
const cart = [
  {
    title: "celular samsung",
    price: 500,
  },
];

sessionStorage.setItem("cart", JSON.stringify(cart));

const carritoGuardado = sessionStorage.getItem("cart");

const carrritoParseado = JSON.parse(carritoGuardado);

console.log(carrritoParseado);
