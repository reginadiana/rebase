let icon = document.getElementById("menu-toggle");
let menu = document.getElementById("nav-menu");

icon.addEventListener("click", changeClassMenu);

function changeClassMenu() {
  menu.className.includes("open") ? closeMenu() : openMenu();
}

function openMenu() {
  menu.classList.add("open");
  menu.classList.remove("close");
}

function closeMenu() {
  menu.classList.add("close");
  menu.classList.remove("open");
}
