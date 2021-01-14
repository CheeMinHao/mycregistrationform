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
	
// 	bannerImage = document.getElementById('img').onload;
// 	imgData = getBase64Image(bannerImage);
// 	localStorage.setItem("imgData", imgData);

	document.forms[0].reset(); //to clear form for next entry

	localStorage.setItem('myProfile', JSON.stringify(database));
	window.open("index(2).html");
}

document.querySelector("#img").addEventListener("change", function() {
	const reader = new FileReader();

	reader.addEventListener("load", () => {
		localStorage.setItem("saved_img", reader.result);
	});
		
	reader.readAsDataURL(this.files[0]);
});
// function getBase64Image(img) {
//     var canvas = document.createElement("canvas");
//     canvas.width = img.width;
//     canvas.height = img.height;

//     var ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0);

//     var dataURL = canvas.toDataURL("image/png");

//     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }

document.getElementById('submit').addEventListener('click', addProfile);
