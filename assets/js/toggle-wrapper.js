var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function (e) {
    e.stopPropagation();
    el.classList.toggle("toggled");
};

// On phones the sidebar overlays the page: close it when tapping outside it
document.addEventListener("click", function (e) {
    if (window.innerWidth < 768 && el.classList.contains("toggled") &&
        !document.getElementById("sidebar-wrapper").contains(e.target)) {
        el.classList.remove("toggled");
    }
});
