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

	var image = document.querySelector("input[type=file]").files[0];
	const reader = new FileReader();
	reader.addEventListener("load", function () {
		localStorage.setItem("saved_img", reader.result);
	}, false);


	document.forms[0].reset(); //to clear form for next entry

	localStorage.setItem('myProfile', JSON.stringify(database));
	window.open("index(2).html");
}


document.getElementById('submit').addEventListener('click', addProfile);
