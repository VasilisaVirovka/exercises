const texts = {
    da: {
        title: "Velkommen til vores website",
        description: "Dette er en simpel hjemmeside med en language switcher.",
        button: "Læs mere"
    },

    de: {
        title: "Willkommen auf unserer Website",
        description: "Dies ist eine einfache Website mit einem Sprachumschalter.",
        button: "Mehr erfahren"
    }
};

const languageSelect = document.querySelector("#language-select");

function changeLanguage(language) {
    document.querySelector("#title").textContent = texts[language].title;
    document.querySelector("#description").textContent = texts[language].description;
    document.querySelector("#button").textContent = texts[language].button;
}

changeLanguage("da");

languageSelect.addEventListener("change", function () {
    changeLanguage(languageSelect.value);
});