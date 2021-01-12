let database = [];
const addProfile = (ev) => {
	ev.preventDefault();
// 	var imageBefore = document.getElementById("img-label");
	let profile = {
		username: document.getElementById("username").value,
		age: document.getElementById("age").value,
		dob: document.getElementById("dob").value,
		bio: document.getElementById("bio").value,
// 		image: getBase64Image(imageBefore)
	}
	database.push(profile);
	document.forms[0].reset();; //to clear form for next entry

	localStorage.setItem('myProfile', JSON.stringify(database));
	window.open("index(2).html");

// 	function getBase64Image(img) {
// 		var canvas = document.createElement("canvas");
//     	canvas.width = img.width;
//     	canvas.height = img.height;

//     	var ctx = canvas.getContext("2d");
//     	ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

//     	return canvas.toDataURL("image/png");
// 	}
}



document.getElementById('submit').addEventListener('click', addProfile);
