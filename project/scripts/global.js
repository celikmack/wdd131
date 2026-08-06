function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en', 
    includedLanguages: 'pt,en',
    autoDisplay: false
  }, 'google_translate_element');
}

// Load the Google Translate script automatically
const translateScript = document.createElement('script');
translateScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
document.body.appendChild(translateScript);

// Function to trigger translation via your custom buttons
function switchLanguage(lang) {
  const selectField = document.querySelector('.goog-te-combo');
  if (selectField) {
    selectField.value = lang;
    selectField.dispatchEvent(new Event('change'));
  }
}

// Hamburger Menu and Navigation
const hambutton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#navbar');

if (hambutton && navLinks) {
  hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('show');
    navLinks.classList.toggle('show');
  });
}