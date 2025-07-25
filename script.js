const products = [
  {
    title: "Echo Dot (5th Gen)",
    description: "Smart speaker with Alexa – perfect for your home",
    category: "tech",
    image: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_UL320_.jpg",
    link: "https://www.amazon.in/dp/B09B8V1BD8?tag=youraffid"
  },
  {
    title: "Home Organizer Rack",
    description: "Stylish and space-saving rack for kitchen or bathroom",
    category: "home",
    image: "https://m.media-amazon.com/images/I/81VrJ5oBggL._AC_UL320_.jpg",
    link: "https://www.amazon.in/dp/B09V92GR67?tag=youraffid"
  },
  {
    title: "Men's Analog Watch",
    description: "Elegant wristwatch for formal and casual wear",
    category: "fashion",
    image: "https://m.media-amazon.com/images/I/61j6eN3Y3NL._AC_UL320_.jpg",
    link: "https://www.amazon.in/dp/B07W6XVPV2?tag=youraffid"
  }
];

function displayProducts(items) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <a href="${product.link}" target="_blank">View on Amazon</a>
    `;
    grid.appendChild(card);
  });
}

function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

document.getElementById("searchInput").addEventListener("input", function () {
  const term = this.value.toLowerCase();
  const filtered = products.filter(p => p.title.toLowerCase().includes(term));
  displayProducts(filtered);
});

window.onload = () => {
  displayProducts(products);
};
