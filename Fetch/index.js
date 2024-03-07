// Fetch: traer datos mediante peticiones http (por defecto GET)
// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Traer los productos de la api
const getProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Cargar los productos en el html utilizando la funcion getProducts
const chargeProducts = async () => {
  try {
    const products = await getProducts();
    const container = document.getElementById("container");

    products.forEach((prod) => {
      const prodCard = document.createElement("div");

      prodCard.innerHTML = `
        <h2>${prod.title}</h2>
        <p>${prod.price}</p>
      `;

      container.appendChild(prodCard);
    });
  } catch (error) {
    console.error(error);
  }
};

// traer un solo producto
const getProductById = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getProductById(1);

chargeProducts();

// Manejo de distintos metodos de peticiones (ej: POST, DELETE, PUT, etc)
fetch("https://fakestoreapi.com/products", {
  method: "POST",
});
