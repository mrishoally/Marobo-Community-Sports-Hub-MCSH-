let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
let hamburger = document.querySelector(".hamburger i");
let navLinks = document.querySelector(".nav-links");

// Toggle search box
searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if (navbar.classList.contains("showInput")) {
        searchBox.classList.replace("bx-search", "bx-message-square-x");
    } else {
        searchBox.classList.replace("bx-message-square-x", "bx-search");
    }
});

// Toggle mobile menu
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Toggle submenus on mobile
document.querySelectorAll(".links li a").forEach(anchor => {
    anchor.addEventListener("click", (e) => {
        if (e.target.nextElementSibling && e.target.nextElementSibling.classList.contains("sub-menu")) {
            e.preventDefault();
            e.target.nextElementSibling.classList.toggle("active");
        }
    });
});
