// Datastrukturen med de forskellige trin i breadcrumb
const bc = [
    {
        name: "Hvidevarer",
        link: "/hvidevarer"
    },
    {
        name: "Vaskemaskiner",
        link: "/hvidevarer/vaskemaskiner"
    },
    {
        name: "Bosch",
        link: "/hvidevarer/vaskemaskiner/bosch/"
    }
];


// Funktion der genererer breadcrumb-navigationen
function generateBreadcrumb() {

    // Finder nav-elementet i HTML
    const breadcrumb = document.getElementById("breadcrumb");

    // Tømmer navigationen, hvis knappen bliver trykket flere gange
    breadcrumb.innerHTML = "";

    // Opretter en liste til breadcrumb-elementerne
    const list = document.createElement("ul");

    // Går igennem alle elementerne i vores array
    bc.forEach((item, index) => {

        // Opretter et listeelement
        const listItem = document.createElement("li");

        // Tjekker om det er det sidste element
        if (index === bc.length - 1) {

            // Det sidste element skal kun være tekst
            listItem.textContent = item.name;

        } else {

            // De andre elementer skal være links
            const link = document.createElement("a");

            link.href = item.link;
            link.textContent = item.name;

            listItem.appendChild(link);
        }

        // Tilføjer listeelementet til listen
        list.appendChild(listItem);
    });

    // Tilføjer listen til nav-elementet
    breadcrumb.appendChild(list);
}


// Finder knappen
const button = document.getElementById("generateBtn");

// Når knappen klikkes, kaldes vores funktion
button.addEventListener("click", generateBreadcrumb);