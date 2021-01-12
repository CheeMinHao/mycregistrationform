window.onload = function() {
	var disProfile = localStorage.getItem('myProfile ');
	var currentProfile = disProfile;
	document.getElementById("profile_name").innerHTML = "Name: " + (currentProfile[0]["username"]);
	document.getElementById("profile_age").innerHTML = "Age: " + (currentProfile[0]["age"]);
	document.getElementById("profile_dob").innerHTML = "Date of Birth: " + (currentProfile[0]["dob"]);
	document.getElementById("profile_bio").innerHTML = "Bio: " + (currentProfile[0]["bio"]);
}
