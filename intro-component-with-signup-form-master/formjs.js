const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const pass = document.getElementById("passWord");
const box = document.getElementById("box");
const errorMess = document.getElementById("error");
const errorMess2 = document.getElementById("error2");
const errorMess3 = document.getElementById("error3");
const errorMess4 = document.getElementById("error4");

box.addEventListener('submit', (e) => {
	let messages = []
	if (firstName.value == '' || firstName.value == null) {
		messages.push('First Name cannot be empty')
	}

	if (messages.length > 0) {
		e.preventDefault()
		errorMess.innerText = messages.join('\n ')
	}
})

box.addEventListener('submit', (e) => {
	let messages = []
	
	if (lastName.value == '' || lastName.value == null) {
		messages.push('Last Name cannot be empty')
	}

	if (messages.length > 0) {
		e.preventDefault()
		errorMess2.innerText = messages.join('\n ')
	}
})

email.addEventListener("input", (event) => {
	if (email.validity.typeMismatch) {
		email.setCustomValidity("Looks like this is not an email");
	} else {
		email.setCustomValidity("");
	}
});

pass.addEventListener("input", (event) => {
	if (pass.validity.valueMissing) {
		pass.setCustomValidity("Password cannot be empty");

	} else {
		pass.setCustomValidity("");
	}
});