/* =========================================
   SNB TECHNOLOGIES
   JAVASCRIPT FUNCTIONALITY
   ========================================= */


/* 1. MOBILE NAVIGATION */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.textContent = isOpen ? "✕": "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation": "Open navigation"
        );

    });


    // Close menu after selecting a navigation link

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

        });

    });

}


/* 2. DARK AND LIGHT THEME */

const themeToggle = document.querySelector(".theme-toggle");

const savedTheme = localStorage.getItem("snb-theme");

const initialTheme =
savedTheme === "light" ? "light": "dark";


function applyTheme(theme) {

    document.body.dataset.theme = theme;

    if (themeToggle) {

        themeToggle.textContent =
        theme === "dark" ? "☀": "☾";

        themeToggle.setAttribute(
            "aria-label",
            theme === "dark"
            ? "Switch to light theme": "Switch to dark theme"
        );

    }

}


// Apply saved theme when the page loads

applyTheme(initialTheme);


// Switch themes when the button is clicked

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        const currentTheme = document.body.dataset.theme;

        const newTheme =
        currentTheme === "dark" ? "light": "dark";

        applyTheme(newTheme);

        localStorage.setItem("snb-theme", newTheme);

    });

}


/* 3. AUTOMATIC COPYRIGHT YEAR */

const yearElement = document.querySelector("#current-year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* 4. BASIC CONSOLE IDENTIFICATION */

console.log(
    "%cSNB TECHNOLOGIES",
    "color: #38BDF8; font-size: 20px; font-weight: bold;"
);

console.log(
    "Engineering Beyond Limits. Welcome to the platform."
);