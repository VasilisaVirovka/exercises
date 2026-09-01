// Array med de ord, der skal udskiftes
const curseWords = [
    {
        bad: "var",
        good: "const"
    },
    {
        bad: "float",
        good: "grid"
    },
    {
        bad: "marquee",
        good: "just don't"
    }
];

// Finder elementerne fra HTML
const text = document.querySelector("#text");
const filterButton = document.querySelector("#filter-button");
const dialog = document.querySelector("#dialog");
const closeButton = document.querySelector("#close-button");

// Holder styr på, om teksten allerede er blevet opdateret
let filtered = false;

// Funktion, der erstatter de dårlige ord
function filterText() {

    // Hvis teksten allerede er opdateret
    if (filtered) {
        dialog.showModal();
        return;
    }

    // Går igennem alle ordene i arrayet
    curseWords.forEach(word => {

        // Erstat det dårlige ord med det gode ord
        // og giv det gode ord en class
        text.innerHTML = text.innerHTML.replace(
            word.bad,
            `<span class="good-word">${word.good}</span>`
        );
    });

    // Fortæller programmet, at teksten nu er opdateret
    filtered = true;
}

// Når knappen bliver klikket, kaldes filterText()
filterButton.addEventListener("click", filterText);

// Luk dialogen
closeButton.addEventListener("click", () => {
    dialog.close();
});