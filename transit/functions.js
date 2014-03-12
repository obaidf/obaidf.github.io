function drawMap()
{
	var lat;
	var lng;
	if (navigator.geolocation) { 
					navigator.geolocation.getCurrentPosition(function(position) {
						lat = position.coords.latitude;
						lng = position.coords.longitude;
						renderMap();
					}
				}
	else {
		alert("Geolocation is not supported by your web browser. Please update or use a different browser.");
		lat = 0;
		lng = 0;
	}
	
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	me = new google.maps.LatLng(lat, lng);


}