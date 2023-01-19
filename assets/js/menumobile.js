// je prépare des fonctions : des blocs d'instructions que je pourrais executer plus tard
function displayMenu() {
  document.querySelector('nav').classList.add('on');
}

function hideMenu() {
  document.querySelector('nav').classList.remove('on');
}

// je prépare de quoi mémoriser le scroll précédent
let oldScroll = 0;

// je remet à plus tard l'execution d'une fonction : quand on défilera la fenetre du navigateur
window.addEventListener('scroll', function() {
  // si on défile vers le haut // cad si le nouveau scroll est inférieur au précedent
  if (window.scrollY < oldScroll) {
    // on affiche le menu
    displayMenu();
  }
  // sinon
  else {
    // on le cache
    hideMenu();
  }

  // je mémorise le nouveau scroll pour avoir la bonne valeur la prochaine fois
  oldScroll = window.scrollY;
});