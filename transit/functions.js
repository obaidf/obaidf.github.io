function startTheMap()
{
			var myLat = 0;
			var myLng = 0;
			var request = new XMLHttpRequest();
			var me; //= new google.maps.LatLng(myLat, myLng);
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

			init();
			getSched();

			//var stations = JSON.parse(./trains.json);




		function getSched() {
			xhr = new XMLHttpRequest();
			xhr.open("get", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true); // this is possible because of cross-origin resource sharing (CORS) enabled for web application

			// onreadystatechange has to be set to a...
			// ...function when request is completed, to...
			// ...handle the response
			xhr.onreadystatechange = dataReady;
			xhr.send(null); // Go! Execute!
		}

		function dataReady() {
			// The readyState numbers:
			// 0 = not initialized
			// 1 = Set up
			// 2 = Sent
			// 3 = In progress
			// 4 = Complete
			if (xhr.readyState == 4 && xhr.status == 200) {
				scheduleData = JSON.parse(xhr.responseText);
				scheduleDom = document.getElementById("schedule");
				scheduleDom.innerHTML = scheduleData["line"];
			}
			else if (xhr.readyState == 4 && xhr.status == 500) {
				scheduleDom = document.getElementById("schedule");
				scheduleDom.innerHTML = alert("Error retrieving data, please refresh the page.")

			}
		}


			function init()
			{
				getMyLocation();
				map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
			}

			function getMyLocation()
			{
				if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
					navigator.geolocation.getCurrentPosition(function(position) {
						myLat = position.coords.latitude;
						myLng = position.coords.longitude;
						//renderMap();
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

				/*// Calling Google Places API
				var request = {
					location: me,
					radius: '500',
					types: ['food']
				};
				service = new google.maps.places.PlacesService(map);
				//service.search(request, callback);*/
			}

			function createMarker(place)
			{
				var placeLoc = place.geometry.location;
				var marker = new google.maps.Marker({
					map: map,
					position: place.geometry.location,
					icon:'./T_marker.png'
					//animation: google.maps.Animation.DROP

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

/*

//parsing the mbta json:
stop_of_interest = "Davis"
data = JSON.parse(response.text);
//to print out the line, console.log(schedule.line);

//step 1: go through each train
for (i = 0; i < data["schedule"].length; i++) {
	destination = data["schedule"][i];
	//step 2: get list of stops
	stops = destination["Predictions"];
	for (j = 0; j < stops.length; j++) {
		s = stops[j];
		if (s==stop_of_interest) {
			console.log(s["Seconds"]);
			console.log(destination["Destination"]);//what does this line do?
		}
	}

}

*/



