
// On indique qu'il existe une fonction qui aura un comportement (ce qui est écirt entre les accolade) qui pourra être éxécuté lorsqu'on l'appelera
function toggleSubMenu(){

    // on récupère l'élément qui a l'id submenu dans le document HTML
    let subMenuElem = document.querySelector("#submenu");

    // On demande à l'élément de "toggle" sur la classe hide
    // c'est a dire que si elle est présente on supprime
    // si elle absente on l'ajoute
    // classList permet de connaitre les class présente dans un élément du cdocument
    subMenuElem.classList.toggle("hide");
}

function toggleArrow(){

    // on récupère l'élément qui a l'id submenu dans le document HTML
    let arrow = document.querySelector("#dropdown-arrow");

    // On demande à l'élément de "toggle" sur la classe hide
    // c'est a dire que si elle est présente on supprime
    // si elle absente on l'ajoute
    // classList permet de connaitre les class présente dans un élément du cdocument
    arrow.classList.toggle("hide");
}



// On detecter l'evenenment qui dit l'utilisateur clique sur le bouton "presentation"
// Je récupère l'éléménet html qui correspond
let presentationElement = document.querySelector("#presentation");
let submenu = document.querySelector("#submenu");

presentationElement.addEventListener("mouseover", toggleSubMenu);
submenu.addEventListener("mouseout", toggleSubMenu);

presentationElement.addEventListener("mouseover", toggleArrow);
presentationElement.addEventListener("mouseout", toggleArrow)