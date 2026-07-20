const spanYear = document.getElementById("currentYear")

const today = new Date()
const currentYear = today.getFullYear()

spanYear.innerHTML = currentYear

const lastModified = document.getElementById("lastModified")

lastModified.innerHTML = `Last Modification: ${document.lastModified}`