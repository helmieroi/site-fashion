function onValidForm(event) {
    event.preventDefault();
    window.location.href = "../home/index.html";
}

function goTo(url = "../home/index.html") {
    window.location.href = url;
}


const minList = [
    {
        "name": "Classic Down Jacket",
        "descriptionLong": "This classic down jacket features a lightweight design, perfect for warmth without the bulk. It comes with a stylish hood and multiple pockets.",
        "metaDescription": "Stay warm and stylish with our Classic Down Jacket, ideal for winter adventures.",
        "id": "001",
        "price": 149.99,
        "reference": "DOUDOUNE001",
        "favorise": false,
        "stock": 50,
        "photo": "../../images/articles/article8.png",
        "couleur": ["Black", "Navy Blue", "Olive Green"],
        "size": ["S", "M", "L", "XL"]
    },
    {
        "name": "Puffer Vest",
        "descriptionLong": "This puffer vest offers lightweight insulation for those cooler days. Layer it over your favorite sweater for added warmth and style.",
        "metaDescription": "Layer up with our stylish Puffer Vest, perfect for transitional weather.",
        "id": "002",
        "price": 89.99,
        "reference": "DOUDOUNE002",
        "favorise": false,
        "stock": 75,
        "photo": "../../images/articles/article9.png",
        "couleur": ["Red", "Black", "Gray"],
        "size": ["M", "L", "XL"]
    },
    {
        "name": "Urban Down Jacket",
        "descriptionLong": "Designed for the city, this urban down jacket features a sleek silhouette and a water-resistant exterior, making it perfect for daily wear.",
        "metaDescription": "Embrace the city life with our Urban Down Jacket, combining style and functionality.",
        "id": "003",
        "price": 179.99,
        "reference": "DOUDOUNE003",
        "favorise": false,
        "stock": 30,
        "photo": "../../images/articles/article10.png",
        "couleur": ["Charcoal", "Burgundy"],
        "size": ["S", "M", "L", "XL"]
    },
    {
        "name": "Lightweight Packable Down Jacket",
        "descriptionLong": "This packable down jacket is perfect for travel, easily folding into its own pocket. It's warm, lightweight, and stylish.",
        "metaDescription": "Travel light with our Lightweight Packable Down Jacket, perfect for on-the-go warmth.",
        "id": "004",
        "price": 99.99,
        "reference": "DOUDOUNE004",
        "favorise": false,
        "stock": 40,
        "photo": "../../images/articles/article11.png",
        "couleur": ["Blue", "Black", "Green"],
        "size": ["S", "M", "L"]
    },
    {
        "name": "Faux Fur Trim Down Jacket",
        "descriptionLong": "This stylish down jacket features a faux fur trim for added elegance. Perfect for both casual and dressy winter outings.",
        "metaDescription": "Elevate your winter wardrobe with our Faux Fur Trim Down Jacket, combining warmth and style.",
        "id": "005",
        "price": 199.99,
        "reference": "DOUDOUNE005",
        "favorise": false,
        "stock": 25,
        "photo": "../../images/articles/article12.png",
        "couleur": ["Black", "Cream"],
        "size": ["M", "L", "XL"]
    }
];

