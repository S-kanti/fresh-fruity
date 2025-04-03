document.addEventListener("DOMContentLoaded", function() {
    const products = [
      {
        id:"1",
        image: "/MANGO.png",
        name: "Mangon Juice",
        description: "Description of Product 1",
        price: "$19.99"
      },
      {
        id:"2",
        image: "/b.jpeg",
        name: "Banana Juice",
        description: "Description of Product 2",
        price: "$24.99"
      },
      {
        id:"3",
        image: "/c.jpeg",
        name: "Apple Juice",
        description: "Description of Product 3",
        price: "$29.99"
      },
      {
        id:"4",
        image: "/a.jpeg",
        name: "Pineapple Juice",
        description: "Description of Product 4",
        price: "$39.99"
      },
      {
        id:"5",
        image: "product4.jpg",
        name: "Orange Juice",
        description: "Description of Product 4",
        price: "$39.99"
      },
      {
        id:"6",
        image: "product4.jpg",
        name: "Orange Juice",
        description: "Description of Product 4",
        price: "$39.99"
      },
      {
        id:"7",
        image: "product4.jpg",
        name: "Orange Juice",
        description: "Description of Product 4",
        price: "$39.99"
      },
      {
        id:"8",
        image: "product4.jpg",
        name: "Orange Juice",
        description: "Description of Product 4",
        price: "$39.99"
      },
      {
        id:"9",
        image: "product4.jpg",
        name: "Orange Juice",
        description: "Description of Product 4",
        price: "$39.99"
      },
      {
        id:"10",
        image: "product4.jpg",
        name: "Orange Juice",
        description: "Description of Product 4",
        price: "$39.99"
      }
    ];
  
    const container = document.getElementById("productContainer");
  
    products.forEach(product => {
      const productItem = document.createElement("div");
      productItem.classList.add("product");
  
      productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>${product.description}</p>
        <p class="price">${product.price}</p>
      `;
  
      container.appendChild(productItem);
    });
  });
  
