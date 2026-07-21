// Current Year and Date
const spanYear = document.getElementById("currentYear")
const today = new Date()
const currentYear = today.getFullYear()

spanYear.innerHTML = currentYear

const lastModified = document.getElementById("lastModified")

lastModified.innerHTML = `Last Modification: ${document.lastModified}`
 
// Hamburger Menu and Navigation
const hambutton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#navbar')


hambutton.addEventListener('click', () => {
	hambutton.classList.toggle('show');
  navLinks.classList.toggle('show');
});


// Cards
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rio de Janeiro Brazil",
    location: "Rio de JAneiro, Brazil",
    dedicated: "2022, May, 8",
    area: 29966,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/001db7326e638032470a02813c9e47191ef74b0e/full/640%2C/0/default"
  },
  {
    templeName: "Kirtland",
    location: "Kirtland, Ohio, United States",
    dedicated: "1836, March, 27",
    area: 15000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-1275-main.jpg"
  },  
  {
    templeName: "Sapporo Japan",
    location: "Sapporo, Japan",
    dedicated: "2016, August, 21",
    area: 48480,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-3374-main.jpg"
  },
  {
    templeName: "Logan Utah",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 19",
    area: 119619,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg"
  },
  {
    templeName: "Cobán Guatemala",
    location: "Cobán, Guatemala",
    dedicated: "2024, June, 9",
    area: 8772,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/coban-guatemala-temple/coban-guatemala-temple-46348-main.jpg"
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah, United States",
    dedicated: "21887, April, 8",
    area: 143969,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg"
  },
  
];

  createTempleCard(temples);

  const homeLink = document.querySelector(".nav-home");
  const oldLink = document.querySelector(".nav-old"); 
  const newLink = document.querySelector(".nav-new");
  const largeLink = document.querySelector(".nav-large");
  const smallLink = document.querySelector(".nav-small");

  homeLink.addEventListener("click", () => {
    createTempleCard(temples);
    document.querySelector(".title-filter").innerHTML = "Home";
  });

  oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0]);
      return year < 1900;
    }));  
    document.querySelector(".title-filter").innerHTML = "Old";
  });

  newLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0]);
      return year >= 2000;
    }));  
    document.querySelector(".title-filter").innerHTML = "New";
  });

  largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > "90000"));
    document.querySelector(".title-filter").innerHTML = "Large";
  });

  smallLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < "10000"));
    document.querySelector(".title-filter").innerHTML = "Small";
  });

  function createTempleCard(filteredTemples) {
    document.querySelector(".temple-grid").innerHTML = "";

    filteredTemples.forEach(temple => {
      let card = document.createElement("section");
      card.classList.add("card");

      let name = document.createElement("h3");
      let location = document.createElement("p");
      let dedication = document.createElement("p");
      let area = document.createElement("p");
      let img = document.createElement("img");

      name.textContent = temple.templeName;
      location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
      dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
      area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", `${temple.templeName} Temple`);
      img.setAttribute("loading", "lazy");
      
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      
		document.querySelector(".temple-grid").appendChild(card);

	});
  }
