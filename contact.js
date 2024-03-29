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
