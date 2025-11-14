import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  let cartItems = getLocalStorage("so-cart") || [];

  if (!Array.isArray(cartItems)) {
    cartItems = [];
  }

  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

<<<<<<< Updated upstream
=======
// Select the product list container for event delegation in this format to handle if no items exist in cart or DOM not ready
const productList = document.querySelector(".product-list");
// Event delegation for remove icons
if (productList) {
  productList.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-icon")) {
      const idToRemove = e.target.dataset.id;
      let cartItems = getLocalStorage("so-cart") || [];
      cartItems = cartItems.filter((item) => item.Id !== idToRemove);
      localStorage.setItem("so-cart", JSON.stringify(cartItems));
      renderCartContents();
    }
  });
}

>>>>>>> Stashed changes
function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
// document.addEventListener("DOMContentLoaded", renderCartContents);
