function toggleNav() {
    document.body.classList.toggle("nav-open");
}

document.querySelector(".nav-close").addEventListener("click", () => {
    toggleNav();
})
document.querySelector(".nav-open-button").addEventListener("click", () => {
    toggleNav();
})