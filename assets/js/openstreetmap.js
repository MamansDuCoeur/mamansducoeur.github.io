function openInfo(nom_hotel, adresse, numero){
    let html =  "<strong>"+nom_hotel+"</strong>";
    html = html + "<p>"+adresse+"</p>";
    html = html + "<p>"+numero+"</p>"
    return html;
}

// ON récupère l'élément dans lequel on souhaite intégrer notre map
let container = document.querySelector("#openstreetmap");

//On va lister les coordonnées des marqueurs qu'on souhatie afficher

let hotel_1 = L.latLng('48.771150', '2.010620');
let hotel_2 = L.latLng('48.76997', '2.002694');
let hotel_3 = L.latLng('48.762391', '1.974586');

// On créé la map que l'on stock dans une variable
var map = L.map(container);

// On initialise le contenu
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var target = L.latLng('48.776731', '2.001844');

//On ajoute les marque des hotels paretenaire

var marker_h1 = L.marker(hotel_1);
var marker_h2 =L.marker(hotel_2);
var marker_h3 =L.marker(hotel_3);

marker_h3.bindPopup(openInfo("Hôtel Première Classe Saint Quentin En Yvelines", 
"65BIS Av. Georges Politzer, 78190 Trappes",
"+33 892 70 70 96")).openPopup();
marker_h2.bindPopup(openInfo("ENZO HOTELS TRAPPES By KYRIAD DIRECT", 
"Rue Eugène Hénaff, 78190 Trappes",
"+33 1 30 50 82 42")).openPopup();
marker_h1.bindPopup(openInfo("Hotel F1 Trappes", 
"Rue Gaston Monmousseau, 78195 Trappes",
"+33 891 70 54 18")).openPopup();

marker_h1.addTo(map);
marker_h2.addTo(map);
marker_h3.addTo(map);



map.setView(target, 12);






