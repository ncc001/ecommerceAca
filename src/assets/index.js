const toggle = document.getElementsByClassName('.header__toggle ');
const heronav = document.getElementById('#header');
const herobar = document.getElementsByClassName('.header-list');

window.addEventListener('scroll', function () {
	if (window.scrollY >= 10) {
		heronav.classList.add('.header.fixed');
	} else heronav.classList.remove('header.fixed');
});
