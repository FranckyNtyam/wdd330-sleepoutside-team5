import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  let cartItems = getLocalStorage("so-cart") || [];

  if (!Array.isArray(cartItems)) {
    cartItems = [];
  }

  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

// Update cart count badge
export function updateCartCount(count) {
  const cartCountElement = document.getElementById("cart-count");
  
  // Update the count text  
    cartCountElement.textContent = count;

}
// Select the product list container for event delegation in this format to handle if no items exist in cart or DOM not ready
const productList = document.querySelector(".product-list"); 
// Event delegation for remove icons
if (productList) {
  productList.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-icon")) {
      const idToRemove = e.target.dataset.id;
      let cartItems = getLocalStorage("so-cart") || [];
      cartItems = cartItems.filter(item => item.Id !== idToRemove);
      localStorage.setItem("so-cart", JSON.stringify(cartItems));
      renderCartContents();
    }
  });
}


function cartItemTemplate(item) {
  // adding aria-label and role to remove icon for accessibility to the html span element
  const newItem = `<li class="cart-card divider">
    <span class="remove-icon" data-id="${item.Id}" aria-label="Remove item from cart" role="button" tabindex="0">&times;</span>
    <a href="#" class="cart-card__image">
        <img src="${item.Image}" alt="${item.Name}" />
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
// Initial cart count update on page load
const initialCartItems = getLocalStorage("so-cart") || [];
updateCartCount(initialCartItems.length);

// Update cart count when "Add to Cart" button is clicked
const addToCart = document.getElementById("add-to-cart");
if (addToCart) {
  addToCart.addEventListener("click", function () {
    const cartItems = getLocalStorage("so-cart") || [];
    updateCartCount(cartItems.length);
  });
} 


