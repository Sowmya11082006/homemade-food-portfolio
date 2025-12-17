let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  let list = document.getElementById("cartItems");
  let total = 0;
  list.innerHTML = "";

  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button onclick="removeFromCart(${index})">❌</button>
    `;
    list.appendChild(li);
    total += item.price;
  });

  document.getElementById("total").innerText = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);   // remove item
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}


updateCart();

function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("🎉 Order placed successfully!");

  cart = [];
  localStorage.removeItem("cart");
  updateCart();
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}
