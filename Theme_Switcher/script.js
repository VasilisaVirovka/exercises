const themeSelect = document.querySelector("#theme-select");
const body = document.querySelector("body");

themeSelect.addEventListener("change", function () {
    body.dataset.theme = themeSelect.value;
});