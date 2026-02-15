/*****************BRGER MENI*********************/
document.getElementById("burger").onclick = function(){
    let menu = document.getElementById("burger_menu")
    menu.classList.toggle("show");
}



/*****************ORDER*********************/
window.addEventListener("load", function() {
    const collectionTitle = document.getElementById("titleHer");
    if (collectionTitle) {
        collectionTitle.classList.add("show");
    }
});

window.addEventListener("scroll", function() {
    let titleHim = document.getElementById("titleHim");
    if(!titleHim) return;
    let position = titleHim.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.2;

    if(position < screenPosition){
        titleHim.classList.add("show");
    }
});

const parfumesF = [
    {
        text: "Chanel No 5",
        price: "$120",
        image: "parfemi/F/chanelF.avif"
    },
    {
        text: "Miss Dior",
        price: "$180",
        image: "parfemi/F/diorF.webp"
    },
    {
        text: "Good Girl by Carolina Herrera",
        price: "$150",
        image: "parfemi/F/goodgirlF.jpg"
    },
    {
        text: "Prada Paradox",
        price: "$120",
        image: "parfemi/F/pradaF.webp"
    },
    {
        text: "Valentino",
        price: "$175",
        image: "parfemi/F/valentinoF.webp"
    },
    {
        text: "Libre YSL",
        price: "$155",
        image: "parfemi/F/yslF.jpg"
    },
    {
        text: "Dolce and Gabbana",
        price: "$190",
        image: "parfemi/F/db.jpg"
    },
    {
        text: "Versace",
        price: "$210",
        image: "parfemi/F/versace.avif"
    },
    {
        text: "Victoria Secret Bombshell ",
        price: "$195",
        image: "parfemi/F/vs.avif"
    },
    {
        text: "Golden Essence",
        price: "$90",
        image: "parfemi/F/2.png"
    },
    {
        text: "Midnight Bloom",
        price: "$110",
        image: "parfemi/F/1.png"
    },
    {
        text: "Skalneli Pale",
        price: "$95",
        image: "parfemi/F/3.png"
    }
]
const parfumesM = [
    {
        text: "Chanel No 5",
        price: "$120",
        image: "parfemi/M/chanelM.webp"
    },
    {
        text: "Savage Dior",
        price: "$180",
        image: "parfemi/M/diorM.webp"
    },
    {
        text: "Le Male by Jean Paul Gaultier",
        price: "$150",
        image: "parfemi/M/jpM.jpg"
    },
    {
        text: "Le Male Elixir by Jean Paul Gaultier",
        price: "$120",
        image: "parfemi/M/la-male-elixirM.jpg"
    },
    {
        text: "Valentino",
        price: "$175",
        image: "parfemi/M/valentinoM.avif"
    },
    {
        text: "Prada",
        price: "$155",
        image: "parfemi/M/pradaM.jpg"
    },
    {
        text: "Dolce and Gabbana",
        price: "$390",
        image: "parfemi/M/db.webp"
    },
    {
        text: "Moschino",
        price: "$110",
        image: "parfemi/M/moschino.jpg"
    },
    {
        text: "Versace",
        price: "$95",
        image: "parfemi/M/versace.jpg"
    }, 
    {
        text: "Mystery Dark Oud",
        price: "$90",
        image: "parfemi/M/5.png"
    },
    {
        text: "Royal Musk",
        price: "$110",
        image: "parfemi/M/6.png"
    },
    {
        text: "Skalneli Pale",
        price: "$95",
        image: "parfemi/M/4.png"
    },  
]
function renderPerfumes(data, containerId) {
    const container = document.getElementById(containerId);
    if(!container) return;

    data.forEach(perfume => {
        const card = document.createElement("div");
        card.classList.add("product");

        card.innerHTML = `
            <img src="${perfume.image}" alt="${perfume.text}">
            <p>${perfume.text}</p>
            <p>${perfume.price}</p>
            <button class="add">Add to Cart</button>
        `;
        container.appendChild(card);

        const button = card.querySelector(".add");
        button.addEventListener("click", function(){
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            const existing = cart.find(p => p.text === perfume.text);
            if(existing){
                existing.quantity += 1;
            } else {
                cart.push({...perfume, quantity: 1});
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${perfume.text} added to cart`);
        });
    });
}
window.onload = function() {
    renderPerfumes(parfumesF, "forHer");
    renderPerfumes(parfumesM, "forHim");
};

/*****************CHECKOUT*********************/
const openBtn = document.getElementById("showProducts");
const popup = document.getElementById("productPopup");
const closeBtn = document.getElementById("closePopup");
const productList = document.getElementById("productList");
const totalPrice = document.getElementById("totalPrice");

// Create Clear Cart button
const clearCartBtn = document.createElement("button");
clearCartBtn.textContent = "Clear Cart";
clearCartBtn.id = "clearCart";
clearCartBtn.style.marginTop = "10px";
if(productList) productList.parentElement.appendChild(clearCartBtn);

let total = 0;

function updatePopup(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    productList.innerHTML = "";
    total=0;

    if(cart.length === 0){
        productList.innerHTML = "<p>Nothing selected.</p>";
        totalPrice.textContent = "";
        return;
    }

    cart.forEach((product, index) => {
        const priceNum = parseFloat(product.price.replace("$",""));
        total += priceNum * product.quantity;

        const div = document.createElement("div");
        div.classList.add("product-item");
        div.innerHTML = `
            <img src="${product.image}" alt="${product.text}">
            <div class="product-info">${product.text} x ${product.quantity}</div>
            <div class="product-price">$${priceNum * product.quantity}</div>
            <i class="fa-solid fa-delete-left" id="remove-item"></i>
        `;
        productList.appendChild(div);

        // Remove button logic
        const removeBtn = div.querySelector("#remove-item");
        removeBtn.addEventListener("click", () => {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            const item = cart.find(p => p.text === product.text);
            if(item.quantity > 1){
                item.quantity -= 1;
            } else {
                cart = cart.filter(p => p.text !== product.text);
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            updatePopup();
        });
    });

    totalPrice.textContent = "Total: $" + total;
}

// Open popup
if(openBtn){
    openBtn.addEventListener("click", (e) => {
        e.preventDefault();
        updatePopup();
        popup.classList.remove("hidden");
    });
}

// Close popup
if(closeBtn){
    closeBtn.addEventListener("click", () => popup.classList.add("hidden"));
}

// Clear cart
clearCartBtn.addEventListener("click", () => {
    localStorage.removeItem("cart");
    updatePopup();
});

const payButton = document.getElementById("payp");
if (payButton) {
    payButton.addEventListener("click", function(e){
        e.preventDefault();

        const priceee = document.getElementById("price");
        const shipping = document.getElementById("shipping");

        if(priceee && shipping){
            priceee.textContent = "Price: $" + total;
            shipping.textContent = "Shipping in 3 to 4 business days";

            priceee.classList.remove("hidden");
            shipping.classList.remove("hidden");
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const okBtn = document.getElementById("ok");
    if (okBtn) {
        okBtn.addEventListener("click", function (e) {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const lname = document.getElementById("lastname").value;
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;
            if (!name || !lname || !date || !time) {
                alert("Please fill in all required fields!");
                return;
            }
            alert(`Your appointment was set on ${date} at ${time}. We will be happy to welcome you, ${name} ${lname}`);
        });
    }
});


/******************FRAGRANCE*********************/
document.addEventListener("DOMContentLoaded", function() {
    const collectionTitle = document.getElementById("col");
    if (collectionTitle) {
        collectionTitle.classList.add("show");
    }
});



