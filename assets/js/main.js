// menu toggle for mobile Response
let menuIcon = document.querySelector('.menu-icon');
let cancelIcon = document.querySelector('.cancel-icon');
let headerLinks = document.querySelector('.header-links');

menuIcon.addEventListener('click', function () {
  headerLinks.style.display = 'block';
  headerLinks.style.right = '0';
});

cancelIcon.addEventListener('click', function () {

  headerLinks.style.right = '-100vh';
  headerLinks.style.display = 'none';
});

// theme color change script
let themeInput = document.getElementById('theme');
const root = document.documentElement; // Get the root element (<html>)
const primaryThemeColor = getComputedStyle(root).getPropertyValue('--primary-theme-color');
themeInput.value = primaryThemeColor;

themeInput.addEventListener('change', function () {
  // Get the value of the input element when it changes
  const color = themeInput.value;
  document.documentElement.style.setProperty('--primary-theme-color', color);
});
// ... (le code existant)

// Récupérer les éléments des cartes et des flèches
console.log("c'est bon");
const serviceCards = document.querySelectorAll('.service-card');

// Ajouter un gestionnaire de clics à chaque flèche
serviceCards.forEach((card, index) => {
    const arrow = card.querySelector('.expand-arrow');
    arrow.addEventListener('click', () => {
        toggleCardExpansion(index);
    });
});

// Fonction pour agrandir ou désagrandir la carte
function toggleCardExpansion(cardIndex) {
    const card = serviceCards[cardIndex];

    // Vérifier si la carte est déjà agrandie
    const isExpanded = card.classList.contains('expanded');

    // Si la carte est agrandie, la réduire, sinon l'agrandir
    if (isExpanded) {
        card.classList.remove('expanded');
    } else {
        card.classList.add('expanded');
    }

    // Modifier la flèche pour indiquer l'état actuel (agrandi ou non)
    const arrow = card.querySelector('.expand-arrow');
    arrow.innerHTML = isExpanded ? '▼' : '▲';
}