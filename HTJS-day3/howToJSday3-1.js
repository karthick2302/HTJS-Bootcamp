
let ind = 0;
const names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];
let headOne = document.getElementById('headone')
headOne.innerText = names[ind]
function nextName() {
	if (ind < names.length - 1) {
		ind = ind + 1
	} else {
		ind = 0
	}
	headOne.innerText = names[ind]
}
function previousName() {
	if (ind > 0) {
		ind = ind - 1
	} else {
		ind = names.length - 1
	}
	headOne.innerText = names[ind]
}