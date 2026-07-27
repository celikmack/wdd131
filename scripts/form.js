const spanYear = document.getElementById("currentYear")

const today = new Date()
const currentYear = today.getFullYear()

spanYear.innerHTML = currentYear

const lastModified = document.getElementById("lastModified")

lastModified.innerHTML = `Last Modification: ${document.lastModified}`

// Populate options

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function populateProduct() {
  const select = document.querySelector("#product");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector("#product");
  const message = document.querySelector("#counterMessage");
  

  if (select) {
    populateProduct();
  }
  
  if (message) {
  const reviewCounter = "review-count";
  let count = Number(localStorage.getItem(reviewCounter)) || 0;
  count += 1;
  localStorage.setItem(reviewCounter, count);

  let showUser = "You have submitted: " + count + " review"; 
    if (count !== 1) {
      showUser += "s";
    }
    showUser += "!";
    message.textContent = showUser;
    }
});
