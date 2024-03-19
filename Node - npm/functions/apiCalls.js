// import de axios
import axios from "axios";

// get all products
export const getProducts = async () => {
  try {
    // llamada a la api con axios
    const responseAxios = await axios.get("https://fakestoreapi.com/products");
    console.log(responseAxios);

    // llamada a la api con fetch
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
};
