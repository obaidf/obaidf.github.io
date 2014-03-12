function startTheMap()
{
	var lat;
	var lng;
	if (navigator.geolocation) { 
					navigator.geolocation.getCurrentPosition(function(position) {
						lat = position.coords.latitude;
						lng = position.coords.longitude;
					});
	}
	else {
		alert("Geolocation is not supported by your web browser. Please update or use a different browser.");
		lat = 0;
		lng = 0;
	}
	
	var me = new google.maps.LatLng(lat, lng);

	var myOptions = {
						zoom: 13, // The larger the zoom number, the bigger the zoom
						center: me,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};

	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);



	//map.panTo(me); //why this is causing an infinite loop?

				// Create a marker
				
					marker = new google.maps.Marker({
					position: me,
					title: "Here I Am!"
				});
				marker.setMap(map);

				// Open info window on click of marker
				google.maps.event.addListener(marker, 'click', function() {
					infowindow.setContent(marker.title);
					infowindow.open(map, marker);
				});

}