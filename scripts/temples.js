// Current Year and Date
const spanYear = document.getElementById("currentYear")
const today = new Date()
const currentYear = today.getFullYear()

spanYear.innerHTML = currentYear

const lastModified = document.getElementById("lastModified")

lastModified.innerHTML = `Last Modification: ${document.lastModified}`
 
// Hamburger Menu
const mainnav = document.querySelector('.navbar')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

