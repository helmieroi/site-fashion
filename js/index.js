function onValidForm(event) {
    event.preventDefault();  
    window.location.href = "../home/index.html";
}

function goTo(url="../home/index.html") { 
    window.location.href = url;
}


let cartItems = [
    { name: "Produit 1", price: 20, quantity: 1 },
    { name: "Produit 1", price: 20, quantity: 1 },
    { name: "Produit 1", price: 20, quantity: 1 },
    { name: "Produit 1", price: 20, quantity: 1 },
    { name: "Produit 1", price: 20, quantity: 1 },
    { name: "Produit 1", price: 20, quantity: 1 },
    { name: "Produit 1", price: 20, quantity: 1 },
];

// Function to render cart items in the table
function renderCart() {
    const cartTableBody = document.querySelector("#cart-table tbody");
    const cartTotalElement = document.getElementById("cart-total");

    // Clear the table
    cartTableBody.innerHTML = "";

    let totalPrice = 0;

    cartItems.forEach((item, index) => {
        const itemTotal = (item.price * (index + 1)) * item.quantity;
        totalPrice += itemTotal;
 
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.name+ " " + index}</td>
            <td style="text-align: right; font-weight: 600; "><input type="number" value="${item.quantity}" min="1" class="cart-quantity" data-index="${index}"></td>
            <td style="text-align: right;  font-weight: 600; ">${(item.price * (index + 1))}€</td>
            <td style="text-align: right; font-weight: 600; ">${itemTotal}€</td>
            <td style="text-align: center;"><button onclick="removeItem(${index})" class="remove-item" data-index="${index}" style="border: none; background: none; cursor: pointer;">

                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 6h18"></path>
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
</svg>

                        </button> 
                        
                        </td>
        `;

        cartTableBody.appendChild(row);
    });
 
    cartTotalElement.textContent = `${totalPrice}€`;
}

// Function to handle removing items from the cart
function removeItem(index) {
    cartItems.splice(index, 1);
    renderCart();
}

// Function to handle quantity changes
function updateQuantity(index, quantity) {
    cartItems[index].quantity = quantity;
    renderCart();
}

// Event listener for removing items
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("remove-item")) {
        const index = event.target.getAttribute("data-index");
        removeItem(index);
    }
});

// Event listener for updating quantities
document.addEventListener("input", function(event) {
    if (event.target.classList.contains("cart-quantity")) {
        const index = event.target.getAttribute("data-index");
        const newQuantity = parseInt(event.target.value);
        updateQuantity(index, newQuantity);
    }
});
 
renderCart();
 