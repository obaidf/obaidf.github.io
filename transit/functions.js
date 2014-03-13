function startTheMap()
{
			var myLat = 0;
			var myLng = 0;
			var request = new XMLHttpRequest();
			var me = new google.maps.LatLng(myLat, myLng);
			var myOptions = {
						zoom: 13, // The larger the zoom number, the bigger the zoom
						center: me,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};
			var map;
			var marker;
			var infowindow = new google.maps.InfoWindow();
			var places;
			var xhr;

			init(myOptions);

			xhr = new XMLHttpRequest();
	//xhr.open("method", "url", asynchronous? true or false);
	xhr.open("GET", "http://mbta.herokuapp.com/mapper/rodeo.json", true);
	//onreadystatechange has to be set to a function when request is completed to handle the response
	xhr.onreadystatechange = dataReady();
	xhr.send(null); //Go! Execute!

	console.log("Yay!!!")


function init()
			init();

			function init()
			{
				map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
				getMyLocation();
			}

function getMyLocation()
			{
				if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
					navigator.geolocation.getCurrentPosition(function(position) {
						myLat = position.coords.latitude;
						myLng = position.coords.longitude;
						renderMap();
					});
				}
				else {
					alert("Geolocation is not supported by your web browser.  What a shame!");
				}
			}

function renderMap()
			{
				me = new google.maps.LatLng(myLat, myLng);

				// Update map and go there...
				map.panTo(me);

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

				// Calling Google Places API
				var request = {
					location: me,
					radius: '500',
					types: ['food']
				};
				service = new google.maps.places.PlacesService(map);
				//service.search(request, callback);
			}

function createMarker(place)
			{
				var placeLoc = place.geometry.location;
				var marker = new google.maps.Marker({
					map: map,
					position: place.geometry.location
				});

				google.maps.event.addListener(marker, 'click', function() {
					infowindow.close();
					infowindow.setContent(place.name);
					infowindow.open(map, this);
				});
      }

//src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=TRUE";
/*function initialize(){
	var mapOptions = {
		zoom: 8
	};
	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);*/

	

function dataReady(){
	if (xhr.readystate==4 && xhr.status == 200){
	console.log("DONE!")
	scheduleData = JSON.parse(xhr.responseText);
	console.log(schedule);
	scheduleDom = document.getElementbyId("map-canvas");
	scheduleDom.innerHTML = scheduleData["line"];}
	//for the assigment can get away with 500 status code else do an "else statement" to catch this error}


}

}



/*function startTheMap()
{
	var lat;
	var lng;


	//map = new google.maps.Map(document.getElementById("map_canvas")); //ssss

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
*/