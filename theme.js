document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        themeToggle.textContent = "Switch to Light Mode";
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        themeToggle.textContent = "Switch to Dark Mode";
    }

    themeToggle.addEventListener("click", function () {
        let currentTheme = document.documentElement.getAttribute("data-theme");

        if (currentTheme === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
            themeToggle.textContent = "Switch to Dark Mode";
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            themeToggle.textContent = "Switch to Light Mode";
            localStorage.setItem("theme", "dark");
        }
    });
});