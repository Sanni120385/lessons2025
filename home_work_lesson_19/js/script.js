"use strict"

document.addEventListener(`click`, documentActions)

function documentActions(e) {
	const targetElement = e.target

	if (targetElement.closest(`.icon-menu`)) {
		document.documentElement.toggleAttribute(`data-menu-open`)
	}
}
window.addEventListener('scroll', function () {
	const header = document.querySelector('.header')
	if (window.scrollY > 30) { // срабатывает после 50px скролла
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled')
	}
})