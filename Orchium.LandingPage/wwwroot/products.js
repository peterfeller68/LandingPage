// Update these entries as your products launch. Each product gets its own subdomain.
const products = [
  {
    number: "01",
    name: "JobShark",
    category: "A focused tool",
    description: "A short introduction to your first product. Tell visitors what it helps them do and why it matters.",
    url: "https://jobshark.orchium.io",
    theme: "red",
    symbol: "✳"
},
{
    number: "02",
    name: "PoolShark",
    category: "A new perspective",
    description: "A short introduction to your next product. Replace this copy with a clear, useful description.",
    url: "https://poolshark.orchium.io",
    theme: "blue",
    symbol: "◌"
},
{
    number: "03",
    name: "LandShark",
    category: "A new perspective",
    description: "A short introduction to your next product. Replace this copy with a clear, useful description.",
    url: "https://landshark.orchium.io",
    theme: "green",
    symbol: "&"
}
];

const grid = document.querySelector("#product-grid");

for (const product of products) {
  const card = document.createElement("article");
  card.className = `product-card ${product.theme}`;
  card.innerHTML = `
    <div class="product-card-top"><span class="product-number">${product.number}</span><span class="product-category">${product.category}</span></div>
    <div class="product-symbol" aria-hidden="true">${product.symbol}</div>
    <div class="product-card-copy"><h3>${product.name}</h3><p>${product.description}</p></div>
    <a class="product-link" href="${product.url}" target="_blank" rel="noopener noreferrer" aria-label="Launch ${product.name} in a new tab"><span>Launch product</span><span class="link-arrow" aria-hidden="true">↗</span></a>
  `;
  grid.append(card);
}

document.querySelector("#year").textContent = new Date().getFullYear();
