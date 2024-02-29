// funciones
function saludar(nombre) {
  console.log("Hola mundo " + nombre);
}

// scope (alcance)

const numero = 10;

function saludarConApellido() {
  console.log(numero);
  const apellido = "fran";
  console.log("Hola mundo " + apellido);
}

// esto no funciona, ya que la funcion es un bloque aislado de codigo
// console.log(apellido);

// Return (devolver informacion desde la funcion)

// sin devolver
function sumar(n1, n2) {
  return n1 + n2;
}

// let nombre = prompt("ingrese su nombre");
// let numero1 = parseInt(prompt("ingrese el primer numero para sumar"));
// let numero2 = parseInt(prompt("ingrese el segundo numero para sumar"));

// let resultado = sumar(numero1, numero2);

// console.log(nombre + " su resultado es: " + resultado);

function emailValidation(email) {
  if (!email.includes("@")) {
    console.log("el email debe incluir un @");
    return;
  }

  return email;
}

// const emailValidado = emailValidation("hflkashdklg");

// if (!emailValidado) {
//   console.log("El email no tiene el formato correcto");
// } else {
//   console.log(emailValidado);
// }

// funciones anonimas
const restar = function (n1, n2) {
  return n1 - n2;
};

// Callback
// function formulario(operacion) {
//   let nombre = prompt("ingrese su nombre");
//   let numero1 = parseInt(prompt("ingrese el primer numero de la operacion"));
//   let numero2 = parseInt(prompt("ingrese el segundo numero de la operacion"));

//   const resultado = operacion(numero1, numero2);
//   console.log(nombre + " su resultado es " + resultado);
// }

// formulario(function (n1, n2) {
//   return n1 * n2;
// });

// formulario(function (n1, n2) {
//   return n1 / n2;
// });

// FUNCIONES FLECHA
const restarConFlecha = (n1, n2) => {
  return n1 - n2;
};

// RETURN IMPLICITO
const sumarConFlecha = (n1, n2) => n1 + n2;

// RECIBIR UN UNICO PARAMETRO SIN PARENTESIS
const saludarConFlecha = (nombre) => console.log("Bienvenido " + nombre);

const users = [
  {
    nombre: "nombre",
    apellido: "apellido",
    id: 1,
  },
  {
    nombre: "nombre",
    apellido: "apellido1",
    id: 2,
  },
  {
    nombre: "nombre",
    apellido: "apellido2",
    id: 3,
  },
];

// METODO FOREACH PARA RECORRER ARRAYS
users.forEach((user, index, users) => {
  // console.log(user.nombre + index)
  // console.log(users)
});

// MAP (METODO PARA CAMBIAR CONTENIDO EN EL ARRAY)
const arrayCambiado = users.map((user) => {
  if (user.id == 2) {
    user.nombre = "nuevo nombre";
  }
  return user;
});

// FILTER (METODO PARA FILTRAR ELEMENTOS)
const frutas = ["naranja", "manzana", "kiwi"];

const frutasFiltrado = frutas.filter((fruta) => fruta.length > 5);

// METODO FIND (PARA ENCONTRAR EL PRIMER ELEMENTO QUE COINCIDA CON LA CONDICION)
const usuarioEncontrado = users.find((user) => user.apellido == "apellido1");

// METODO SOME (DEVUELVE TRUE O FALTA DEPENDIENDO SI EXISTE O NO EL ELEMENTO)
const verificarUsuario = users.some((user) => user.apellido == "apellido3");

// Funciones Contructoras
function User(name, lastname, email) {
  this.nombre = name;
  this.apellido = lastname;
  this.email = email;
  this.changeName = (nuevoNombre) => {
    this.nombre = nuevoNombre;
  };
  this.saludar = () => {
    console.log("hola " + this.nombre + " " + this.apellido + " como estas?");
  };
}

const user1 = new User("Juan", "Chavez", "juanchavez@gmail.com");
const user2 = new User("Juan", "Chavez", "juanchavez@gmail.com");
const user3 = new User("Juan", "Chavez", "juanchavez@gmail.com");

user1.changeName("Carlos");

// user1.saludar();

// Clases
class Product {
  constructor(title, price, description) {
    this.title = title;
    this.price = price;
    this.description = description;
  }

  changeTitle(newTitle) {
    this.title = newTitle;
  }
}

const product1 = new Product("product1", 800, "description del producto 1");
const product2 = new Product("product1", 800, "description del producto 1");

product1.changeTitle("titulo cambiado");

// DOM (Document Object Model)

// interacctuar con los nodos

// traer elementos por id
// const container = document.getElementById('container')

