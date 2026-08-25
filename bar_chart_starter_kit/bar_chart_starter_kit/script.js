const list = document.querySelector("ul");

let values = [];

// Funktion der laver et tilfældigt tal mellem 0 og 100
function randomNumber() {
    return Math.floor(Math.random() * 101);
}

// Funktion der laver en ny søjle
function createBar(value) {
    const li = document.createElement("li");

    li.style.setProperty("--height", value);

    list.appendChild(li);
}

// Tilføj en ny måling hvert sekund
setInterval(() => {
    const value = randomNumber();

    values.push(value);

    createBar(value);

    // Hvis der er mere end 20 søjler,
    // fjernes den ældste
    if (values.length > 20) {
        values.shift();
        list.removeChild(list.firstElementChild);
    }
}, 1000);