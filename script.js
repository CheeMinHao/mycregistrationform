let database = [];
const addProfile = (ev) => {
	ev.preventDefault();
	var imageBefore = document.getElementById("img-label");
	let profile = {
		username: document.getElementById("username").value,
		age: document.getElementById("age").value,
		dob: document.getElementById("dob").value,
		bio: document.getElementById("bio").value,
		image: getBase64Image(imageBefore)
	}
	database.push(profile);
	document.querySelector('form-group').reset(); //to clear form for next entry

	localStorage.setItem('myProfile', JSON.stringify(database));
	window.open("index(2).html");

	function getBase64Image(img) {
		var canvas = document.createElement("canvas");
    	canvas.width = img.width;
    	canvas.height = img.height;

    	var ctx = canvas.getContext("2d");
    	ctx.drawImage(img, 0, 0);

    	var dataURL = canvas.toDataURL("image/png");

    	return dataURL.replace(/^data:image\/(png|jpg);base64,/, "")
	}
}

// function displayProfile() {
// 	var profile = localStorage.getItem("myProfile");
// 	document.getElementById("profile_name").innerHTML = "Name: " + profile[0]["username"];
// 	document.getElementById("profile_age").innerHTML = "Age: " + profile[0]["age"];
// 	document.getElementById("profile_dob").innerHTML = "Date of Birth: " + profile[0]["dob"];
// 	document.getElementById("profile_bio").innerHTML = "Bio: " + profile[0]["bio"];
// }



document.getElementById('submit').addEventListener('click', addProfile);
