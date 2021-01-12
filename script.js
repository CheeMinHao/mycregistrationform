let database = [];
const addProfile = (ev) => {
	ev.preventDefault();
	let profile = {
		username: document.getElementById("username").value,
		age: document.getElementById("age").value,
		dob: document.getElementById("dob").value,
		bio: document.getElementById("bio").value
	}
	database.push(profile);
	document.querySelector('form-group').reset(); //to clear form for next entry

	localStorage.setItem('myProfile', JSON.stringify(database));
	window.open("index(2).html");
}

// function displayProfile() {
// 	var profile = localStorage.getItem("myProfile");
// 	document.getElementById("profile_name").innerHTML = "Name: " + profile[0]["username"];
// 	document.getElementById("profile_age").innerHTML = "Age: " + profile[0]["age"];
// 	document.getElementById("profile_dob").innerHTML = "Date of Birth: " + profile[0]["dob"];
// 	document.getElementById("profile_bio").innerHTML = "Bio: " + profile[0]["bio"];
// }



document.getElementById('submit').addEventListener('click', addProfile);
