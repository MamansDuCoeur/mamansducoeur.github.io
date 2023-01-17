// l'instruction console.log est particulièrement pratique pour vérifier dans les dev tools, partie "console", que mes scripts soient bien chargés 
console.log('burger.js chargé');

// Rappel, il existe des moyens beaucoup plus simple pour réaliser un burger, ici nous allons complexifier l'exercice pour découvrir de nouveaux concepts en JS

// On vient de voir qu'une variable peut contenir des données de type numérique mais aussi du texte.
// Pour préciser que nous voulons du texte, il nous suffit de placer des quotes autour de ce dernier.
// Si j'additionne deux nombre, j'aurais la sommes de ces derniers, si j'additionne deux textes, ces derniers seront gréffés l'un a l'autre

let uneVariable1 = "5";
let uneVariable2 = "6";
let uneVariable3 = uneVariable1 + uneVariable2;
//console.log(uneVariable3);

// Nous venons de découvrir deux types de variable, les integer (nombres entiers sans virgule) et les strings (chaine de caratère a longueur variable)
// Il en existe d'autres : booléen (0 ou 1, true ou false), float (nombres à virgules)

// Découverte d'un tableau indexé
let unTableau = ["texte1", "texte2", "texte3", 42];
// Syntaxe générale : 
let unDeuxiemeTableau = ["plusieurs", "elements", "séparés", "par", "des", "virgules", "qui", "peuvent", "etre", "de", "differents", "type", 42]

// Quand je fabrique un tableau normal, tous mes "tiroirs" sont numérotés en partant de 0 ! 
// Donc le premier tiroir, c'est le numéro 0, le deuxieme, c'est numéro 1, et ainsi de suite ! 

//console.log(unDeuxiemeTableau[5]);

// Découverte des tableaux associatifs
let tableauAssoc = {
    tiroir1: "contenu tiroir1",
    tiroir2: "contenu du tiroir2"
};
console.log(tableauAssoc.tiroir2);

// Découverte des tableaux multidimentionels 
let tableauMultidim = {
    tiroir1: "contenu tiroir 1",
    tiroir2: ["sous tiroir1", "sous tiroir2"]
}
//console.log(tableauMultidim.tiroir2[1]);

// Révisions des fonctions (petites usines)
function test(){
    console.log('je suis dans la fonction');
    alert('coucou');
    alert('comment ça va ?');
}
// Attention, fabriquer une fonction ne veut pas dire l'executer, pour pouvoir la lancer, il suffit de l'apeller par son nom : 
//test();

// Ici nous decouvrons le principe des "parametres", les parametres sont de petites portes sur mon usine qui me permettent de faire passer de la matière première a cette dernière.

function afficherMessage(prenom){
    alert('bonjour, je m\'apelle ' + prenom);
    alert('Comment allez vous ?');
}
// QUand j'execute ma fonction (mon usine) je lui donne de la matière première (ci dessous le texte "Susan"), on parlera d'arguments.
afficherMessage('Susan');

// Il est possible de faire plusieurs portes sur mon usine (de placer plusieurs parametres)
function runingGag(blague, nbrRepetition){
    // Je fabrique une boucle qui va tourner autant de fois que le nbrRepetition
    for(let i=0; i<= nbrRepetition; i++){
        alert(blague);
    }
}

// Quand j'execute ma fonction (mon usine) je lui donne deux arguments (car lors de la construction de l'usine on a fabriqué deux petites portes pour passer de la matière première (deux paramètres))
//runingGag("Tu veux quoi ??? Feur ! Coiffeur !!!", 10);

// Petit récap sur la boucle for : 
// J'utilise le mot clé "for", entre parenthèses je vais donner 3 informations (X;Y;Z) qui vont nous permettre de déterminer combien de fois la boucle va tourner
/*
for(X;Y;Z){

}
*/
// X : je déclare une variable en lui donnant une valeur de départ, exemple :
// let nbrDeTour = 0

// Y : Je vais faire une condition, tant que cette condition est VRAI, la boucle continue de tourner
// nbrDeTour < 5

// Z : Je précise une action a faire à chaque tour de boucle
// Cette action va nous éviter de nous retrouver dans une boucle infine
// Par exemple je peux ajouter 1 à ma variable nbrDeTour à chaque tour de boucle
// nbrDeTour = nbrDeTour+1

console.log('Je vais rentrer dans la boucle');
for(let nbrDeTour = 0; nbrDeTour < 5; nbrDeTour = nbrDeTour +1){
    console.log('Je suis dans la boucle, et la variable nbrDeTour est égale à ' + nbrDeTour);
}

console.log('Je vais rentrer dans la boucle Mikabuche');
for(let mikaBuche = 1; mikaBuche < 10; mikaBuche = mikaBuche+1){
    console.log('Je suis dans la boucle Mikabuche au tour numéro : ' + mikaBuche);
}

console.log('Je vais rentrer dans la boucle quizz1');
for(let quizz = 5; quizz >= -5; quizz = quizz-1){
    console.log('boucle quizz1');
}

console.log('Je vais rentrer dans la boucle quizz2');
console.log('Je vais rentrer dans la boucle quizz2');
for(let quizz2 = -3; quizz2 <=7; quizz2=quizz2+1){
    console.log('boucle quizz2');
}

// fonction (usine) qui va nous permettre d'additioner deux nombres et d'afficher le resultat
function addition(nbr1, nbr2){
    let resultat = nbr1 + nbr2;
    alert(resultat);
}
///addition(562, 428);


// Découverte des modules
let tableauAssoc2 = {
    nomDuTiroir: "contenu du premier tiroir dans mon module",
    presentation: function(){
        alert('Coucou je suis une fonction dans un tableau associatif ! ');
    }
};

// Pour apeller une fonction dans un tableau associatif, j'utiliserais la syntaxe suivante : 
tableauAssoc2.presentation();

