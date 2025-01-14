function changeTheme(button) {
    const mode = button.dataset.mode;
    const themeIcon = document.getElementById("themeIcon");
    const root = document.documentElement;

    if (mode === "lightMode") {
        themeIcon.src = "img/darkMode.png";
        themeIcon.alt = "darkMode";
        button.dataset.mode = "darkMode";

        root.style.setProperty('--font', '#808080')
        root.style.setProperty('--header', '#000000')
        root.style.setProperty('--background', '#1A1A1A')
        root.style.setProperty('--paperColor', '#2F2F2F')
        

    } else if (mode === "darkMode") {
        themeIcon.src = "img/lightMode.png";
        themeIcon.alt = "lightMode";
        button.dataset.mode = "lightMode";

        root.style.setProperty('--font', '#000000')
        root.style.setProperty('--header', '#808080')
        root.style.setProperty('--background', '#d3d3d3')
        root.style.setProperty('--paperColor', '#f5f5f5')
    }

    localStorage.setItem("mode", button.dataset.mode);
}