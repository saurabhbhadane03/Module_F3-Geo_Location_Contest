function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		alert("Geolocation is not supported by this browser.");
	}
}

function showPosition(position) {
	var lat = position.coords.latitude;
	var long = position.coords.longitude;
	localStorage.setItem("lat", lat);
	localStorage.setItem("long", long);

	var mapDiv = document.getElementById("map");
	mapDiv.innerHTML = '<iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=' + lat + ',' + long + '&hl=en&z=14&amp;output=embed"></iframe>';

	var getLocationBtn = document.getElementById("getLocationBtn");
	getLocationBtn.disabled = true;

	var removeLocationBtn = document.getElementById("removeLocationBtn");
	removeLocationBtn.style.display = "block";
}

function removeLocation() {
	localStorage.removeItem("lat");
	localStorage.removeItem("long");

	var mapDiv = document.getElementById("map");
	mapDiv.innerHTML = "";

	var getLocationBtn = document.getElementById("getLocationBtn");
	getLocationBtn.disabled = false;

	var removeLocationBtn = document.getElementById("removeLocationBtn");
	removeLocationBtn.style.display = "none";
}

var lat = localStorage.getItem("lat");
var long = localStorage.getItem("long");

if (lat && long) {
	showPosition({
		coords: {
			latitude: lat,
			longitude: long
		}
	});
}

var getLocationBtn = document.getElementById("getLocationBtn");
getLocationBtn.addEventListener("click", getLocation);

var removeLocationBtn = document.getElementById("removeLocationBtn");
removeLocationBtn.addEventListener("click", removeLocation);
