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
	document.getElementById("profile_img").src = res[0]["image"];
	// bannerImg = document.getElementById('profile_img');
	// bannerImg.src = "data:image/png;base64," + res[0]["image"];
}
