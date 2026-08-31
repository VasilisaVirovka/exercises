// 5. Check if "Aalborg" is sorted before or after "Alerup" in Danish

const city1 = "Aalborg";
const city2 = "Alerup";

console.log(city1.localeCompare(city2, "da"));


// 6. Add dots to a string, so the string becomes at least 20 characters long

const text = "Hello";

console.log(text.padEnd(20, "."));


// 7. Add spaces before a text, so the string will be at least 10 characters

const text2 = "Hello";

console.log(text2.padStart(10, " "));


// 8. Create a string of a specific number of *

console.log("*".repeat(10));