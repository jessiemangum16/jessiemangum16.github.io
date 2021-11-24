function toggleNav() {
    var menu = document.getElementById("menu");
    var updateElement = document.getElementById("menu-icon");
 //toggle adds a class if it's not there or removes it if it is.
 menu.classList.toggle("open");
 updateElement.classList.toggle("open");
}   