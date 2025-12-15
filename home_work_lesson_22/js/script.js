"use strict"

// document.addEventListener(`click`, documentActions)

// function documentActions(e) {
// 	const targetElement = e.target

// 	if (targetElement.closest(`.icon-menu`)) {
// 		document.documentElement.toggleAttribute(`data-menu-open`)
// 	}
// }
let someVar = 0
console.log(++someVar)
console.log(typeof someVar)

let someString = `Java Script`
for (let i = 0; i < someString.length; ++i) {
	console.log(someString[i])
}

// if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20")
// 	if (false || false && true || false)
// 		if (false || false || false)
// 			if (false)

function calcDivision(a = 100, b = 10) {
	const numA = Number(a)
	const numB = Number(b)
	if (b === 0 || isNaN(numA) || isNaN(numB)) {
		return `Результат ділення: Невірні вхідні дані`
	}
	const result = numA / numB
	return `Результат ділення: ${result}`
}
console.log(calcDivision())
console.log(calcDivision(20, 4))
console.log(calcDivision(15, 3))
console.log(calcDivision(100))
console.log(calcDivision(50, 2))
console.log(calcDivision(10, 0))
console.log(calcDivision(10, `true`))
console.log(calcDivision(``, `true`))
console.log(calcDivision(500, 25))
console.log(calcDivision(`false`, `true`))
console.log(calcDivision(0, 0))

let someArray = [10, `Sanni`, `true`, 40, `false`]
someArray.forEach((item, index) => {
	if (item === 10) {
		console.log(`10 index ${index}`)
	}
}

)