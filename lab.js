const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const langToggle = document.getElementById('lang-toggle');
const yearElement = document.getElementById('year');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open');
  });
}

const elementsToTranslate = document.querySelectorAll('[data-en][data-fr]');
let currentLanguage = 'en';

function setLanguage(language) {
  currentLanguage = language;
  elementsToTranslate.forEach((element) => {
    const text = language === 'fr' ? element.dataset.fr : element.dataset.en;
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.value = text;
    } else {
      element.textContent = text;
    }
  });

  if (langToggle) {
    langToggle.textContent = language === 'fr' ? 'EN' : 'FR';
    langToggle.setAttribute('aria-label', language === 'fr' ? 'Switch to English' : 'Passer en français');
  }

  document.documentElement.lang = language === 'fr' ? 'fr' : 'en';
}

if (langToggle) {
  langToggle.addEventListener('click', () => {
    setLanguage(currentLanguage === 'en' ? 'fr' : 'en');
  });
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

setLanguage('fr');
