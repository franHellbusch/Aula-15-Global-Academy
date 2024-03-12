// traer productos del archivo json
const getProducts = async () => {
  try {
    const response = await fetch("./storage/products.json");
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

// pintar los productos en el html
const productsContainer = document.getElementById("productsContainer");

const chargeProducts = async () => {
  try {
    const products = await getProducts();

    productsContainer.innerHTML = "";

    products.forEach((prod) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h2>${prod.title}</h2>
        <p>$${prod.price}</p>
        <button id="addToCartButton${prod.id}">Add to cart</button>
      `;
      productsContainer.appendChild(div);

      const addToCartButton = document.getElementById(`addToCartButton${prod.id}`);
      addToCartButton.onclick = () => {
        addProductToCart(prod.id);
      };
    });
  } catch (error) {
    console.error(error);
  }
};

chargeProducts();

let cartProducts = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cartContainer");

const chargeCart = () => {
  cartContainer.innerHTML = "";

  cartProducts.forEach((prod) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <h2>${prod.title}</h2>
        <p>$${prod.price}</p>
        <span>5</span>
        <button id="removeFromCartButton${prod.id}">Eliminar</button>
    `;
    cartContainer.appendChild(div);

    const removeFromCartButton = document.getElementById(`removeFromCartButton${prod.id}`);
    removeFromCartButton.onclick = () => {
      removeProductFromCart(prod.id);
    };
  });
};

chargeCart();

const addProductToCart = async (productId) => {
  try {
    const products = await getProducts();
    const prod = products.find((product) => product.id == productId);
    cartProducts.push(prod);
    localStorage.setItem("cart", JSON.stringify(cartProducts));
    chargeCart();
  } catch (error) {
    console.error(error);
  }
};

const removeProductFromCart = (productId) => {
  console.log(productId);
  cartProducts = cartProducts.filter((prod) => prod.id != productId);
  localStorage.setItem("cart", JSON.stringify(cartProducts));
  chargeCart();
};
