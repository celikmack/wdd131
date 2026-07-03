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