// traer elementos por tag
const containersWithTag = document.getElementsByTagName("h1");

// traer elementos por clase
const containersWithClass = document.getElementsByClassName("container-class");

// query selector (selectores de css)
const containerQuerySelector = document.querySelector("#container");
const containersQuerySelectorAll = document.querySelectorAll(".container-class");

// modificar contenido

// textContentent o innerTEXT
const titulo = document.getElementById("titulo");
titulo.textContent = "Chau mundo";
titulo.innerText = "Chau mundo cambiado";

// innerHTML
const container = document.getElementById("container");
const presentacion = "Presentacion";
const mensaje = "Hola mundo me llamo Juan";

// container.innerHTML = `
//   <h3>${presentacion}</h3>
//   <p>${mensaje}</p>
// ` // template string

// cambiar estilos
titulo.style.color = "red";

// sumar o restar clases
titulo.className = "titulo";
titulo.classList.add("resaltado");
titulo.classList.remove("titulo");
titulo.classList.replace("resaltado", "oculto");

// sumar o eliminar elementos del DOM
const nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText = "nuevo mensaje";
nuevoParrafo.classList.add("nuevo-parrafo");

// enviar un solo hijo al contenedor
container.appendChild(nuevoParrafo);

// enviar varios elementos al contenedor
const nuevoLink = document.createElement("a");
nuevoLink.innerText = "link";
container.append(nuevoParrafo, nuevoLink);

// Eliminar un elemento
const containerTitulo = document.getElementById("container-titulo");
container.removeChild(containerTitulo);
container.remove();

const products = [
  {
    title: "Producto 1",
    price: 800,
    description: "Descripcion uno",
  },
  {
    title: "Producto 2",
    price: 600,
    description: "Descripcion dos",
  },
  {
    title: "Producto 3",
    price: 9000,
    description: "Descripcion tres",
  },
  {
    title: "Producto 4",
    price: 70,
    description: "Descripcion cuatro",
  },
];

const productsContainer = document.getElementById("productsContainer");

// EVENTOS

// addEventListener
const buttonClick = document.getElementById("buttonClick");

buttonClick.addEventListener("click", () => {
  if (!productsContainer.firstChild) {
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      productDiv.innerHTML = `
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p>$${product.price}</p>
      `;

      productsContainer.appendChild(productDiv);
    });
  } else {
    while (productsContainer.firstChild) {
      productsContainer.removeChild(productsContainer.lastChild);
    }
  }
});

const buttonMouseOver = document.getElementById("buttonMouseOver");
// buttonMouseOver.addEventListener("mouseover", () => {
//   console.log("sobre el boton");
// });

// on-event
buttonMouseOver.onmouseover = () => {
  console.log("sobre el boton");
};

// on-event HTML
const handleClick = () => {
  console.log("clickeado con html");
};

// Eventos de teclado

//evento KeyDown (Al presionar la tecla)
// document.addEventListener("keydown", (event) => {
//   console.log(`Presionaste la tecla: ${event.key}`);
// });

//evento KeyUp (Al soltar la tecla)
// document.onkeyup = (event) => {
//   console.log(`Presionaste la tecla: ${event.key}`);
// };

// eventos de fomulario

// change
const inputChange = document.getElementById("inputChange");
const inputValue = document.getElementById("inputValue");

inputChange.addEventListener("input", (event) => {
  inputValue.innerText = event.target.value;
});

// EVENTO SUBMIT
const usersData = [
  {
    name: "name",
    lastName: "lastName",
    email: "email@gmail.com",
  },
  {
    name: "name2",
    lastName: "lastName1",
    email: "email1@gmail.com",
  },
  {
    name: "name3",
    lastName: "lastName2",
    email: "email2@gmail.com",
  },
];

const cargarUsers = () => {
  const usersContainer = document.getElementById("usersContainer");
  usersContainer.innerHTML = "";

  usersData.forEach((user) => {
    const tableRow = document.createElement("tr");

    tableRow.innerHTML = `
      <th>${user.name}</th>
      <th>${user.lastName}</th>
      <th>${user.email}</th>
    `;

    usersContainer.appendChild(tableRow);
  });
};

cargarUsers();

const formulario = document.getElementById("formulario");

formulario.onsubmit = (event) => {
  event.preventDefault();

  // Extrayendo valores directamente de los input
  const name = document.getElementById("formularioName").value;
  const lastName = document.getElementById("formularioLastName").value;
  const email = document.getElementById("formularioEmail").value;

  // Extrayendo valores del formulario
  const formData = new FormData(event.target);
  const user = Object.fromEntries(formData);

  usersData.push(user);
  cargarUsers();
};
