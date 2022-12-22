let nextImage = 2; // La prochaine image qu'on affiche sera l'image 2. Puis on changera la valeur au fur et à mesure du temps.

function changeBackgroundImage() {
    let home = document.getElementById('home'); // On selectionne l'élément de la home page
    
    home.style.backgroundImage = `
        linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),
        url("assets/images/groupes/groupe${nextImage}.jpg")
    `; // On change la background imageavec la nouvelle valeur


    // Selectionner le point qui a le cercle REMPLI pour le transformer en cercle VIDE
    let cerclePlein = document.querySelector(".fa-solid.fa-circle");
    cerclePlein.classList.remove("fa-solid");
    cerclePlein.classList.add("fa-regular");

    // Selectionner le point qui correspond à la nouvelle image, et le transformer en cercle PLEIN
    let cercleContainer = document.querySelector(".slider-buttons");
    let prochainCercle = cercleContainer.children[nextImage - 1];
    prochainCercle.classList.remove("fa-regular");
    prochainCercle.classList.add("fa-solid");

    // Puis on prepare le prochain appel à la fonction
    nextImage = nextImage + 1; // On met à jour la next image pour le prochain appel

    if (nextImage === 7) { // En revanche, si la nextImage vaut 7 (ce qui ne doit pas être le cas car on n'a que 6 image)...
        nextImage = 1; // ...alors on réaffichera l'image 1
    }
}

setInterval(changeBackgroundImage, 10 * 1000); // Toutes les 10 secondes, on change l'image de fond (1000 milliseconds = 10 secondes).

// ===== RENDRE LES CERCLES DU SLIDDERS CLIQUABLE ====

// On va selectionner TOUS les boutons !!
const buttons = document.querySelectorAll(".slider-buttons i");

// Pour chacun des boutons, je vais écouter les click !!
buttons.forEach((button, index) => {
    // Le premier bouton a l'index 0
    // le deuxieme bouton a l'index 1
    // etc....

    button.addEventListener("click", () => { // On écoute le click sur le bouton ! 
        nextImage = index + 1; // On met à jour la prochaine image...
        changeBackgroundImage(); // ...que l'on affiche immédiatement
    });
});