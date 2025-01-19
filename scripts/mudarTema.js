function changeTheme(button) {
    const mode = button.dataset.mode
    const themeIcon = document.getElementById("themeIcon");
    const root = document.documentElement;

    if (mode === "lightMode") {
        themeIcon.src = "img/darkMode.png";
        themeIcon.alt = "darkMode";

        button.dataset.mode = "darkMode";

        root.style.setProperty('--font1', '#7f7f7f')
        root.style.setProperty('--font2', '#565656')
        root.style.setProperty('--font3', '#ffffff')
        root.style.setProperty('--font4', '#b6b1ad')
        root.style.setProperty('--background', '#0f0f0f')   

    } else if (mode === "darkMode") {
        themeIcon.src = "img/lightMode.png";
        themeIcon.alt = "lightMode";

        button.dataset.mode = "lightMode";

        root.style.setProperty('--font1', '#808080')
        root.style.setProperty('--font2', '#a9a9a9')
        root.style.setProperty('--font3', '#000000')
        root.style.setProperty('--font4', '#494e52')
        root.style.setProperty('--background', '#f0f0f0')    
    }

    localStorage.setItem("mode", button.dataset.mode);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("mode") || "lightMode";
    const button = document.getElementById('buttonTheme');

    // Verifica se o modo salvo é diferente do modo atual
    if (button.dataset.mode !== savedMode) {
        changeTheme(button);
    }
});
