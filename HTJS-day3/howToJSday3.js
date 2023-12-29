function changeBackgroundColor() {
	let entirePage = document.body
	entirePage.style.backgroundColor = getRandomColor()
	let headOne = document.getElementById('headone')
	headOne.style.color = getRandomColor()
}
function getRandomColor() {
	let red = Math.floor(Math.random() * 256)
	let green = Math.floor(Math.random() * 256)
	let blue = Math.floor(Math.random() * 256)
	let color = '#' + red.toString(16).padStart(2, '0') + green.toString(16).padStart(2, '0') +
		blue.toString(16).padStart(2, '0')
	return color
}
let ind = 0;
const names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];

function nextName() {
	if (ind < names.length - 1) {
		ind = ind + 1
	} else {
		ind = 0
	}
	let headOne = document.getElementById('headone')
	headOne.innerText = names[ind]
}
function previousName() {
	if (ind > 0) {
		ind = ind - 1
	} else {
		ind = names.length - 1
	}
	let headOne = document.getElementById('headone')
	headOne.innerText = names[ind]
}