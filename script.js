document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const closeButton = document.getElementById('closeButton');
  const menuOverlay = document.getElementById('menuOverlay');

  // Ouverture du menu via le bouton hamburger
  hamburger.addEventListener('click', function() {
      menuOverlay.style.display = 'flex'; // Affiche le menu
      hamburger.classList.toggle('is-active');
  });

  // Fermeture du menu via le bouton "X"
  closeButton.addEventListener('click', function() {
      menuOverlay.style.display = 'none'; // Cache le menu
      hamburger.classList.remove('is-active');
  });
});