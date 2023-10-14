const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const pass = document.getElementById("passWord");
const box = document.getElementById("box");
const errorMess = document.getElementById("error");

box.addEventListener('submit', (e) => {
	let messages = []
	if (name.value == '' || name.value == null)
		messages.push('First Name cannot be empty')

	if (messages.length > 0) {
		e.preventDefault()
		errorMess.innerText = messages.join(', ')
	}
})


lastName.addEventListener("input", (event) => {
	if (lastName.validity.valueMissing) {
		lastName.setCustomValidity("Last Name cannot be empty");

	} else {
		lastName.setCustomValidity("");
	}
});

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