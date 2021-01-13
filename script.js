let database = [];
const addProfile = (ev) => {
	ev.preventDefault();
	let profile = {
		username: document.getElementById("username").value,
		age: document.getElementById("age").value,
		dob: document.getElementById("dob").value,
		bio: document.getElementById("bio").value,
	}
	database.push(profile);

	previewFile();

	document.forms[0].reset(); //to clear form for next entry

	localStorage.setItem('myProfile', JSON.stringify(database));
	window.open("index(2).html");
}

function previewFile() {
	const file = document.querySelector("input[type=file]").file[0];
	const reader = new FileReader();

	reader.addEventListener("load", function () {
		localStorage.setItem("saved_img", reader.result);
	});
}

document.getElementById('submit').addEventListener('click', addProfile);
