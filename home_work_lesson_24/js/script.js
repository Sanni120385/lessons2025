"use strict"

// document.addEventListener(`click`, documentActions)

// function documentActions(e) {
// 	const targetElement = e.target

// 	if (targetElement.closest(`.icon-menu`)) {
// 		document.documentElement.toggleAttribute(`data-menu-open`)
// 	}
// }

// Задача #1

// Відповідь:

const items = document.querySelectorAll(`.item`)
if (items.length > 0) {
	items.forEach(function (item) {
		item.addEventListener(`click`, function () {
			this.classList.toggle(`active`)
		})
	})

} else {
	console.log(`Елементів з класом item не знайдено`)
}




// Задача #2

// Відповідь:


window.addEventListener("load", pageLoaded)
function pageLoaded(e) {
	document.documentElement.classList.add('loaded')
}



// Задача #3

// Відповідь:

const header = document.querySelector('header')
const footer = document.querySelector('footer')

if (header && footer) {
	const initialBg = getComputedStyle(footer).backgroundColor;

	header.addEventListener('mouseenter', (e) => {
		footer.style.backgroundColor = 'tomato'
	})

	header.addEventListener('mouseleave', (e) => {
		footer.style.backgroundColor = initialBg
	})
}


// Задача №4

// Відповідь:

document.addEventListener('DOMContentLoaded', function () {
	const items = document.querySelectorAll('.item')

	items.forEach(item => {
		const delayAttr = item.dataset.delay
		const maxAttr = item.dataset.max

		if (!delayAttr || !maxAttr || isNaN(delayAttr) || isNaN(maxAttr)) {
			console.warn('Елемент .item не має коректних data-delay та data-max атрибутів')
			return
		}

		const delay = parseInt(delayAttr)
		const maxNum = parseInt(maxAttr)
		let intervalId = null
		let isAnimating = false

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting && !isAnimating) {
					isAnimating = true
					let counter = 1

					intervalId = setInterval(() => {
						item.textContent = counter

						if (counter >= maxNum) {
							clearInterval(intervalId)
						}
						counter++
					}, delay)

					observer.unobserve(item)
				}
			})
		}, {
			threshold: 0.1
		})

		observer.observe(item)
	})
})






