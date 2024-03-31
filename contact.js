async function get() {
  const response = await fetch("user.json");
  const data = await response.json();
  console.log(data);

  for (let i = 0; i < data.results.length; i++) {
      const user = data.results[i];
      const nameElement = document.createElement("p");
      nameElement.classList.add("name");
      nameElement.classList.add("text-lg");
      nameElement.classList.add("font-bold");
      nameElement.innerHTML = user.name.first + " " + user.name.last;

      const imageElement = document.createElement("img");
      imageElement.classList.add("image");
      imageElement.classList.add("w-12");
      imageElement.classList.add("h-12");
      imageElement.classList.add("rounded-full");
      imageElement.classList.add("mr-4");
      imageElement.src = user.picture.large;
      imageElement.alt = "Photo de profil";

      const statutElement = document.createElement("p");
      statutElement.classList.add("statut");
      statutElement.classList.add("text-lg");
      statutElement.classList.add("font-bold");
      statutElement.innerHTML = user.name.title;

      const overflowDiv = document.createElement("div");
      overflowDiv.classList.add("overflow-auto");
      overflowDiv.classList.add("flex");
      overflowDiv.classList.add("items-center");
      overflowDiv.appendChild(imageElement);
      overflowDiv.appendChild(nameElement);
      overflowDiv.appendChild(statutElement);

      const listItem = document.createElement("div");
      listItem.classList.add("list");
      listItem.appendChild(overflowDiv);

      document.querySelector(".container").appendChild(listItem);
  }
}

get();

// Fonction pour afficher ou masquer la barre de recherche
function toggleSearch() {
let searchWrapper = document.querySelector('.search-wrapper');
searchWrapper.classList.toggle('active');
}

// Écouteur d'événement pour masquer la barre de recherche lorsque l'utilisateur clique en dehors de celle-ci
document.addEventListener('click', function(event) {
let searchWrapper = document.querySelector('.search-wrapper');
if (!searchWrapper.contains(event.target)) {
  searchWrapper.classList.remove('active');
}
});

// Fonction de recherche pour filtrer les cartes en fonction du texte saisi dans la barre de recherche
function searchCards() {
let searchText = document.querySelector('.search-input').value.toLowerCase();
let cards = document.querySelectorAll('.list .overflow-auto');
cards.forEach(function(card) {
  let name = card.querySelector('.name').textContent.toLowerCase();
  if (name.includes(searchText)) {
    card.style.display = 'block';
  } else {
    card.style.display = 'none';
  }
});
}

// Ajout d'un écouteur d'événement sur la barre de recherche pour appeler la fonction searchCards() à chaque changement de contenu
document.querySelector('.search-input').addEventListener('input', searchCards);


function toggleForm() {
  // Votre code ici pour afficher ou masquer le formulaire
  console.log("Bouton Ajouter cliqué !");
}
  //code de validation
  document.getElementById("registrer").onsubmit=function(){
 let télephoneinput= document.getElementById("télephone").value;
 let télephoneRe =/\(\d{3}-\s\d{7}/;
 let validationResult=phoneRe.test(télephoneinput);
 if(validationResult===false){
  return false;
 }
 return true;
  }