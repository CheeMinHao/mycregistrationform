let database = [];
const addProfile = (ev) => {
	ev.preventDefault();
	let profile = {
		username: document.getElementById("username").value,
		age: document.getElementById("age").value,
		dob: document.getElementById("dob").value,
		bio: document.getElementById("bio").value,
		image: drawingImage();
	}
	database.push(profile);
	document.forms[0].reset(); //to clear form for next entry

	localStorage.setItem('myProfile', JSON.stringify(database));
	window.open("index(2).html");

	function drawingImage() {
		var photo = document.getElementById("img");
		var imgCanvas = document.createElement("canvas");
		imgContext = imgCanvas.getContext("2d");

		imgCanvas.width = img.width;
		imgCanvas.height = img.height;

		imgContext.drawImage(img, 0, 0, img.width, img.height);
		var imgAsDataURL = imgCanvas.toDataURL("data:image/jpg;base64, ");
		return imgAsDataURL;
	}
}

document.getElementById('submit').addEventListener('click', addProfile);
