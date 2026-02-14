/*****************BRGER MENI*********************/
document.getElementById("burger").onclick = function(){
    let menu = document.getElementById("burger_menu")
    menu.classList.toggle("show");
}



/*****************ORDER*********************/

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
    },  
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
        text: "Mystery Dark Oud",
        price: "$90",
        image: "parfemi/F/5.png"
    },
    {
        text: "Royal Musk",
        price: "$110",
        image: "parfemi/F/6.png"
    },
    {
        text: "Skalneli Pale",
        price: "$95",
        image: "parfemi/F/4.png"
    },  
]
function renderPerfumes(data, containerId) {
    const container = document.getElementById(containerId);

    data.forEach(perfume => {
        const card = document.createElement("div");
        card.classList.add("product");

        card.innerHTML = `
            <img src="${perfume.image}" alt="${perfume.text}">
            <p>${perfume.text}</p>
            <p>${perfume.price}</p>
            <button>Add to Cart</button>
        `;

        container.appendChild(card);
    });
}
window.onload = function() {
    renderPerfumes(parfumesF, "forHer");
    renderPerfumes(parfumesM, "forHim");
};
