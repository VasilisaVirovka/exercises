const title = document.querySelector("#title");
const foxButton = document.querySelector("#fox-button");
const batButton = document.querySelector("#bat-button");

foxButton.addEventListener("click", function () {
    title.dataset.filter = "fox";
});

batButton.addEventListener("click", function () {
    title.dataset.filter = "bat";
});