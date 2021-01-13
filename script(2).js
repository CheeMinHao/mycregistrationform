window.onload = function() {
	var disProfile = localStorage.getItem('myProfile');
	var currentProfile = JSON.parse(disProfile);
	var res = [];
	for(var i in currentProfile) {
		res.push(currentProfile[i])
	}
	document.getElementById("profile_name").innerHTML = "Name: " + (res[0]["username"]);
	document.getElementById("profile_age").innerHTML = "Age: " + (res[0]["age"]);
	document.getElementById("profile_dob").innerHTML = "Date of Birth: " + (res[0]["dob"]);
	document.getElementById("profile_bio").innerHTML = "Bio: " + (res[0]["bio"]);
	files = new FileReader();
	newImage = localStorage.getItem("saved_img");
	reader.readAsDataURL(newImage);
}
