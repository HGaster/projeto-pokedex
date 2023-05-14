const ChangeThemeButton = document.getElementById("change-theme-button");
const ButtonImageChangeThemeButton = document.querySelector(".button-image");
const body = document.querySelector("body");



ChangeThemeButton.addEventListener("click", () => {
    const DarkModeOn = body.classList.contains("dark-mode");

    body.classList.toggle("dark-mode")
    if (DarkModeOn) {
        ButtonImageChangeThemeButton.setAttribute("src", "./src/imagens/sun.png");
    } else {
        ButtonImageChangeThemeButton.setAttribute("src", "./src/imagens/moon.png");
    }
});