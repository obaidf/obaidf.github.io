function startTheMap()
{
	var lat;
	var lng;
	if (navigator.geolocation) { 
					navigator.geolocation.getCurrentPosition(function(position) {
						lat = position.coords.latitude;
						lng = position.coords.longitude;
						console.log("I got here");
					});
	}
	else {
		alert("Geolocation is not supported by your web browser. Please update or use a different browser.");
		lat = 0;
		lng = 0;
	}
	
	var myOptions = {
						zoom: 13, // The larger the zoom number, the bigger the zoom
						center: me,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};

	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	me = new google.maps.LatLng(lat, lng);

	console.log("I got here too");

}