let icon = document.getElementById('menu-toggle');
let menu = document.getElementById('nav-menu');

icon.addEventListener('click', changeClassMenu);

function changeClassMenu() {
	menu.className.includes('open') ? closeMenu() : openMenu();
}

function openMenu() {
	menu.classList.add('open');
	menu.classList.remove('close');
}

function closeMenu() {
	menu.classList.add('close');
	menu.classList.remove('open');
}

/*Scroll of navbar*/
window.sr = scrollReveal();

sr.reveal('.animate-left', {
	origin: 'left',
	duration: 1000,
	distances: '25rem',
	delay: 300
});

sr.reveal('.animate-right', {
	origin: 'right',
	duration: 1000,
	distances: '25rem',
	delay: 600
});

sr.reveal('.animate-top', {
	origin: 'top',
	duration: 1000,
	distances: '25rem',
	delay: 600
});

sr.reveal('.animate-bottom', {
	origin: 'bottom',
	duration: 1000,
	distances: '25rem',
	delay: 600
});