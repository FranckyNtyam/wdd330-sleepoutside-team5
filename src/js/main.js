import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

// create a data source for tents
const dataSource = new ProductData("tents");
const productList = new ProductList("Tents", dataSource, element);

const element = document.querySelector(".product-list");

// fetch and log all products for debugging
dataSource.getData().then((products) => console.log(products));

// initialize the product list
productList.init();

