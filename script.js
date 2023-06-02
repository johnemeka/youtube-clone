var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".left-sidebar");
var container = document.querySelector(".container2");


menuIcon.onclick = function() {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container2")
}