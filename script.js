document.addEventListener('DOMContentLoaded', function() {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = today.toLocaleDateString('ro-RO', options);
  
  const todayDateEl = document.getElementById('todayDate');
  const todayDateSmallEl = document.getElementById('todayDateSmall');
  
  if (todayDateEl) todayDateEl.textContent = dateString;
  if (todayDateSmallEl) todayDateSmallEl.textContent = dateString;

  const sidePanel = document.getElementById('sidePanel');
  const overlay = document.getElementById('pageOverlay');
  const openNav = document.getElementById('openNav');
  const closeNav = document.getElementById('closeNav');

  if (!sidePanel || !overlay || !openNav || !closeNav) {
    console.error('Elemente necesare nu au fost găsite!');
    return;
  }

  openNav.addEventListener('click', function() {
    sidePanel.classList.add('open');
    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden', 'false');
  });

  closeNav.addEventListener('click', closePanel);
  overlay.addEventListener('click', closePanel);

  // Închide panelul când dai click pe un link din meniu
  const navLinks = sidePanel.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', closePanel);
  });

  function closePanel() {
    sidePanel.classList.remove('open');
    overlay.classList.remove('show');
    overlay.setAttribute('aria-hidden', 'true');
  }
});