const bigList = [
    {
        "name": "Classic White T-Shirt",
        "descriptionLong": "A timeless wardrobe staple, this classic white t-shirt is made from soft, breathable cotton. Perfect for layering or wearing on its own, it provides comfort and style for any occasion.",
        "metaDescription": "Shop our Classic White T-Shirt for ultimate comfort and style. Perfect for everyday wear.",
        "id": "001",
        "price": 19.99,
        "reference": "TSHIRT001",
        "favorise": true,
        "stock": 150,
        "photo": "../../images/articles/article0.webp",
        "couleur": ["White"],
        "size": ["S", "M", "L", "XL"]
    },
    {
        "name": "Denim Jacket",
        "descriptionLong": "This classic denim jacket features a relaxed fit with a vintage wash. With its timeless design and versatile nature, it can be paired with almost anything.",
        "metaDescription": "Discover our Denim Jacket, perfect for layering and adding style to your outfit.",
        "id": "002",
        "price": 59.99,
        "reference": "JACKET002",
        "favorise": false,
        "stock": 75,
        "photo": "../../images/articles/artcile1.avif",
        "couleur": ["Blue"],
        "size": ["M", "L", "XL", "XXL"]
    },
    {
        "name": "Black Leather Sneakers",
        "descriptionLong": "These sleek black leather sneakers are designed for both comfort and style. Ideal for casual outings, they feature a cushioned insole and a durable outsole.",
        "metaDescription": "Upgrade your footwear with our stylish Black Leather Sneakers. Comfort meets elegance.",
        "id": "003",
        "price": 89.99,
        "reference": "SNEAKER003",
        "favorise": true,
        "stock": 200,
        "photo": "../../images/articles/article2.jpg",
        "couleur": ["Black"],
        "size": ["8", "9", "10", "11"]
    },
    {
        "name": "Floral Print Maxi Dress",
        "descriptionLong": "Embrace the beauty of summer with this floral print maxi dress. With its flowing silhouette and vibrant colors, it’s perfect for any outdoor event or casual day out.",
        "metaDescription": "Step out in style with our Floral Print Maxi Dress. Perfect for summer events.",
        "id": "004",
        "price": 49.99,
        "reference": "DRESS004",
        "favorise": false,
        "stock": 120,
        "photo": "../../images/articles/article3.jpg",
        "couleur": ["Multi"],
        "size": ["S", "M", "L"]
    },
    {
        "name": "Running Shorts",
        "descriptionLong": "Stay comfortable during your workouts with these lightweight running shorts. Made with moisture-wicking fabric, they ensure you stay dry and cool.",
        "metaDescription": "Get moving with our lightweight Running Shorts, designed for ultimate comfort.",
        "id": "005",
        "price": 29.99,
        "reference": "SHORTS005",
        "favorise": true,
        "stock": 100,
        "photo": "../../images/articles/article4.webp",
        "couleur": ["Black", "Gray"],
        "size": ["S", "M", "L", "XL"]
    },
    {
        "name": "Casual Canvas Backpack",
        "descriptionLong": "This stylish canvas backpack is perfect for everyday use. With multiple compartments and a sleek design, it combines functionality and style.",
        "metaDescription": "Explore our Casual Canvas Backpack, perfect for school, work, or outings.",
        "id": "006",
        "price": 39.99,
        "reference": "BACKPACK006",
        "favorise": false,
        "stock": 80,
        "photo": "../../images/articles/article5.webp",
        "couleur": ["Navy", "Olive"],
        "size": ["One Size"]
    },
    {
        "name": "Wool Beanie",
        "descriptionLong": "Stay warm this winter with our cozy wool beanie. Made from soft, high-quality wool, it’s both stylish and functional.",
        "metaDescription": "Keep warm with our stylish Wool Beanie, perfect for cold weather.",
        "id": "007",
        "price": 24.99,
        "reference": "BEANIE007",
        "favorise": true,
        "stock": 200,
        "photo": "../../images/articles/article6.jpg",
        "couleur": ["Gray", "Black"],
        "size": ["One Size"]
    },
    {
        "name": "Elegant Hooded Sweatshirt",
        "descriptionLong": "This stylish hooded sweatshirt combines comfort and sophistication, featuring a soft fabric blend and a modern fit. Ideal for casual outings or lounging at home.",
        "metaDescription": "Stay cozy and chic with our Elegant Hooded Sweatshirt, perfect for any casual occasion.",
        "id": "009",
        "price": 79.99,
        "reference": "SWEAT009",
        "favorise": false,
        "stock": 100,
        "photo": "../../images/articles/article7.webp",
        "couleur": ["Navy Blue", "Gray", "Black"],
        "size": ["S", "M", "L", "XL"]
    }
];


const articles =[...bigList,...minList];

let cartItems = [
    { name: "Elegant Wristwatch", price: 129.99, quantity: 3 },
    { name: "Wool Beanie", price: 24, quantity: 2 },
    { name: "Casual Canvas Backpack", price: 39, quantity: 2 },
    { name: "Running Shorts", price: 129.99, quantity: 1 },];



