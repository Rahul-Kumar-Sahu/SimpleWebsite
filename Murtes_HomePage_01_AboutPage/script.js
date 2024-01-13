
const menuToggle = document.getElementById('menu-toggle');
const navbarLinks = document.getElementById('navbar-links');

menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});




const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
        navbar.style.zIndex = "200";
    } else {
        navbar.classList.remove("scrolled");
        navbar.style.zIndex = "100";
    }
});
