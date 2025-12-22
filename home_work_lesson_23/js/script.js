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

const bodyElement = document.body
console.log(bodyElement)


// Задача #2

// Відповідь:

function createList(listItem = 5) {
	if (typeof listItem !== `number` || listItem <= 0 || Number.isInteger(listItem)) {
		console.log(`Кількість елементів має бути більше 0, має бути числом`)
		return
	}
	const ul = document.createElement(`ul`)
	for (let i = 0; i < listItem; i++) {
		const li = document.createElement(`li`)
		li.textContent = `Елемент ${i + 1}`
		ul.appendChild(li)
	}
	document.body.appendChild(ul)
}
createList()
createList("text")
createList(3)
createList(10)
createList(-6)


// Задача #3

// Відповідь:

document.body.classList.add(`loaded`)
if (document.body.classList.contains(`loaded`)) {
	document.body.style.color = `green`
} else {
	console.log(`Елемент <body> з класом "loaded" не існує`)
}


// Задача №4

// Відповідь:

const items = document.querySelectorAll(`.item`)
if (items.length === 0) {
	console.log(`Елементів з класом item немає`)
} else {
	items.forEach((item, index) => {
		item.classList.add(`active`)
		item.textContent = `Елемент №${index + 1}`
	})
}


// Задача №5

// Відповідь:

const button = document.querySelector(`.button`)
function scrollToBlock(element) {
	if (button.hasAttribute(`class`)) {
		const block = element.dataset.scroll || "start"
		element.scrollIntoView({
			block: block,
			inline: "nearest",
			behavior: "smooth"
		})
	}
}
scrollToBlock(button)


// Задача №6

// Відповідь:

const links = document.querySelectorAll(`.link`)
links.forEach(link => {
	link.setAttribute(`data-speed`, `100`)
	const dataSpeed = parseInt(link.getAttribute(`data-speed`))
	if (dataSpeed < 200) {
		link.style.color = `red`
	}
})