function renderPageArticle() {
    const urlParams = new URLSearchParams(window.location.search);
    const productContainer = document.querySelector("#page-article-container #product-container");
    const articleIndex = urlParams.get('articleIndex');

    if (!productContainer) return;

    let productInfo = articles[articleIndex];

    const product = document.createElement("div");
    product.className = "root-product"

    // Clear the list
    product.innerHTML = "";


    product.innerHTML = `
        <div style="height:300px; width:calc(40% - 60px); margin:25px;">

            <img style="max-width:100%;" src="${productInfo.photo}" alt="${productInfo.name}"> 
        </div>
        
        <div style="  width:calc(60% - 60px);margin:25px;">
        <div style="margin:20px">
        <h2>${productInfo.name}</h2>
            <p>${productInfo.metaDescription}</p>
            <p class="price">$${productInfo.price.toFixed(2)}</p>
            <p>Reference: ${productInfo.reference}</p>
            <p>Stock: ${productInfo.stock}</p>
  
   </div>
       <fieldset class="fieldset-item">
                <legend>Couleurs</legend>

                <div class="item">
                ${productInfo.couleur.map(color => `
    <label>
        <input style="height: 14px;" type="radio" name="couleur" value="${color}">
        ${color}
    </label>
    `).join('')}
                </div>
         
            </fieldset>

  
 <fieldset class="fieldset-item">
                <legend>Tailles</legend>

                <div class="item">
    
    ${productInfo.size.map(size => `
    <label>
        <input  style="height: 14px;" type="radio" name="size" value="${size}">
        ${size}
    </label>
    `).join('')}
 
                </div>
         
            </fieldset>
       <div style="margin:20px">
    <button onclick="addArticle(${articleIndex})" style="width: 100%; height: auto; padding: 10px 20px;" class="login" id="checkout-button">Ajouter au panier</button>
    </div>
         

        </div>
        <div style="height:300px; width:100%">
            <fieldset class="fieldset-item">
                <legend>Description</legend>

                <div class="item">
               <p>${productInfo.descriptionLong}</p>
               </div>
         
            </fieldset>
        </div>
            `;

    productContainer.appendChild(product);

}


function renderListArticle() {
    const productList = document.querySelector("#products #product-list");
    if (!productList) return;
    // Clear the list
    productList.innerHTML = "";


    articles.forEach((item, index) => {
        const product = document.createElement("div");
        product.className = "product";
        product.innerHTML = `  <div onclick="addQueryParams(${index})" class="product-container">
                    <img src="${item.photo}" loading="lazy" alt="${item.name}" >
                    <h3>${item.name}</h3>
                    <p>${"$" + item.price}</p>
                </div>
                    <button onclick="addArticle(${index})">Ajouter au panier</button> 
          `;

        productList.appendChild(product);
    });
}

function renderMiniListArticle() {
    const productList = document.querySelector("#mini-products #product-list");
    if (!productList) return;
    // Clear the list
    productList.innerHTML = "";


    minList.forEach((item, index) => {
        const product = document.createElement("div");
        product.className = "mini-product";

        product.innerHTML = `<div onclick="addQueryParams(${index+8})" class="product-container">
                    <img src="${item.photo}" loading="lazy" alt="${item.name}" > 
                </div>
                    <button onclick="addArticle(${index+7})">Ajouter au panier</button> 
          `;

        productList.appendChild(product);
    });
}





// Function to render cart items in the table
function renderCart() {
    const cartTableBody = document.querySelector("#cart-table tbody");
    const cartTotalElement = document.getElementById("cart-total");
    if (!cartTableBody) return;
    // Clear the table
    cartTableBody.innerHTML = "";

    let totalPrice = 0;

    cartItems.forEach((item, index) => {
        const itemTotal = (item.price * (index + 1)) * item.quantity;
        totalPrice += itemTotal;

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.name + " " + index}</td>
            <td style="text-align: right; font-weight: 600; "><input type="number" value="${item.quantity}" min="1" class="cart-quantity" data-index="${index}" style="text-align: right;padding:2px 10px;"></td>
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

// Function to add  article
function addArticle(indexArticle) {
    alert(`Article ${articles[indexArticle]?.name} ajouté au panier avec succès`);
}

// Event listener for removing items
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-item")) {
        const index = event.target.getAttribute("data-index");
        removeItem(index);
    }
});

// Event listener for updating quantities
document.addEventListener("input", function (event) {
    if (event.target.classList.contains("cart-quantity")) {
        const index = event.target.getAttribute("data-index");
        const newQuantity = parseInt(event.target.value);
        updateQuantity(index, newQuantity);
    }
});
function addQueryParams(inedx) {
    const params = new URLSearchParams();
    params.append('articleIndex', inedx);
    window.location.href = `../article/inedx.html?${params.toString()}`;
}

renderCart();
renderListArticle();
renderPageArticle();
renderMiniListArticle();