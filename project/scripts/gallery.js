// Array of Diving Gallery Items
const dives = [
  {
    title: "Belmonte Shipwreck",
    type: "wreck",
    location: "South of Barra Lighthouse",
    imageUrl: "images/belmonte.webp",
    alt: "Belmonte Shipwreck",
    credit: "Photo by naufragiosdobrasil.com.br"
  },
  {
    title: "School of swallowtail fish",
    type: "scuba",
    location: "Bahia Coastline",
    imageUrl: "images/swallowtail-fish.webp", 
    alt: "School of swallowtail fisha",
    credit: "Photo by Amanda Ercília / sharkdive.com.br"
  },
  {
    title: "Boat with tourists next to a whale.",
    type: "whale",
    location: "Abrolhos Archipelagos",
    imageUrl: "images/humpback.webp",
    alt: "Boat with tourists next to a whale.",
    credit: "Photo by aloalobahia.com"
  },
  {
    title: "Black Adder Shipwreck",
    type: "wreck",
    location: "Black Adder Wreck",
    imageUrl: "images/blackadder.webp",
    alt: "Black Adder Wreck",
    credit: "Photo by sharkdive.com.br"
  },
  {
    title: "Marine Life Discovery",
    type: "coral",
    location: "Frades's Island",
    imageUrl: "images/fish-bat.webp",
    alt: "Marine Life Discovery",
    credit: "Photo by Amanda Ercília / Sharkdive"
  },
  {
    title: "Scuba Diving Adventure",
    type: "scuba",
    location: "Todos os Santos Bay",
    imageUrl: "images/diver-cave.webp",
    alt: "Scuba Diving Adventure",
    credit: "Photo civitatis.com"
  },
  {
    title: "Whale watching at Fort Beach",
    type: "whale",
    location: "Praia do Forte - Mata de São João",
    imageUrl: "images/fort-beach.webp",
    alt: "Whale watching at Fort Beach.",
    credit: "Photo by epicentrodoconhecimento.com.br"
  },
  {
    title: "Shallow Waters Tour",
    type: "scuba",
    location: "Barra Beach",
    imageUrl: "images/plant-stone.jpg",
    alt: "Shallow Waters Tour",
    credit: "Photo by Roberto Costa Pinto / Sharkdive"
  },
  {
    title: "Coral Garden Expedition",
    type: "coral",
    location: "Abrolhos Marine Park",
    imageUrl: "images/discovery.webp",
    alt: "Coral Garden Expedition",
    credit: "Photo by tripadvisor.com"
  },
  {
    title: "Humpback at the Rio Vermelho beach - Salvador",
    type: "whale",
    location: "Rio Vermelho beach - Salvador",
    imageUrl: "images/whale-jump.webp",
    alt: "Humpback at the Rio Vermelho beach - Salvador",
    credit: "Photo by aloalobahia.com.br"
  },
  {
    title: "Galeão Sacramento Wreck",
    type: "wreck",
    location: "Salvador - Todos os Santos Bay",
    imageUrl: "images/galeao-sacramento.webp",
    alt: "Galeão Sacramento Wreck",
    credit: "Photo by vemprabahia.com.br"
  },
  {
    title: "Discovery Diving for Beginners",
    type: "coral",
    location: "Salvador Reefs",
    imageUrl: "images/discovery-diving.webp",
    alt: "Discovery Diving for Beginners",
    credit: "Photo by mundialscuba.com.br"
  },
  {
    title: "Underwater Biodiversity",
    type: "coral",
    location: "Todos os Santos Bay",
    imageUrl: "images/coral-red.webp",
    alt: "Underwater Biodiversity",
    credit: "Photo by Roberto Costa Pinto / Sharkdive"
  },
  {
    title: "Whale Watching Safari",
    type: "whale",
    location: "Humpback at the Barra Lightouse",
    imageUrl: "images/farol-da-barra.webp",
    alt: "Humpback at the Barra Lightouse",
    credit: "Photo by correio24horas.com.br"
  },
  {
    title: "Coastal Coral Exploration",
    type: "coral",
    location: "Ponta de Nossa Senhora Island",
    imageUrl: "images/coral-turtle.webp",
    alt: "Coastal Coral Exploration",
    credit: "Photo by www.facebook.com/sharkdive"
  },
  {
    title: "Maraldi Shipwreck",
    type: "wreck",
    location: "Todos os Santos Bay",
    imageUrl: "images/maraldi.webp",
    alt: "Maraldi Shipwreck",
    credit: "Photo by Rodrigo Maia Nogueira / brasilmergulho.com"
  },
  
  {
    title: "PADI Certified Dive",
    type: "scuba",
    location: "Salvador Coast",
    imageUrl: "images/scuba-ba.webp",
    alt: "PADI Certified Dive",
    credit: "Photo by www.tripadvisor.co/uk"
  },
  {
    title: "Boat near whale at Caravelas island",
    type: "whale",
    location: "Caravelas Island",
    imageUrl: "images/caravelas.webp",
    alt: "Boat near whale at Caravelas island",
    credit: "Photo by aloalobahia.com"
  },
];

// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {
  
function displayGallery(items) {
  const grid = document.querySelector(".dive-grid");
  grid.innerHTML = ""; 

  items.forEach((item, index) => {
    const card = document.createElement("figure");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = item.imageUrl;
    img.alt = item.alt || "Gallery image";
    img.loading = index === 0 ? "eager" : "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <p><span class="label">Location:</span> ${item.location}</p>
      <p class="credit">${item.credit}</p>
    `;

    card.appendChild(img);
    card.appendChild(caption);
    grid.appendChild(card);
  });
}

  // Initial load
  displayGallery(dives);

  // Filter Listeners
  document.getElementById("filter-all").addEventListener("click", () => {
    displayGallery(dives);
  });

  document.getElementById("filter-scuba").addEventListener("click", () => {
    displayGallery(dives.filter(item => item.type === "scuba"));
  });

  document.getElementById("filter-wreck").addEventListener("click", () => {
    displayGallery(dives.filter(item => item.type === "wreck"));
  });

  document.getElementById("filter-coral").addEventListener("click", () => {
    displayGallery(dives.filter(item => item.type === "coral"));
  });

  document.getElementById("filter-whale").addEventListener("click", () => {
    displayGallery(dives.filter(item => item.type === "whale"));
  });
});